import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME} — our story and approach to curated fashion.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-900">About {SITE_NAME}</h1>
      <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
        <p>
          {SITE_NAME} is an online clothing shop built around simple, wearable pieces for everyday
          life. We focus on quality basics, thoughtful details, and styles that work across
          seasons.
        </p>
        <p>
          Our catalog includes menswear, womenswear, and accessories — each item chosen to mix and
          match easily. Whether you are refreshing your wardrobe or looking for a single statement
          piece, we aim to make shopping straightforward and enjoyable.
        </p>
        <p>
          This site is the start of our journey online. Cart and checkout are coming soon — for now,
          browse the collection and find what fits your style.
        </p>
      </div>
    </div>
  );
}
