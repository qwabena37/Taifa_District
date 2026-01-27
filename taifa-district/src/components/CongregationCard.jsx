export function CongregationCard({ congregation }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{congregation.name}</h3>
      <p className="text-gray-600 mb-1">Location: {congregation.location}</p>
      <p className="text-gray-600">Leader: {congregation.leader}</p>
    </div>
  );
}
