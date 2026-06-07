import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is POV?",
    answer:
      "POV (Purpose. Ownership. Voice.) is a federally registered Canadian nonprofit organization focused on helping youth and young adults develop a stronger sense of identity, purpose, and personal agency. Through programs, events, and community engagement, we create spaces where young people can gain clarity, build confidence, and find their voice.",
  },
  {
    question: "What does POV stand for?",
    answer:
      "Purpose. Ownership. Voice. These three pillars guide everything we do.",
  },
  {
    question: "What is POV's mission?",
    answer:
      "Our goal is to empower young adults by equipping them with the knowledge, skills, and confidence to discover their purpose, take ownership of their growth, and find their voice.",
  },
  {
    question: "Who does POV serve?",
    answer:
      "POV serves youth and women who are seeking clarity, purpose, and personal growth. Our programs are designed for individuals navigating life transitions, exploring their identity, and looking to build confidence and community.",
  },
  {
    question: "Why does POV's work matter?",
    answer:
      "Many young people are encouraged to pursue goals and achievements without first understanding who they are. POV helps close that gap by creating opportunities for identity exploration, personal growth, and meaningful connection.",
  },
  {
    question: "What programs does POV offer?",
    answer:
      "POV currently offers two signature programs: Identity Conference and POV Tea Party.",
  },
  {
    question: "Is POV only for women?",
    answer:
      "No. POV programs are open to youth and young adults of all backgrounds. The POV Tea Party is a women-focused experience designed to create a supportive space for reflection, connection, and growth.",
  },
  {
    question: "Can schools and organizations partner with POV?",
    answer:
      "Yes. POV works with schools, educators, community organizations, and other partners interested in supporting youth development, leadership, and identity-based programming.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* HERO */}
      <section className="bg-amber-600 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="font-serif text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-xl text-amber-100">
            Everything you need to know about POV.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border rounded-2xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <span className="text-2xl text-amber-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold mb-10 text-center">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/programs/identity-conference"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-bold mb-3">
                Identity Conference
              </h3>
              <p className="text-gray-600">
                A flagship annual conference helping youth and young
                professionals gain clarity, purpose, and direction.
              </p>
            </Link>

            <Link
              to="/programs/pov-tea-party"
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-bold mb-3">
                POV Tea Party
              </h3>
              <p className="text-gray-600">
                An intimate women's gathering focused on reflection,
                community, and personal growth.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-amber-50 py-24">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>

          <p className="text-gray-600 mb-8">
            We would love to hear from you.
          </p>

          <a
            href="mailto:hello@thepov.ca"
            className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700"
          >
            hello@thepov.ca
          </a>
        </div>
      </section>
    </div>
  );
}