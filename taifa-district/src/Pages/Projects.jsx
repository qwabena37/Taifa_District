export default function Projects() {
  // Example project data
  const projects = [
    {
      id: 1,
      title: "Community Health Outreach",
      description: "A project to educate and assist local communities on health matters.",
    },
    {
      id: 2,
      title: "Youth Skills Training",
      description: "Empowering youth with technical and vocational skills.",
    },
    {
      id: 3,
      title: "Clean Water Initiative",
      description: "Installing clean water systems in rural areas.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">Our Projects</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, description }) => (
          <div key={id} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
