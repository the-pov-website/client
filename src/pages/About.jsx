import {Link, useNavigate } from "react-router-dom";
import { team } from "../data/content";

export default function About({nav}) {
    const navigate=useNavigate()
  const stats = [
    { number: "50,000+", label: "Lives Impacted" },
    { number: "200+", label: "Communities Served" },
    { number: "500+", label: "Volunteers" },
    { number: "15", label: "Countries Reached" },
  ];

  const timeline = [
    {
      year: "2015",
      title: "HopeRise Founded",
      description:
        "A small group of volunteers came together with a mission to create sustainable change.",
    },
    {
      year: "2017",
      title: "Education Initiative",
      description:
        "Launched our first educational support programs for underserved communities.",
    },
    {
      year: "2020",
      title: "Healthcare Expansion",
      description:
        "Expanded operations to include healthcare outreach and medical assistance.",
    },
    {
      year: "2025",
      title: "Global Impact",
      description:
        "Reached thousands of beneficiaries across multiple countries.",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Mission",
      text: "Empowering underserved communities through education, healthcare, and opportunity.",
    },
    {
      icon: "🌍",
      title: "Vision",
      text: "A world where every individual has the resources to thrive.",
    },
    {
      icon: "❤️",
      title: "Values",
      text: "Compassion, integrity, sustainability, and community leadership.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
          alt="HopeRise volunteers"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            About HopeRise
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Building stronger communities through education, healthcare,
            and sustainable development.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://media.gettyimages.com/id/143177286/photo/businessman-leaping-off-a-boulder.jpg?s=612x612&w=0&k=20&c=w-acXo0IXEXGXi6FGunsP-Nn6hG5mz4btM1oVzCwv0A="
            alt="Community support"
            className="rounded-3xl shadow-lg"
          />

          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              HopeRise began in 2015 when a small group of volunteers
              recognized the barriers many communities faced in accessing
              education, healthcare, and economic opportunity.
            </p>

            <p className="text-gray-600 leading-relaxed">
              What started as a local initiative has grown into a movement
              impacting thousands of lives through community-led and
              sustainable programs.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl shadow-sm text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>

                <h3 className="font-bold text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl font-bold text-center mb-12">
          Our Impact
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl font-bold text-emerald-600">
                {stat.number}
              </div>

              <div className="text-gray-500 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-emerald-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            How We Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="text-5xl mb-4">👂</div>
              <h3 className="font-bold text-xl mb-3">Listen</h3>
              <p className="text-gray-500">
                We work closely with local communities to understand
                their needs and priorities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="text-5xl mb-4">🏗️</div>
              <h3 className="font-bold text-xl mb-3">Build</h3>
              <p className="text-gray-500">
                Together we create sustainable programs that address
                root causes rather than symptoms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="font-bold text-xl mb-3">Sustain</h3>
              <p className="text-gray-500">
                We empower communities to lead and maintain progress
                long after programs begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl font-bold text-center mb-12">
          Our Journey
        </h2>

        <div className="space-y-8">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="border-l-4 border-emerald-500 pl-6"
            >
              <div className="text-emerald-600 font-bold">
                {item.year}
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl mx-auto mb-4">
                  {member.initials}
                </div>

                <div className="font-semibold">
                  {member.name}
                </div>

                <div className="text-sm text-gray-500 mt-1">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-white rounded-3xl shadow-sm p-10">
          <div className="text-4xl mb-4">💬</div>

          <p className="text-xl italic text-gray-600 mb-6">
            "HopeRise transformed our village by providing educational
            resources that continue benefiting children today."
          </p>

          <div className="font-semibold">
            Community Leader
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 text-white py-24">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="font-serif text-5xl font-bold mb-6">
            Join Our Mission
          </h2>

          <p className="text-lg text-emerald-100 mb-8">
            Together we can create lasting change and build stronger
            communities for future generations.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
          
          <Link
            to="/donate"
            className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-medium border border-white"
          >
            Donate
          </Link>

            <button className="border border-white px-8 py-4 rounded-lg">
              Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

