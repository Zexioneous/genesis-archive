"use client";

import Image from "next/image";
import {
  useCallback,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent,
} from "react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

export default function ElysiaMapViewer() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);

  const dragRef = useRef({
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });

  /* ================================================== */
  /* RESET */
  /* ================================================== */

  const resetView = useCallback(() => {
    setZoom(1);
    setPosition({
      x: 0,
      y: 0,
    });
  }, []);

  /* ================================================== */
  /* ZOOM */
  /* ================================================== */

  const changeZoom = useCallback((amount: number) => {
    setZoom((current) => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current + amount));

      if (next === MIN_ZOOM) {
        setPosition({
          x: 0,
          y: 0,
        });
      }

      return next;
    });
  }, []);

  /* ================================================== */
  /* WHEEL ZOOM */
  /* ================================================== */

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    const direction = event.deltaY > 0 ? -0.15 : 0.15;

    changeZoom(direction);
  };

  /* ================================================== */
  /* POINTER DOWN */
  /* ================================================== */

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (zoom <= MIN_ZOOM) return;

    event.currentTarget.setPointerCapture(event.pointerId);

    setDragging(true);

    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
    };
  };

  /* ================================================== */
  /* POINTER MOVE */
  /* ================================================== */

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return;

    const deltaX = event.clientX - dragRef.current.startX;

    const deltaY = event.clientY - dragRef.current.startY;

    const nextX = dragRef.current.originX + deltaX;

    const nextY = dragRef.current.originY + deltaY;

    setPosition({
      x: nextX,
      y: nextY,
    });
  };

  /* ================================================== */
  /* POINTER UP */
  /* ================================================== */

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    setDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className="flex h-full w-full flex-col">
      {/* ================================================== */}
      {/* MAP HEADER */}
      {/* ================================================== */}

      <div className="flex items-center justify-between border-b border-cyan-300/10 px-4 py-3">
        <div>
          <p className="font-mono text-[8px] tracking-[0.3em] text-cyan-600 uppercase">
            Planetary Surface Map
          </p>

          <p className="mt-1 font-mono text-[7px] tracking-[0.2em] text-cyan-800 uppercase">
            Equirectangular Projection // ELYSIA-3
          </p>
        </div>

        {/* Zoom controls */}

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => changeZoom(-0.25)}
            disabled={zoom <= MIN_ZOOM}
            className="h-7 w-7 border border-cyan-300/15 font-mono text-sm text-cyan-400 transition hover:border-cyan-300/40 hover:bg-cyan-300/5 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Zoom out"
          >
            −
          </button>

          <button
            type="button"
            onClick={resetView}
            className="h-7 border border-cyan-300/15 px-2 font-mono text-[7px] tracking-[0.15em] text-cyan-500 uppercase transition hover:border-cyan-300/40 hover:bg-cyan-300/5"
          >
            Reset
          </button>

          <button
            type="button"
            onClick={() => changeZoom(0.25)}
            disabled={zoom >= MAX_ZOOM}
            className="h-7 w-7 border border-cyan-300/15 font-mono text-sm text-cyan-400 transition hover:border-cyan-300/40 hover:bg-cyan-300/5 disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Zoom in"
          >
            +
          </button>
        </div>
      </div>

      {/* ================================================== */}
      {/* MAP VIEWPORT */}
      {/* ================================================== */}

      <div
        ref={viewportRef}
        className={`relative min-h-0 flex-1 overflow-hidden bg-[#02070a] ${
          zoom > 1
            ? dragging
              ? "cursor-grabbing"
              : "cursor-grab"
            : "cursor-default"
        }`}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          className="absolute top-1/2 left-1/2 w-full max-w-none"
          style={{
            aspectRatio: "1774 / 887",
            transform: `translate3d(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px), 0) scale(${zoom})`,
            transformOrigin: "center center",
          }}
        >
          <Image
            src="/textures/planets/elysia/map.png"
            alt="Elysia-3 planetary surface map"
            fill
            priority
            sizes="100vw"
            className="object-contain select-none"
            draggable={false}
          />
        </div>

        {/* grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-size-[32px_32px]" />

        {/* vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.5)_100%)]" />

        {/* labels */}
        <div className="pointer-events-none absolute top-3 left-3 font-mono text-[7px] tracking-[0.2em] text-cyan-500/70 uppercase">
          SURFACE ARRAY
        </div>

        <div className="pointer-events-none absolute right-3 bottom-3 font-mono text-[7px] tracking-[0.2em] text-cyan-500/70 uppercase">
          MAP DATA // ACTIVE
        </div>

        {/* center target */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute top-0 left-1/2 h-2 w-px -translate-x-1/2 bg-cyan-300/40" />
          <div className="absolute bottom-0 left-1/2 h-2 w-px -translate-x-1/2 bg-cyan-300/40" />
          <div className="absolute top-1/2 left-0 h-px w-2 -translate-y-1/2 bg-cyan-300/40" />
          <div className="absolute top-1/2 right-0 h-px w-2 -translate-y-1/2 bg-cyan-300/40" />
        </div>
      </div>

      {/* ================================================== */}
      {/* MAP STATUS */}
      {/* ================================================== */}

      <div className="flex items-center justify-between border-t border-cyan-300/10 px-4 py-2">
        <p className="font-mono text-[7px] tracking-[0.18em] text-cyan-700 uppercase">
          Drag to pan // Scroll to zoom
        </p>

        <p className="font-mono text-[7px] tracking-[0.18em] text-cyan-600 uppercase">
          Zoom {Math.round(zoom * 100)}%
        </p>
      </div>
    </div>
  );
}
