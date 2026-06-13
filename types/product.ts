export type Category = "men" | "women" | "accessories";

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
    slug: "men",
    label: "Men",
    description: "Everyday essentials and statement pieces for him.",
  },
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
