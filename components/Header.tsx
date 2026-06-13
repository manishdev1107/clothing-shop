import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { CATEGORIES } from "@/types/product";

const navLinks = [
  { href: "/shop/men", label: "Men" },
  { href: "/shop/women", label: "Women" },
  { href: "/shop/accessories", label: "Accessories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-stone-900">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-stone-600 transition hover:text-stone-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700">
            Menu
          </summary>
          <nav
            className="absolute right-0 mt-2 w-48 rounded-lg border border-stone-200 bg-white py-2 shadow-lg"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>

      <div className="border-t border-stone-100 bg-stone-50 md:hidden">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2 sm:px-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className="shrink-0 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
