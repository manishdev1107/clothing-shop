import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByCategory } from "@/lib/products";
import { CATEGORIES, type Category } from "@/types/product";

type PageProps = {
  params: Promise<{ category: string }>;
};

function getCategoryMeta(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const meta = getCategoryMeta(category);
  if (!meta) return { title: "Shop" };

  return {
    title: meta.label,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const meta = getCategoryMeta(category);

  if (!meta) notFound();

  const products = getProductsByCategory(category as Category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900">{meta.label}</h1>
        <p className="mt-2 text-stone-600">{meta.description}</p>
        <p className="mt-1 text-sm text-stone-500">
          {products.length} product{products.length !== 1 ? "s" : ""}
        </p>
      </div>
      <ProductGrid products={products} />
    </div>
  );
}
