// -------- src/components/Footer.jsx --------
export function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">

        {/* About */}
        <div>
          <h4 className="text-lg font-semibold mb-3">
            PCG – Taifa District
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            A district of the Presbyterian Church of Ghana, united in faith,
            service and mission to the Glory of God.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-lg font-semibold mb-3">
            Contact Us
          </h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>📞 +233 24 000 0000</li>
            <li>📞 +233 20 000 0000</li>
            <li>✉️ pcgtaifadistrict@gmail.com</li>
            <li>📍 Taifa – Accra, Ghana</li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <h4 className="text-lg font-semibold mb-3">
            Locate Us
          </h4>
          <div className="w-full h-48 rounded-lg overflow-hidden border border-blue-800">
            <iframe
              title="Taifa Ramseyer Location"
              src="https://www.google.com/maps?q=Presbyterian%20Church%20of%20Ghana%20Ramseyer%20Taifa&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-blue-800 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} PCG Taifa District · All Rights Reserved
      </div>
    </footer>
  )
}
