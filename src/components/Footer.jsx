import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const[comingSoon, setComingSoon]=useState(null)
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            POV
          </h2>

          <p className="text-gray-400">
            Purpose. Ownership. Voice.
          </p>

          <p className="text-gray-500 mt-4 text-sm">
            Helping young people discover identity, direction, and clarity.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-gray-400">
            <Link to="/" className="hover:text-amber-500">Home</Link>
            <Link to="/about" className="hover:text-amber-500">About</Link>
            <Link to="/programs" className="hover:text-amber-500">Programs</Link>
            <Link to="/get-involved" className="hover:text-amber-500">Get Involved</Link>
            <Link to="/contact" className="hover:text-amber-500">Contact</Link>
            <Link to="/faq" className="hover:text-amber-500">FAQ</Link>
          </div>
        </div>

        {/* CONTACT + SOCIALS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>

          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <Mail size={16} />
            <span>hello@thepov.ca</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <MapPin size={16} />
            <span>Canada</span>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-4">
          <a onClick={() => setComingSoon("Instagram")} className="cursor-pointer hover:text-amber-500">
            <FaInstagram size={18} />
          </a>

          <a onClick={() => setComingSoon("LinkedIn")} className="cursor-pointer hover:text-amber-500">
            <FaLinkedin size={18} />
          </a>

          <a onClick={() => setComingSoon("TikTok")} className="cursor-pointer hover:text-amber-500">
            <FaTiktok size={18} />
          </a>

          <a onClick={() => setComingSoon("YouTube")} className="cursor-pointer hover:text-amber-500">
            <FaYoutube size={18} />
          </a>
          </div>
        </div>

      </div>
      {comingSoon && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    
    {/* blurred background */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

    {/* modal box */}
    <div className="relative bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm w-full">
      <h2 className="text-xl font-bold mb-2">
        {comingSoon} coming soon
      </h2>

      <p className="text-gray-600 text-sm mb-6">
        We’re currently building our presence here. Stay tuned.
      </p>

      <button
        onClick={() => setComingSoon(null)}
        className="bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700"
      >
        Close
      </button>
    </div>
  </div>
)}

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} POV. All rights reserved.
      </div>
    </footer>
  );
}