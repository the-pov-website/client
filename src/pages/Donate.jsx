import { useEffect, useState } from "react";
import { tiers } from "../data/content";

export default function Donate() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="font-serif text-3xl font-bold mb-1">
        Make a difference today
      </h2>

      <p className="text-sm text-gray-400 mb-8">
        Your donation goes directly to programs that change lives
      </p>

      <div className="mb-10">
        <iframe
          title="Donation form"
          src="https://www.zeffy.com/embed/donation-form/donate-to-change-lives-16327"
          className="w-full h-[600px] border-0"
        />
      </div>
    </div>
  );
}