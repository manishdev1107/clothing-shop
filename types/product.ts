export type Category = "women" | "accessories";

export type Size = "XS" | "S" | "M" | "L" | "XL";

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  sizes: Size[];
  colors: ProductColor[];
  images: string[];
  featured?: boolean;
};

export const CATEGORIES: {
  slug: Category;
  label: string;
  description: string;
}[] = [
  {
    slug: "women",
    label: "Women",
    description: "Curated styles from casual to elevated.",
  },
  {
    slug: "accessories",
    label: "Accessories",
    description: "Bags, belts, and finishing touches.",
  },
];
