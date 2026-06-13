import productsData from "@/data/products.json";
import type { Category, Product, Size } from "@/types/product";

const products = productsData as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function filterProducts(
  items: Product[],
  size: Size | null,
  colorName: string | null,
): Product[] {
  return items.filter((product) => {
    if (size && !product.sizes.includes(size)) return false;
    if (colorName && !product.colors.some((c) => c.name === colorName)) {
      return false;
    }
    return true;
  });
}

export function formatPrice(priceInPaise: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(priceInPaise / 100);
}
