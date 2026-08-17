"use client";

import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import AstraMessage from "./AstraMessage";

type Message = {
  id: number;
  role: "user" | "astra";
  content: string;
};

type JsonObject = Record<string, unknown>;

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null;
}

function getErrorMessage(data: unknown): string | null {
  if (!isJsonObject(data)) {
    return null;
  }

  return typeof data.error === "string" ? data.error : null;
}

function getResponseMessage(data: unknown): string | null {
  if (!isJsonObject(data)) {
    return null;
  }

  return typeof data.response === "string" ? data.response : null;
}

function isAuthenticated(data: unknown): boolean {
  if (!isJsonObject(data)) {
    return false;
  }

  return data.authenticated === true;
}

export default function AstraInterface() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Creator authentication state
  const [creatorKey, setCreatorKey] = useState("");
  const [showCreatorAuth, setShowCreatorAuth] = useState(false);
  const [isCreator, setIsCreator] = useState(false);
  const [creatorLoading, setCreatorLoading] = useState(false);

  /*
   * ------------------------------------------------------------
   * Check existing creator session
   * ------------------------------------------------------------
   *
   * The server checks the HttpOnly cookie.
   *
   * We never store the creator key in the browser after login.
   */
  useEffect(() => {
    let cancelled = false;

    async function checkCreatorSession() {
      try {
        const response = await fetch("/api/astra/creator", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const data: unknown = await response.json();

        if (!cancelled) {
          setIsCreator(isAuthenticated(data));
        }
      } catch (error) {
        console.error("CREATOR SESSION CHECK ERROR:", error);

        if (!cancelled) {
          setIsCreator(false);
        }
      }
    }

    void checkCreatorSession();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * ------------------------------------------------------------
   * Creator authentication
   * ------------------------------------------------------------
   */
  async function handleCreatorAuthentication(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const trimmedKey = creatorKey.trim();

    if (!trimmedKey || creatorLoading) {
      return;
    }

    setCreatorLoading(true);

    try {
      const response = await fetch("/api/astra/creator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        cache: "no-store",
        body: JSON.stringify({
          key: trimmedKey,
        }),
      });

      const data: unknown = await response.json();

      const errorMessage = getErrorMessage(data);

      if (errorMessage) {
        throw new Error(errorMessage);
      }

      if (!response.ok) {
        throw new Error("Creator authentication failed.");
      }

      if (!isAuthenticated(data)) {
        throw new Error("Creator authentication failed.");
      }

      setIsCreator(true);
      setShowCreatorAuth(false);
      setCreatorKey("");

      /*
       * Keep this message simple.
       *
       * Sofia's actual personality will be handled by /api/astra
       * on the next conversation request.
       */
      const welcomeMessage: Message = {
        id: Date.now(),
        role: "astra",
        content:
          "Creator authentication successful. Creator Mode is now active.",
      };

      setMessages((current) => [...current, welcomeMessage]);
    } catch (error) {
      console.error("CREATOR AUTH ERROR:", error);

      const errorMessage: Message = {
        id: Date.now(),
        role: "astra",
        content:
          error instanceof Error
            ? error.message
            : "Creator authentication failed.",
      };

      setMessages((current) => [...current, errorMessage]);
    } finally {
      setCreatorLoading(false);
    }
  }

  /*
   * ------------------------------------------------------------
   * Main ASTRA conversation
   * ------------------------------------------------------------
   */
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery || isLoading || creatorLoading) {
      return;
    }

    /*
     * /creator is a local command.
     *
     * It NEVER gets sent to OpenRouter.
     */
    if (trimmedQuery.toLowerCase() === "/creator") {
      setQuery("");
      setShowCreatorAuth(true);
      return;
    }

    /*
     * Allow the creator to explicitly exit creator mode.
     *
     * This requires an API route:
     *
     * POST /api/astra/creator/exit
     *
     * If you already have that route, this will work directly.
     */
    if (trimmedQuery.toLowerCase() === "/exitcreatormode") {
      setQuery("");
      setIsLoading(true);

      try {
        const response = await fetch("/api/astra/creator/exit", {
          method: "POST",
          credentials: "include",
          cache: "no-store",
        });

        const data: unknown = await response.json();

        const errorMessage = getErrorMessage(data);

        if (errorMessage) {
          throw new Error(errorMessage);
        }

        if (!response.ok) {
          throw new Error("Unable to exit Creator Mode.");
        }

        setIsCreator(false);

        const exitMessage: Message = {
          id: Date.now(),
          role: "astra",
          content:
            "Creator Mode has been closed. ASTRA is back in public mode.",
        };

        setMessages((current) => [...current, exitMessage]);
      } catch (error) {
        console.error("CREATOR EXIT ERROR:", error);

        const errorMessage: Message = {
          id: Date.now(),
          role: "astra",
          content:
            error instanceof Error
              ? error.message
              : "Unable to exit Creator Mode.",
        };

        setMessages((current) => [...current, errorMessage]);
      } finally {
        setIsLoading(false);
      }

      return;
    }

    /*
     * Add the user's message to the local conversation.
     */
    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: trimmedQuery,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setQuery("");
    setIsLoading(true);

    try {
      /*
       * Convert our internal messages into the API format.
       */
      const conversation = updatedMessages.map((message) => ({
        role:
          message.role === "astra" ? ("assistant" as const) : ("user" as const),
        content: message.content,
      }));

      const response = await fetch("/api/astra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        cache: "no-store",
        body: JSON.stringify({
          messages: conversation,
        }),
      });

      const data: unknown = await response.json();

      /*
       * Handle server-side API errors.
       */
      const errorMessage = getErrorMessage(data);

      if (errorMessage) {
        throw new Error(errorMessage);
      }

      if (!response.ok) {
        throw new Error("ASTRA connection failed.");
      }

      /*
       * Safely extract response.
       *
       * This fixes:
       *
       * Type 'string | undefined' is not assignable to type 'string'
       */
      const responseText = getResponseMessage(data);

      if (responseText === null) {
        throw new Error("ASTRA returned an invalid response.");
      }

      const astraMessage: Message = {
        id: Date.now() + 1,
        role: "astra",
        content: responseText,
      };

      setMessages((current) => [...current, astraMessage]);
    } catch (error) {
      console.error("ASTRA CONNECTION ERROR:", error);

      const errorMessage: Message = {
        id: Date.now() + 1,
        role: "astra",
        content:
          error instanceof Error
            ? error.message
            : "ASTRA neural connection failed.",
      };

      setMessages((current) => [...current, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex h-full min-h-0 flex-col bg-[#02070b]/30">
      {/* Header */}
      <div className="border-b border-cyan-500/10 px-8 py-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] text-cyan-600 uppercase">
              Genesis Neural Interface
            </p>

            <h2 className="mt-2 font-mono text-2xl tracking-[0.25em] text-cyan-200 uppercase">
              ASTRA
            </h2>
          </div>

          <div
            className={`flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase ${
              isCreator ? "text-pink-400" : "text-emerald-400"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                isCreator
                  ? "bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)]"
                  : "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
              }`}
            />

            {isCreator
              ? "Creator Mode"
              : isLoading
                ? "Processing Request"
                : "Neural Core Online"}
          </div>
        </div>
      </div>

      {/* Conversation */}
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex-1 overflow-y-auto px-8 py-8">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="max-w-2xl text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/5 shadow-[0_0_45px_rgba(34,211,238,0.12)]">
                  <span className="font-mono text-2xl text-cyan-300">A</span>
                </div>

                <h3 className="mt-8 font-mono text-xl tracking-[0.2em] text-cyan-200 uppercase">
                  ASTRA Neural Core
                </h3>

                <p className="mt-4 font-mono text-sm leading-7 text-cyan-600">
                  Ask ASTRA for information, research, technical guidance,
                  programming assistance, archive knowledge, or general
                  intelligence.
                </p>

                <p className="mt-5 font-mono text-[10px] tracking-[0.3em] text-cyan-800 uppercase">
                  Awaiting query
                </p>
              </motion.div>
            </div>
          ) : (
            <div className="mx-auto flex max-w-4xl flex-col gap-6">
              {messages.map((message) => (
                <AstraMessage
                  key={message.id}
                  role={message.role}
                  content={message.content}
                />
              ))}

              {/* Thinking indicator */}
              {isLoading && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="flex w-full justify-start"
                >
                  <div className="border-l border-cyan-500/30 pl-5">
                    <div className="mb-2 font-mono text-[9px] tracking-[0.25em] text-cyan-500 uppercase">
                      ASTRA · NEURAL PROCESSING
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 [animation-delay:300ms]" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>

        {/* Creator Authentication Panel */}
        {showCreatorAuth && (
          <div className="border-t border-cyan-500/10 bg-[#02070b]/80 px-6 py-5">
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mx-auto max-w-4xl rounded-xl border border-cyan-500/20 bg-[#071019]/90 p-5"
            >
              <div className="mb-4">
                <p className="font-mono text-[9px] tracking-[0.3em] text-cyan-600 uppercase">
                  Restricted Access
                </p>

                <h3 className="mt-2 font-mono text-sm tracking-[0.2em] text-cyan-200 uppercase">
                  Creator Authentication
                </h3>

                <p className="mt-2 font-mono text-xs leading-6 text-cyan-700">
                  Enter the Genesis creator credential to activate Creator Mode.
                </p>
              </div>

              <form onSubmit={handleCreatorAuthentication}>
                <div className="relative">
                  <input
                    type="password"
                    value={creatorKey}
                    onChange={(event) => setCreatorKey(event.target.value)}
                    disabled={creatorLoading}
                    autoFocus
                    placeholder="Enter creator credential..."
                    className="w-full rounded-lg border border-cyan-500/20 bg-[#02070b] px-4 py-3 pr-32 font-mono text-xs text-cyan-100 outline-none placeholder:text-cyan-900 focus:border-cyan-400/50 disabled:opacity-50"
                  />

                  <button
                    type="submit"
                    disabled={creatorLoading || !creatorKey.trim()}
                    className="absolute top-1/2 right-2 -translate-y-1/2 rounded-md border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-cyan-400 uppercase transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    {creatorLoading ? "VERIFYING..." : "AUTHENTICATE"}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setShowCreatorAuth(false);
                    setCreatorKey("");
                  }}
                  disabled={creatorLoading}
                  className="mt-3 font-mono text-[9px] tracking-[0.2em] text-cyan-800 uppercase transition hover:text-cyan-500 disabled:opacity-30"
                >
                  Cancel
                </button>
              </form>
            </motion.div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-cyan-500/10 px-6 pt-3 pb-7">
          <form onSubmit={handleSubmit} className="mx-auto max-w-4xl">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                disabled={isLoading || creatorLoading}
                placeholder={
                  isLoading
                    ? "ASTRA is processing..."
                    : showCreatorAuth
                      ? "Creator authentication required..."
                      : "Ask ASTRA anything..."
                }
                className="w-full rounded-xl border border-cyan-500/20 bg-[#071019]/80 px-5 py-4 pr-28 font-mono text-sm text-cyan-100 transition outline-none placeholder:text-cyan-800 focus:border-cyan-400/50 focus:shadow-[0_0_30px_rgba(34,211,238,0.08)] disabled:cursor-not-allowed disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={isLoading || creatorLoading || !query.trim()}
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-cyan-400 uppercase transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-30"
              >
                {isLoading ? "..." : "Send"}
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between px-1">
              <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-800 uppercase">
                {isCreator
                  ? "ASTRA · CREATOR CHANNEL"
                  : "ASTRA Neural Interface"}
              </span>

              <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-800 uppercase">
                Enter · Submit
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
