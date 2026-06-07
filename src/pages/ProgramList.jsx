import { Link } from "react-router-dom";
import { Mic, Coffee, ArrowRight } from "lucide-react";

const programs = [
  {
    slug: "identity-conference",
    title: "Identity Conference",
    description:
      "A transformative event designed to help young people gain clarity, purpose, and direction.",
    icon: Mic,
  },
  {
    slug: "tea-party",
    title: "POV Tea Party",
    description:
      "An intimate gathering designed for reflection, connection, and personal growth.",
    icon: Coffee,
  },
];

export default function ProgramList() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-2">Programs</h1>
      <p className="text-gray-500 mb-10">
        Experiences designed to build identity, ownership, and voice.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((p) => {
          const Icon = p.icon;

          return (
            <Link
              key={p.slug}
              to={`/programs/${p.slug}`}
              className="group border rounded-2xl p-8 hover:border-amber-500 hover:shadow-md transition bg-white"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="text-amber-600 w-6 h-6" />

                <ArrowRight className="text-gray-300 group-hover:text-amber-600 transition w-5 h-5" />
              </div>

              <h2 className="text-2xl font-semibold mb-2">
                {p.title}
              </h2>

              <p className="text-gray-600">
                {p.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}