import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-stone-900">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-stone-600">
            Curated women&apos;s clothing and accessories for everyday style.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-stone-900">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            <li>
              <Link href="/shop/women" className="hover:text-stone-900">
                Women
              </Link>
            </li>
            <li>
              <Link href="/shop/accessories" className="hover:text-stone-900">
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-stone-900">Info</p>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            <li>
              <Link href="/about" className="hover:text-stone-900">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-stone-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-200 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
