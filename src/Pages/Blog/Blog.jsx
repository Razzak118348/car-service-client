const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Car Maintenance Tips",
      img: "https://i.ibb.co/T2cpBd5/888.jpg",
      excerpt:
        "Regular maintenance keeps your car running smoothly. Learn how to check your oil, tires, and brakes efficiently.",
      date: "Jan 20, 2026",
    },
    {
      id: 2,
      title: "How to Extend Battery Life",
      img: "https://i.ibb.co/ydCbDN3/5555.jpg",
      excerpt:
        "Battery issues are common. Discover the secrets to keeping your car battery healthy for years.",
      date: "Jan 18, 2026",
    },
    {
      id: 3,
      title: "Signs Your Engine Needs Repair",
      img: "https://i.ibb.co/5MvmD2g/88.jpg",
      excerpt:
        "Engine problems can be costly. Learn the early signs to catch issues before they become serious.",
      date: "Jan 15, 2026",
    },
    {
      id: 4,
      title: "Electrical System Check for Your Car",
      img: "https://i.ibb.co/KzCG8qr/8888.jpg",
      excerpt:
        "Modern cars rely on complex electrical systems. Learn how to keep everything running smoothly.",
      date: "Jan 10, 2026",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Car Service Blog</h1>
        <p className="text-gray-600 text-lg">
          Stay updated with tips, tricks, and news about maintaining and repairing your car.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card bg-base-100 shadow-lg rounded-xl hover:shadow-2xl transition overflow-hidden"
          >
            <figure>
              <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">{blog.title}</h2>
              <p className="text-gray-600">{blog.excerpt}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">{blog.date}</span>
                <button className="btn btn-sm btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
