import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import VariantPicker from "@/components/VariantPicker";
import { formatPrice, getAllProductSlugs, getProductBySlug } from "@/lib/products";
import { CATEGORIES } from "@/types/product";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const categoryLabel = CATEGORIES.find((c) => c.slug === product.category)?.label;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-stone-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-stone-900">
          Home
        </Link>
        {" / "}
        <Link href={`/shop/${product.category}`} className="hover:text-stone-900">
          {categoryLabel}
        </Link>
        {" / "}
        <span className="text-stone-900">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery product={product} />

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
            {categoryLabel}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-stone-900">{product.name}</h1>
          <p className="mt-4 text-2xl font-semibold text-stone-900">
            {formatPrice(product.price)}
          </p>
          <p className="mt-6 text-stone-600 leading-relaxed">{product.description}</p>
          <div className="mt-8 border-t border-stone-200 pt-8">
            <VariantPicker product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
