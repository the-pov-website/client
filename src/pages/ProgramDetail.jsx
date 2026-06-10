import { useParams } from "react-router-dom";
import { programs } from "../data/content";

export default function ProgramDetail() {
  const { slug } = useParams();

  const program = programs[slug];

  if (!program) {
    return <div className="p-10">Program not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
            {/* Hero Image */}
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-[250px] md:h-[450px] object-cover rounded-3xl mb-10"
      />
      <h1 className="text-5xl font-bold mb-2">
        {program.title}
      </h1>

      <p className="text-xl text-amber-600 mb-2">
        {program.subtitle}
      </p>

      <p className="text-gray-500 mb-10">
        {program.tagline}
      </p>

      <p className="mb-10 whitespace-pre-line">
        {program.intro}
      </p>

      <h2 className="text-2xl font-bold mb-4">
        Purpose
      </h2>

      <p className="mb-10 whitespace-pre-line">
        {program.purpose}
      </p>

      <h2 className="text-2xl font-bold mb-4">
        What Participants Gain
      </h2>

      <ul className="list-disc ml-6 mb-10">
        {program.gains.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-4">
        Program Experience
      </h2>

      <ul className="list-disc ml-6 mb-10">
        {program.experience.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-4">
        Who Should Attend?
      </h2>

      <ul className="list-disc ml-6 mb-10">
        {program.audience.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-4">
        Event Format
      </h2>

      <p><strong>When:</strong> {program.format.when}</p>
      <p><strong>Format:</strong> {program.format.type}</p>
      <p><strong>Audience:</strong> {program.format.audience}</p>

      {program.beyond && (
        <>
          <h2 className="text-2xl font-bold mt-10 mb-4">
            Beyond the Event
          </h2>

          <p>{program.beyond}</p>
        </>
      )}

      <div className="bg-amber-50 rounded-2xl p-8 mt-12">
        <h3 className="text-xl font-bold mb-3">
          Interested in Learning More?
        </h3>

        <p>
          Contact us at{" "}
          <a
            href={`mailto:${program.contact}`}
            className="text-amber-600 font-medium"
          >
            {program.contact}
          </a>
        </p>
      </div>

    </div>
  );
}