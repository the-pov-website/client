import { Link } from "react-router-dom";
import { Mic, Coffee, ArrowRight } from "lucide-react";
import identityImg from "../images/identity_conference.jpg";
import teaPartyImg from "../images/tea-party.jpg";
import bg from "../images/prgrms.jpg"

const programs = [
  {
    slug: "identity-conference",
    title: "Identity Conference",
    image:identityImg,
    description:
      "A transformative event designed to help young people gain clarity, purpose, and direction.",
    icon: Mic,
  },
  {
    slug: "tea-party",
    title: "POV Tea Party",
    image: teaPartyImg,
    description:
      "An intimate gathering designed for reflection, connection, and personal growth.",
    icon: Coffee,
  },
];
export default function ProgramList() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">

        {/* background image */}
        <img
          src={bg}
          alt="Programs hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* content */}
        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Programs
          </h1>

          <p className="text-lg text-gray-200">
            Experiences designed to build identity, ownership, and voice.
          </p>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p) => {
            const Icon = p.icon;

            return (
              <Link
                key={p.slug}
                to={`/programs/${p.slug}`}
                className="group border rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300"
              >

                {/* IMAGE */}
                <div className="h-72 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-10">

                  <div className="flex items-center justify-between mb-5">
                    <Icon className="text-amber-600 w-7 h-7" />
                    <ArrowRight className="text-gray-300 group-hover:text-amber-600 transition w-5 h-5" />
                  </div>

                  <h2 className="text-3xl font-semibold mb-3">
                    {p.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {p.description}
                  </p>

                </div>

              </Link>
            );
          })}
        </div>

      </section>

    </div>
  );
}