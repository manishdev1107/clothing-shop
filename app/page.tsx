import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import { SITE_NAME } from "@/lib/site";
import { CATEGORIES } from "@/types/product";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
            New season
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Style that moves with you
          </h1>
          <p className="mt-4 max-w-xl text-lg text-stone-600">
            Welcome to {SITE_NAME} — curated clothing and accessories for men and women.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop/women"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Shop women
            </Link>
            <Link
              href="/shop/men"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-400"
            >
              Shop men
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold text-stone-900">Shop by category</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className="rounded-xl border border-stone-200 bg-white p-6 transition hover:border-stone-300 hover:shadow-sm"
            >
              <h3 className="text-lg font-semibold text-stone-900">{cat.label}</h3>
              <p className="mt-2 text-sm text-stone-600">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold text-stone-900">Featured products</h2>
            <Link href="/shop/women" className="text-sm font-medium text-stone-600 hover:text-stone-900">
              View all
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
