import React, { useState } from "react";

const businesses = [
  {
    id: 1,
    name: "Aloha Eats",
    category: "Restaurants",
    rating: 4.5,
    premium: true,
    image: "https://source.unsplash.com/400x300/?restaurant,food",
  },
  {
    id: 2,
    name: "Island Gym",
    category: "Fitness",
    rating: 4.2,
    premium: false,
    image: "https://source.unsplash.com/400x300/?gym,fitness",
  },
  {
    id: 3,
    name: "Beach Boutique",
    category: "Shopping",
    rating: 4.8,
    premium: true,
    image: "https://source.unsplash.com/400x300/?clothing,store",
  },
  {
    id: 4,
    name: "Ocean Spa",
    category: "Beauty",
    rating: 4.6,
    premium: false,
    image: "https://source.unsplash.com/400x300/?spa,relax",
  },
];

function BusinessCard({ business }) {
  return (
    <div
      className={`${
        business.premium ? "border-4 border-yellow-400" : "shadow-md"
      } bg-white rounded-lg overflow-hidden`}
    >
      <img
        src={business.image}
        alt={business.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold flex items-center justify-between">
          {business.name}
          {business.premium && (
            <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-yellow-500 rounded">
              PREMIUM
            </span>
          )}
        </h3>
        <p className="text-sm text-gray-600">{business.category}</p>
        <p className="text-yellow-500 font-semibold">⭐ {business.rating}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredBusinesses = businesses.filter((biz) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      biz.name.toLowerCase().includes(search) ||
      biz.category.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "" || biz.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedBusinesses = [...filteredBusinesses].sort(
    (a, b) => (b.premium ? 1 : 0) - (a.premium ? 1 : 0)
  );

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Hawaii’s #1 Local Business Directory
          </h1>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Restaurants",
            "Fitness",
            "Shopping",
            "Services",
            "Beauty",
            "Health",
            "Entertainment",
            "More...",
          ].map((cat) => (
            <div
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer bg-gray-100 hover:bg-gray-200 text-center p-6 rounded-lg ${
                selectedCategory === cat ? "bg-yellow-200" : ""
              }`}
            >
              <p className="text-lg font-semibold">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Listings */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBusinesses.map((biz) => (
            <BusinessCard key={biz.id} business={biz} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>&copy; {new Date().getFullYear()} Hawaii Thrive Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}
