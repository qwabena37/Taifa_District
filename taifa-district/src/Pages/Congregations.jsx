import { CongregationCard } from "../components/CongregationCard";

const sampleCongregations = [
  { id: 1, name: "Grace Congregation", location: "North Taifa", leader: "Rev. John Doe" },
  { id: 2, name: "Hope Congregation", location: "East Taifa", leader: "Rev. Jane Smith" },
  { id: 3, name: "Faith Congregation", location: "West Taifa", leader: "Rev. Mark Brown" },
  { id: 4, name: "Peace Congregation", location: "South Taifa", leader: "Rev. Lucy Green" },
];

export default function Congregations() {
  return (
    <section className="py-14 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Congregations in Taifa District
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sampleCongregations.map((congregation) => (
            <CongregationCard
              key={congregation.id}
              congregation={congregation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
