import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center sm:px-6">
      <h1 className="text-2xl font-semibold text-stone-900">Page not found</h1>
      <p className="mt-2 text-stone-600">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-stone-800"
      >
        Back to home
      </Link>
    </div>
  );
}
