'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
  alt: string;
}

export default function Carousel({ images, alt }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + total) % total),
    [total]
  );

  if (total === 0) return null;

  return (
    <div className="card-inset p-3">
      {/* Main image */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black group">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${alt} — captura ${i + 1}`}
            fill
            priority={i === 0}
            className={`object-contain transition-opacity duration-500 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="(max-width: 1200px) 100vw, 900px"
          />
        ))}

        {total > 1 && (
          <>
            {/* Prev */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center hover:bg-[#c1121f] transition-colors backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Next */}
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center hover:bg-[#c1121f] transition-colors backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Counter */}
            <span className="absolute top-3 right-3 text-xs font-head text-white bg-black/60 border border-white/15 px-2.5 py-1 rounded-full backdrop-blur-sm">
              {index + 1} / {total}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir a la captura ${i + 1}`}
              className={`relative w-24 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                i === index ? 'border-[#c1121f]' : 'border-white/10 hover:border-white/30'
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="96px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
