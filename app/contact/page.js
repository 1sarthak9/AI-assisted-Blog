import Image from 'next/image';

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-50 text-lg mb-8 text-center">
            We’d love to hear from you! Please fill out the form below to get in touch.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300" htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows="4"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              We are dedicated to providing the best service possible. Here’s why you should reach out to us!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Expert Team</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Our team consists of experienced professionals ready to assist you with your needs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                We offer round-the-clock support to ensure your queries are addressed promptly.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Customer Satisfaction</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Our priority is to ensure that our customers are completely satisfied with our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Follow Us</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Stay connected with us on social media!</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <Image src="/facebook-icon.svg" alt="Facebook" width={40} height={40} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <Image src="/twitter-icon.svg" alt="Twitter" width={40} height={40} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <Image src="/instagram-icon.svg" alt="Instagram" width={40} height={40} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};


