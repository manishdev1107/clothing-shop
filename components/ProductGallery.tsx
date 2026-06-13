"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/types/product";

type ProductGalleryProps = {
  product: Product;
};

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = product.images.length > 0 ? product.images : ["/images/products/placeholder.svg"];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
        <Image
          src={images[activeIndex]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-16 w-16 overflow-hidden rounded-md border ${
                index === activeIndex ? "border-stone-900" : "border-stone-200"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image src={image} alt="" fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
