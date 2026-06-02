import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function subscribe() {
    if (!email) return;
    setLoading(true);
    setError("");

    const { error } = await supabase
      .from("subscribers")
      .insert({ email });

    if (error) {
      if (error.code === "23505") {
        setError("You're already subscribed!");
      } else {
        setError("Something went wrong, try again.");
      }
      setLoading(false);
      return;
    }

    setSubscribed(true);
    setLoading(false);
  }

  return (
    <div className="bg-emerald-50 rounded-2xl p-10 text-center">
      <h3 className="font-serif text-2xl font-bold text-emerald-800 mb-2">Stay in the loop</h3>
      <p className="text-sm text-emerald-700 mb-6">
        Get updates from the field, stories of impact, and news about our programs.
      </p>
      {subscribed ? (
        <p className="text-emerald-700 font-medium">Thanks for subscribing!</p>
      ) : (
        <>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <div className="flex gap-2 max-w-sm mx-auto flex-wrap justify-center">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 min-w-0 px-4 py-2 border border-emerald-300 rounded-lg text-sm bg-white focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={subscribe}
              disabled={loading}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? "..." : "Subscribe"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}