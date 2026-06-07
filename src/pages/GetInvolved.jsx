import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Handshake,
  Megaphone
} from "lucide-react";

export default function GetInvolved() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-amber-600 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="font-serif text-5xl font-bold mb-6">
            Get Involved
          </h1>

          <p className="text-xl text-amber-100">
            Join us in helping young people discover their purpose,
            take ownership of their growth, and find their voice.
          </p>
        </div>
      </section>

      {/* HOW CAN I GET INVOLVED */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl font-bold mb-6 text-center">
          How Can I Get Involved?
        </h2>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          There are several ways to support POV and help create spaces
          where young people can grow in purpose, ownership, and voice.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Attend */}
          <div className="border rounded-2xl p-8 hover:shadow-md transition">
            <Calendar className="w-8 h-8 text-amber-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Attend a Program or Event
            </h3>
            <p className="text-gray-600">
              Participate in experiences like Identity Conference and the POV Tea Party.
            </p>
          </div>

          {/* Volunteer */}
          <div className="border rounded-2xl p-8 hover:shadow-md transition">
            <Users className="w-8 h-8 text-amber-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Volunteer With Our Team
            </h3>
            <p className="text-gray-600">
              Help us create meaningful experiences through your time and skills.
            </p>
          </div>

          {/* Partner */}
          <div className="border rounded-2xl p-8 hover:shadow-md transition">
            <Handshake className="w-8 h-8 text-amber-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Partner With Us
            </h3>
            <p className="text-gray-600">
              Collaborate as a school, organization, or community partner.
            </p>
          </div>

          {/* Sponsor */}
          <div className="border rounded-2xl p-8 hover:shadow-md transition">
            <Megaphone className="w-8 h-8 text-amber-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Sponsor an Initiative
            </h3>
            <p className="text-gray-600">
              Support programs and events that help young people thrive.
            </p>
          </div>

        </div>
      </section>

      {/* DONATE */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Support Our Mission
          </h2>

          <p className="text-gray-600 mb-8">
            Every contribution helps create spaces where young people grow in purpose.
          </p>

          <Link
            to="/donate"
            className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700"
          >
            Make a Donation
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Have Questions?
          </h2>

          <p className="text-gray-600 mb-8">
            We'd love to hear from you.
          </p>

          <a
            href="mailto:hello@thepov.ca"
            className="inline-block border border-amber-600 text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-50"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}