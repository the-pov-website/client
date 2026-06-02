export default function Programs() {
  const programs = [
    {
      title: "Education",
      goal: "Improve literacy and school access",
      activities: [
        "Scholarships",
        "School supplies",
        "Mentorship"
      ],
      outcomes: "Thousands of students supported",
      volunteer: "Tutor students"
    },
    {
      title: "Healthcare",
      goal: "Increase access to medical care",
      activities: [
        "Medical outreach",
        "Vaccinations",
        "Health education"
      ],
      outcomes: "Improved community health",
      volunteer: "Join outreach teams"
    },
    {
      title: "Community Development",
      goal: "Build sustainable communities",
      activities: [
        "Infrastructure",
        "Training",
        "Local leadership"
      ],
      outcomes: "Long-term resilience",
      volunteer: "Community mentor"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-serif text-5xl mb-10 font-bold">
        Our Programs
      </h1>

      <div className="grid gap-8">
        {programs.map(program => (
          <div
            key={program.title}
            className="border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4">
              {program.title}
            </h2>

            <p><strong>Goal:</strong> {program.goal}</p>

            <ul className="list-disc ml-6 my-4">
              {program.activities.map(a => (
                <li key={a}>{a}</li>
              ))}
            </ul>

            <p><strong>Outcomes:</strong> {program.outcomes}</p>

            <p className="mt-2">
              <strong>Volunteer Role:</strong>{" "}
              {program.volunteer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}