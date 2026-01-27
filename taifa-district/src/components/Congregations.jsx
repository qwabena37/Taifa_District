// -------- src/components/Congregations.jsx --------
import { useDistrictStore } from '../store/districtStore'
import { CongregationCard } from './CongregationCard'

export function Congregations() {
  const congregations = useDistrictStore((state) => state.congregations)

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-10">
          Our Congregations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {congregations.map((c) => (
            <CongregationCard key={c.id} congregation={c} />
          ))}
        </div>
      </div>
    </section>
  )
}