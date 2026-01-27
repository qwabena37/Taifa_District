// ===== src/components/CongregationCard.jsx =====
import { motion } from 'framer-motion'

export function CongregationCard({ congregation }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-md p-5 border"
    >
      <h3 className="text-lg font-semibold text-blue-900">
        {congregation.name}
      </h3>
      <p className="text-gray-600 text-sm mt-2">
        Serving the Taifa community with faith, love and unity.
      </p>
    </motion.div>
  )
}