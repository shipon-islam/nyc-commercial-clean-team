import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gray-900">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-red px-6 py-3 font-medium text-white transition hover:bg-red/50"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}