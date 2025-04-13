
import React, { useState } from "react";
import { Heart, ShoppingCart, Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Պայուսակ 1",
    price: "12,000 դր․",
    image: "https://i.imgur.com/sS6zT6Q.png",
  },
  {
    id: 2,
    name: "Օծանելիք 1",
    price: "18,000 դր․",
    image: "https://i.imgur.com/t5l8py1.png",
  },
  {
    id: 3,
    name: "Կոսմետիկա 1",
    price: "9,500 դր․",
    image: "https://i.imgur.com/jJc5tRj.png",
  },
];

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="font-sans p-4 bg-green-50 min-h-screen">
      <header className="flex justify-between items-center p-4 bg-white shadow-md rounded-2xl">
        <h1 className="text-3xl font-bold text-green-600">Rare Beauty</h1>
        <nav className="flex gap-6 text-lg">
          <a href="#bags">Պայուսակներ</a>
          <a href="#perfumes">Օծանելիք</a>
          <a href="#cosmetics">Կոսմետիկա</a>
        </nav>
        <div className="flex gap-4 items-center">
          <Search />
          <ShoppingCart />
        </div>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 relative"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl w-full h-48 object-cover"
            />
            <button
              className="absolute top-4 right-4 text-red-400"
              onClick={() => toggleFavorite(product.id)}
            >
              <Heart
                fill={favorites.includes(product.id) ? "red" : "none"}
              />
            </button>
            <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
            <p className="text-green-700 font-bold">{product.price}</p>
            <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-xl">
              Տեսնել մանրամասները
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
