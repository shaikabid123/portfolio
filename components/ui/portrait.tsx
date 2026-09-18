"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site-config";

/**
 * The only part of the Hero that needs the browser (an onError fallback),
 * so it's isolated here rather than forcing the whole Hero section to ship
 * as client JS. Uses next/image (fill + sizes) instead of a bare <img> so
 * the photo gets Next's automatic format/size optimization and no longer
 * risks a layout shift while it loads.
 */
export function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full shadow-2xl ring-2 ring-accent/40 transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20">
      {failed ? (
        // Drop profile.jpg into /public and this placeholder disappears.
        <div className="flex h-full w-full items-center justify-center bg-surface">
          <span className="font-display text-sm font-bold text-muted">SA</span>
        </div>
      ) : (
        <Image
          src="/profile.jpg"
          alt={site.name.full}
          fill
          sizes="80px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
