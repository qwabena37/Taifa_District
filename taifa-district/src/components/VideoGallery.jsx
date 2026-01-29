import { useEffect, useState } from "react"
import { FaYoutube, FaTiktok } from "react-icons/fa"

const videos = [
  {
    platform: "youtube",
    title: "25th Anniversary Thanksgiving @ Grace Congregation",
    videoId: "Z5PooMZGDfk",
  },
  {
    platform: "youtube",
    title: "District Worship Service",
    videoId: "D_xnCwD8Y1M",
  },
  {
    platform: "tiktok",
    title: "Service @ Ramseyer Congregation",
    url: "https://vt.tiktok.com/ZSaxGrKjk/",
  },
]

export function VideoGallery() {
  const [tiktokThumbs, setTiktokThumbs] = useState({})

  useEffect(() => {
    videos.forEach((video, index) => {
      if (video.platform === "tiktok") {
        fetch(`https://www.tiktok.com/oembed?url=${video.url}`)
          .then(res => res.json())
          .then(data => {
            setTiktokThumbs(prev => ({
              ...prev,
              [index]: data.thumbnail_url,
            }))
          })
          .catch(err => {
            console.error("TikTok thumbnail fetch failed", err)
          })
      }
    })
  }, [])

  return (
    <section className="py-14 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Video Gallery
      </h3>

      <div className="max-w-6xl mx-auto grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3">
        {videos.map((video, index) => {
          const isYouTube = video.platform === "youtube"

          const thumbnail = isYouTube
            ? `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
            : tiktokThumbs[index]

          const url = isYouTube
            ? `https://www.youtube.com/watch?v=${video.videoId}`
            : video.url

          return (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden shadow-lg bg-black"
            >
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt={video.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              ) : (
                <div className="w-full h-56 flex items-center justify-center bg-gray-300 text-sm">
                  Loading...
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                {isYouTube ? (
                  <FaYoutube className="text-red-600 text-5xl mb-2" />
                ) : (
                  <FaTiktok className="text-white text-5xl mb-2" />
                )}
                <p className="text-white text-sm text-center px-3">
                  {video.title}
                </p>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
