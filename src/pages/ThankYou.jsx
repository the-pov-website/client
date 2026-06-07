import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="max-w-3xl mx-auto text-center py-24">
      <h1 className="text-5xl font-bold mb-6">
        Thank You ❤️
      </h1>

      <p className="text-gray-600 mb-8">
        Your support helps transform lives.
      </p>

      <Link
        to="/"
        className="bg-amber-600 text-white px-6 py-3 rounded-lg"
      >
        Back Home
      </Link>
    </div>
  );
}