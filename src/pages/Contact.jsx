import { useState } from "react";
import { supabase } from "../lib/supabase";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;

    const { error } = await supabase.from("messages").insert([
      formData,
    ]);

    if (!error) {
      setSent(true);
    } else {
      console.error(error);
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="bg-amber-600 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="font-serif text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-amber-100">
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4 items-start">
                <Mail className="text-amber-600" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">hello@thepov.ca</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="text-amber-600" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">(XXX) XXX-XXXX</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-amber-600" />
                <div>
                  <p className="text-sm text-gray-400">Office</p>
                  <p className="font-medium">Toronto, Ontario, Canada</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="text-amber-600" />
                <div>
                  <p className="text-sm text-gray-400">Hours</p>
                  <p className="font-medium">Mon–Fri</p>
                  <p className="font-medium">9:00 AM – 5:00 PM</p>
                </div>
              </div>

            </div>

            {/* MAP */}
            <div className="mt-10">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Toronto,Ontario,Canada&output=embed"
                className="w-full h-[300px] rounded-2xl border mt-4"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8">
              Send Message
            </h2>

            {sent ? (
              <div className="p-6 bg-amber-50 rounded-xl text-amber-700">
                Message sent.
              </div>
            ) : (
              <div className="space-y-4">

                <input
                  placeholder="Name"
                  className="w-full border p-3 rounded-xl"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  placeholder="Email"
                  className="w-full border p-3 rounded-xl"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full border p-3 rounded-xl"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-amber-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </div>
            )}

            {/* SOCIALS */}
<div className="mt-8">
  <h3 className="text-sm text-gray-500 mb-3">Follow Us</h3>

  <div className="flex gap-5 items-center">
    <a
      href="https://linkedin.com"
      target="_blank"
      className="flex items-center gap-2 text-gray-600 hover:text-amber-600"
    >
      <FaLinkedin size={18} />
      <span>LinkedIn</span>
    </a>

    <a
      href="https://instagram.com"
      target="_blank"
      className="flex items-center gap-2 text-gray-600 hover:text-amber-600"
    >
      <FaInstagram size={18} />
      <span>Instagram</span>
    </a>

    <a
      href="https://tiktok.com"
      target="_blank"
      className="flex items-center gap-2 text-gray-600 hover:text-amber-600"
    >
      <FaTiktok size={18} />
      <span>TikTok</span>
    </a>
    <a
      href="https://youtube.com"
      target="_blank"
      className="flex items-center gap-2 text-gray-600 hover:text-amber-600"
    >
      <FaYoutube size={18} />
      <span>Youtube</span>
    </a>
  </div>
</div>
          </div>

        </div>
      </section>
    </div>
  );
}