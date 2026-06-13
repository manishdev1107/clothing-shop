import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/products";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white transition hover:border-stone-300 hover:shadow-sm"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-medium text-stone-900">{product.name}</h3>
        <p className="mt-1 text-sm text-stone-500">
          {product.colors.length} color{product.colors.length !== 1 ? "s" : ""} ·{" "}
          {product.sizes.join(", ")}
        </p>
        <p className="mt-auto pt-3 font-semibold text-stone-900">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
