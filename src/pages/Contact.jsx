import { useState } from "react";
import { siteConfig } from "../data/content";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;
    // Uncomment and add your Formspree ID to connect the form
    // await fetch("https://formspree.io/f/YOUR_ID", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: { "Content-Type": "application/json" },
    // });
    setSent(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="font-serif text-3xl font-bold mb-1">Get in touch</h2>
      <p className="text-sm text-gray-400 mb-8">We'd love to hear from you</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          {[["✉", "Email", siteConfig.email], ["📞", "Phone", siteConfig.phone], ["📍", "Address", siteConfig.address]].map(([icon, label, val]) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center text-base flex-shrink-0">{icon}</div>
              <div>
                <div className="text-xs text-gray-400">{label}</div>
                <div className="text-sm font-medium">{val}</div>
              </div>
            </div>
          ))}
        </div>
        {sent ? (
          <div className="flex items-center justify-center text-emerald-700 font-medium">
            Message sent! We'll get back to you soon.
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs text-gray-400 block mb-1">Your name</label>
              <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Natnael Kidane" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-400" />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Email</label>
              <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="you@email.com" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-400" />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Message</label>
              <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="How can we help?" rows={4} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-400 resize-none" />
            </div>
            <button onClick={handleSubmit} className="bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-emerald-700">
              Send message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}