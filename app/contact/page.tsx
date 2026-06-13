import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE_NAME} for questions about products and orders.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">Contact us</h1>
      <p className="mt-4 text-stone-600">
        Have a question about sizing, availability, or your order? We would love to hear from you.
      </p>

      <div className="mt-8 space-y-6 rounded-xl border border-stone-200 bg-white p-6">
        <div>
          <p className="text-sm font-semibold text-stone-900">Email</p>
          <a
            href="mailto:hello@labelswaya.com"
            className="mt-1 block text-stone-600 hover:text-stone-900"
          >
            hello@labelswaya.com
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900">Response time</p>
          <p className="mt-1 text-stone-600">We typically reply within 1–2 business days.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900">{SITE_NAME}</p>
          <p className="mt-1 text-stone-600">Online store · India</p>
        </div>
      </div>
    </div>
  );
}
