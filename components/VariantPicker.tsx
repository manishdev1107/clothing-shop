"use client";

import { useState } from "react";
import type { Product, Size } from "@/types/product";

type VariantPickerProps = {
  product: Product;
};

export default function VariantPicker({ product }: VariantPickerProps) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name ?? null);

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-3 text-sm font-semibold text-stone-900">Size</p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`min-w-10 rounded-md border px-3 py-2 text-sm font-medium transition ${
                selectedSize === size
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 text-stone-700 hover:border-stone-400"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-stone-900">Color</p>
        <div className="flex flex-wrap gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() => setSelectedColor(color.name)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                selectedColor === color.name
                  ? "border-stone-900"
                  : "border-stone-200 hover:border-stone-400"
              }`}
            >
              <span
                className="h-4 w-4 rounded-full border border-stone-300"
                style={{ backgroundColor: color.hex }}
                aria-hidden
              />
              {color.name}
            </button>
          ))}
        </div>
      </div>

      <p className="rounded-lg bg-stone-100 px-4 py-3 text-sm text-stone-600">
        Cart and checkout coming in Phase 2. Select a size and color to preview options.
        {selectedSize && selectedColor
          ? ` Selected: ${selectedSize}, ${selectedColor}.`
          : " Choose a size to continue."}
      </p>
    </div>
  );
}
