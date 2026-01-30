import { useEffect, useState } from "react";
import { useDistrictStore } from "../store/districtStore";

export function HeroCarousel() {
  const images = useDistrictStore((s) => s.carouselImages) || [];
  const [index, setIndex] = useState(0);
  const [verse, setVerse] = useState(null);

  // ==============================
  // Carousel auto-slide
  // ==============================
  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  // ==============================
  // Fetch Bible verse every half a min
  // ==============================
 useEffect(() => {
  const fetchVerse = () => {
    console.log("Fetching new verse...");
    fetch("https://bible-api.com/random")
      .then((res) => res.json())
      .then((data) => {
        console.log("Verse received:", data.text);
        setVerse({
          text: data.text,
          reference: data.reference,
        });
      })
      .catch(() => {
        setVerse({
          text: "The Lord is my shepherd; I shall not want.",
          reference: "Psalm 23:1",
        });
      });
  };

  fetchVerse(); // fetch immediately on mount

  const intervalId = setInterval(fetchVerse, 10000); // fetch every 30 seconds

  return () => clearInterval(intervalId); // cleanup on unmount
}, []);




  // ==============================
  // SAFETY CHECK
  // ==============================
  if (!images.length) {
    return (
      <section className="h-[50vh] flex items-center justify-center">
        <p className="text-gray-500">Loading images…</p>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-black">
      {images.map((img, i) => (
        <div
          key={img.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img.src}
            alt={img.caption}
            className="h-full w-full object-cover object-center"
          />

          {/* Dark overlay + caption */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
              {img.caption}
            </h2>
          </div>

          {/* ==============================
              Bible Verse Widget
          ============================== */}
    {verse && (
  <div className="absolute top-6 right-6 bg-transparent rounded-xl p-4 w-full max-w-[280px]">
    <div className="flex items-start flex-wrap gap-2">
      <span className="text-blue-900 text-2xl flex-shrink-0">📖</span>
      <div className="text-right sm:text-left break-words w-full">
        <p className="text-xs sm:text-sm md:text-base text-white leading-snug drop-shadow break-words">
          “{verse.text.trim()}”
        </p>
        <p className="text-[10px] sm:text-xs md:text-sm text-white font-semibold mt-1 drop-shadow break-words">
          — {verse.reference}
        </p>
      </div>
    </div>
  </div>
)}



        </div>
      ))}
    </section>
  );
}
