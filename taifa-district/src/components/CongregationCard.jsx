import { useState } from 'react'

export function CongregationCard({ congregation }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="w-full h-72 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT SIDE */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-r from-blue-600 to-red-600 rounded-lg shadow-md p-5 border hover:shadow-lg transition">
          <h3 className="text-xl text-green-700 bg-white rounded-lg font-semibold mb-2 text-center">
            {congregation.name}
          </h3>

          <p className="text-white">Minister: {congregation.Minister}</p>
          <p className="text-white">Catechist: {congregation.Catechist}</p>
          <p className="text-white mb-1">Location: {congregation.location}</p>

          <p className="text-sm text-white text-center mt-8 opacity-80">
            Click to view leadership
          </p>
        </div>

        {/* BACK SIDE */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-md p-5">
          <h4 className="text-center text-lg font-semibold mb-4">
            Leadership
          </h4>

          <div className="flex justify-around mb-4">
            <div className="text-center">
              <img
                src={congregation.ministerImage}
                alt="Minister"
                className="w-20 h-20 rounded-full object-cover mx-auto"
              />
              <p className="text-sm mt-1 font-medium">Minister</p>
            </div>

            <div className="text-center">
              <img
                src={congregation.catechistImage}
                alt="Catechist"
                className="w-20 h-20 rounded-full object-cover mx-auto"
              />
              <p className="text-sm mt-1 font-medium">Catechist</p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-700">
            📞 {congregation.officeLine}
          </p>

          <p className="text-xs text-center text-gray-400 mt-4">
            Click to flip back
          </p>
        </div>
      </div>
    </div>
  )
}
