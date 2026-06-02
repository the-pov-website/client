export default function Resources() {
  const resources = [
    {
      title: "Annual Report 2025",
      file: "#"
    },
    {
      title: "Volunteer Handbook",
      file: "#"
    },
    {
      title: "Community Impact Report",
      file: "#"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-serif text-5xl font-bold mb-10">
        Resources
      </h1>

      <div className="space-y-4">
        {resources.map(resource => (
          <a
            key={resource.title}
            href={resource.file}
            className="block border rounded-xl p-5 hover:border-emerald-500"
          >
            {resource.title}
          </a>
        ))}
      </div>
    </div>
  );
}