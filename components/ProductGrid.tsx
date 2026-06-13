"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { filterProducts } from "@/lib/products";
import type { Product, Size } from "@/types/product";

type ProductGridProps = {
  products: Product[];
};

const ALL_SIZES: Size[] = ["XS", "S", "M", "L", "XL"];

export default function ProductGrid({ products }: ProductGridProps) {
  const [size, setSize] = useState<Size | null>(null);
  const [color, setColor] = useState<string | null>(null);

  const colorOptions = useMemo(() => {
    const names = new Set<string>();
    products.forEach((p) => p.colors.forEach((c) => names.add(c.name)));
    return Array.from(names).sort();
  }, [products]);

  const filtered = filterProducts(products, size, color);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
            Size
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={size === null} onClick={() => setSize(null)} label="All" />
            {ALL_SIZES.map((s) =>
              products.some((p) => p.sizes.includes(s)) ? (
                <FilterChip
                  key={s}
                  active={size === s}
                  onClick={() => setSize(s)}
                  label={s}
                />
              ) : null,
            )}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
            Color
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={color === null} onClick={() => setColor(null)} label="All" />
            {colorOptions.map((name) => (
              <FilterChip
                key={name}
                active={color === name}
                onClick={() => setColor(name)}
                label={name}
              />
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-stone-500">
          No products match your filters. Try clearing size or color.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-sm transition ${
        active
          ? "border-stone-900 bg-stone-900 text-white"
          : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
      }`}
    >
      {label}
    </button>
  );
}
