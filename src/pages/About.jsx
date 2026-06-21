import {Link, useNavigate } from "react-router-dom";
import { team } from "../data/content";
import whowr from "../images/who-we-are.jpg"
import bg from "../images/back-ground.png"
import sdg1 from "../images/sdg-1.webp";
import sdg4 from "../images/sdg-4.webp";
import sdg5 from "../images/sdg-5.webp";

export default function About({nav}) {
    const navigate=useNavigate()

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={bg}
          alt="HopeRise volunteers"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
         <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
  About POV
</h1>

<p className="text-xl text-gray-200">
  Building the Foundation for Purpose, Ownership, and Voice
</p>
        </div>
      </section>

      {/*story */}
<section className="max-w-5xl mx-auto px-6 py-20">
  <h2 className="font-serif text-4xl font-bold mb-10">
    Who We Are
  </h2>

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* TEXT */}
    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
      <p>
        POV is a federally incorporated organization in Canada. We are the first-ever identity infrastructure movement in Canada focused on youth.
      </p>

      <p>
       While many systems focus on doing, we focus on being. At POV, the WHO precedes the what. We leverage identity integration as a nation building strategy and youth development focus.
      </p>

      <p>
        We believe that before direction, there must be identity.
        Before achievement, there must be clarity. And before impact,
        there must be self-awareness.
      </p>
    </div>

    {/* IMAGE */}
    <div className="w-full">
      <img
        src={whowr}
        alt="POV story"
        className="w-full h-[400px] object-cover rounded-3xl shadow-md"
      />
    </div>

  </div>
</section>

{/* WHY POV EXISTS*/}
<section className="bg-gray-50 py-20">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="font-serif text-4xl font-bold mb-8">
      Why POV Exists
    </h2>

    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
      <p>
        Young people today face more information, expectations,
        and pressure than ever before.
      </p>

      <p>
        They are often told what to study, what career to pursue,
        and who they should become, yet few are given the opportunity
        to explore who they are.
      </p>

      <p>
        The consequences are visible in rising levels of uncertainty,
        disengagement, and hopelessness among youth.
      </p>

      <p>
        POV was created to address this gap.
      </p>

      <p>
        Our work helps young people develop the self-awareness,
        confidence, and personal agency needed to navigate life
        with purpose and intention.
      </p>

    </div>

  </div>
</section>


{/* WHAT WE DO */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="font-serif text-4xl font-bold text-center mb-12">
    What We Do
  </h2>

  <div className="grid md:grid-cols-5 gap-6">

    {[
      "Discover their purpose",
      "Take ownership of their growth",
      "Develop confidence in their voice",
      "Build meaningful connections",
      "Strengthen leadership capacity",
    ].map(item => (
      <div
        key={item}
        className="border rounded-2xl p-6 text-center"
      >
        {item}
      </div>
    ))}

  </div>

</section>


{/* SDG FOCUS */}
<section className="bg-amber-50 py-20">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="font-serif text-4xl font-bold text-center mb-12">
      Our Focus Areas
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-2xl">
        <img
          src={sdg1}
          alt="SDG 1 No Poverty"
          className="w-20 mb-4"
        />

        <h3 className="font-bold text-xl mb-4">
          Eradication of Mental Poverty
        </h3>

        <p>
          Addressing the lack of identity,
          purpose, and personal agency.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl">
        <img
          src={sdg4}
          alt="SDG 4 Quality Education"
          className="w-20 mb-4"
        />

        <h3 className="font-bold text-xl mb-4">
          Purpose Education
        </h3>

        <p>
          Helping young people develop clarity,
          direction, and self-awareness.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl">
        <img
          src={sdg5}
          alt="SDG 5 Gender Equality"
          className="w-20 mb-4"
        />

        <h3 className="font-bold text-xl mb-4">
          Gender Equality
        </h3>

        <p>
          Creating spaces where women and girls can grow,
          lead, and thrive.
        </p>
      </div>

    </div>

  </div>

</section>


      {/* CTA */}
    <section className="bg-black text-white py-24">

  <div className="max-w-3xl mx-auto text-center px-6">

    <h2 className="font-serif text-5xl font-bold mb-6">
      Join the Movement
    </h2>

    <p className="text-lg text-gray-300 mb-8">
      Every young person deserves the opportunity
      to understand who they are before deciding
      who they want to become.
    </p>

    <p className="text-lg text-gray-300 mb-10">
      Whether you are a participant, volunteer,
      educator, partner, or supporter, we invite
      you to join us in building a generation
      grounded in purpose, ownership, and voice.
    </p>

    <Link
      to="/get-involved"
      className="inline-block bg-amber-600 px-8 py-4 rounded-xl font-semibold"
    >
      Volunteer With Us
    </Link>

  </div>

</section>
    </div>
  );
}

