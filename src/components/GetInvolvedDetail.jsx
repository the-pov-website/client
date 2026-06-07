import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function GetInvolvedDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("volunteer_opportunities")
        .select("*")
        .eq("id", id)
        .single();

      setProgram(data);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <div className="p-10 text-gray-400">Loading...</div>;
  if (!program) return <div className="p-10 text-gray-400">Not found</div>;

  const isOpen = program.status === "open";

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 hover:text-black mb-6"
      >
        ← Back to listings
      </button>

      {/* HEADER */}
      <div className="border rounded-2xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">{program.title}</h1>
        <p className="text-gray-600">{program.goal}</p>

        <div className="flex flex-wrap gap-3 mt-4 text-sm">
          <span className="px-3 py-1 border rounded-full">
            {program.commitment || "Not specified"}
          </span>

          <span className="px-3 py-1 border rounded-full">
            {program.location || "Not specified"}
          </span>

          <span
            className={`px-3 py-1 rounded-full border ${
              isOpen
                ? "text-amber-600 border-amber-200"
                : "text-red-500 border-red-200"
            }`}
          >
            {program.status}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="md:col-span-2 space-y-8">

          <div className="border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              {(program.activities || []).map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>

          <div className="border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Impact</h2>
            <p className="text-gray-700">{program.outcomes}</p>
          </div>

          <div className="border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Who we’re looking for</h2>
            <p className="text-gray-700">{program.volunteer}</p>
          </div>

        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">

          <div className="border rounded-2xl p-6 sticky top-6">
            <h3 className="font-bold mb-2">Apply</h3>

            {!isOpen ? (
              <p className="text-sm text-gray-400">
                Applications are closed for this program.
              </p>
            ) : program.application_link ? (
              <a
                href={program.application_link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-amber-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-amber-700"
              >
                Apply Now
              </a>
            ) : (
              <p className="text-sm text-gray-400">
                No application link available.
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}