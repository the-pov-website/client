import { useState } from "react";
import { tiers } from "../data/content";

function handleDonate(link) {
  window.open(link, "_blank");
}

export default function Donate() {
  const [customAmount, setCustomAmount] = useState("");

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="font-serif text-3xl font-bold mb-1">Make a difference today</h2>
      <p className="text-sm text-gray-400 mb-8">Your donation goes directly to programs that change lives</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {tiers.map(t => (
          <div key={t.label} className={`rounded-xl p-6 text-center ${t.featured ? "border-2 border-emerald-500" : "border border-gray-100"}`}>
            {t.featured && (
              <span className="inline-block bg-emerald-50 text-emerald-800 text-xs px-3 py-1 rounded-full mb-3">
                Most popular
              </span>
            )}
            <div className="font-serif text-3xl font-bold text-emerald-600">{t.amount}</div>
            <div className="text-sm font-medium mt-1 mb-2">{t.label}</div>
            <div className="text-xs text-gray-400 mb-4">{t.desc}</div>
            <button
              onClick={() => handleDonate(t.link)}
              className={`w-full py-2 rounded-lg text-sm font-medium ${t.featured ? "bg-emerald-600 text-white hover:bg-emerald-700" : "border border-emerald-500 text-emerald-700 hover:bg-emerald-50"}`}
            >
              Donate {t.amount}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-400 mb-3">Or enter a custom amount</p>
        <div className="flex gap-2 justify-center flex-wrap">
          <input
            type="number"
            value={customAmount}
            onChange={e => setCustomAmount(e.target.value)}
            placeholder="$ Custom amount"
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm w-48 focus:outline-none focus:border-emerald-400"
          />
          <button
            onClick={() => handleDonate("https://buy.stripe.com/YOUR_CUSTOM_LINK")}
            className="bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700"
          >
            Donate
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-3">Secure payments via Stripe. All donations are tax deductible.</p>
      </div>
    </div>
  );
}