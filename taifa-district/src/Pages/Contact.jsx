export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">Contact Us</h1>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message here"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
