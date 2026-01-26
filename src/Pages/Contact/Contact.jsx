const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          Have questions or want to work with us? Fill out the form below or reach us through our contact details.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2">Address</h2>
            <p className="text-gray-600">123 Main Street, Dhaka, Bangladesh</p>
          </div>
          <div className="p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2">Phone</h2>
            <p className="text-gray-600">+880 1234 567 890</p>
          </div>
          <div className="p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p className="text-gray-600">info@example.com</p>
          </div>
          <div className="p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4 mt-2 text-gray-600">
              <span className="hover:text-blue-600 cursor-pointer">Facebook</span>
              <span className="hover:text-blue-400 cursor-pointer">Twitter</span>
              <span className="hover:text-pink-500 cursor-pointer">Instagram</span>
              <span className="hover:text-blue-700 cursor-pointer">LinkedIn</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 bg-white rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <button className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
