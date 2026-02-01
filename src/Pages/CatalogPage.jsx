import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

const mapColorName = (hex = "") => {
  const colorMap = {
    "#000000": "black",
    "#ffffff": "white",
    "#ff0000": "red",
    "#008000": "green",
    "#2f4f4f": "gray",
  };
  return colorMap[hex.toLowerCase()] || hex;
};

const CatalogPage = () => {
  /* =========================
     1️⃣ ALL HOOKS FIRST
  ========================= */

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      return (
        (!selectedCategory ||
          item.gender?.toLowerCase() === selectedCategory.toLowerCase()) &&
        (!selectedCollection ||
          item.collection?.toLowerCase() ===
            selectedCollection.toLowerCase()) &&
        (!selectedColor ||
          item.colors?.some(
            (c) =>
              mapColorName(c).toLowerCase() ===
              selectedColor.toLowerCase()
          )) &&
        (!selectedSize ||
          item.size?.toLowerCase() === selectedSize.toLowerCase())
      );
    });
  }, [
    products,
    selectedCategory,
    selectedCollection,
    selectedColor,
    selectedSize,
  ]);

  /* =========================
     2️⃣ CONDITIONAL RETURNS
  ========================= */

  if (isLoading) {
    return (
      <p className="text-center py-10 text-lg font-medium">
        Loading products...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-center py-10 text-red-500">
        Error loading products
      </p>
    );
  }

  /* =========================
     3️⃣ JSX
  ========================= */

  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 border-x">
        {/* Sidebar */}
        <aside className="col-span-1 border-r p-6 space-y-6 bg-white">
          <h2 className="text-lg font-bold">CATALOG</h2>

          {/* Category */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Category</h3>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border p-2 text-sm"
            >
              <option value="">All</option>
              <option value="Male">Men</option>
              <option value="Female">Women</option>
            </select>
          </div>

          {/* Collection */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Collection</h3>
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="w-full border p-2 text-sm"
            >
              <option value="">All</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
            </select>
          </div>

          {/* Color */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Color</h3>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full border p-2 text-sm"
            >
              <option value="">All</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
            </select>
          </div>

          {/* Size */}
          <div>
            <h3 className="font-semibold text-sm mb-2">Size</h3>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full border p-2 text-sm"
            >
              <option value="">All</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <button
            onClick={() => {
              setSelectedCategory("");
              setSelectedCollection("");
              setSelectedColor("");
              setSelectedSize("");
            }}
            className="mt-4 text-xs text-white bg-red-500 p-4 rounded"
          >
            Reset Filters
          </button>
        </aside>

        {/* Products */}
        <div className="col-span-3 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l">
            {filteredProducts.length ? (
              filteredProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/singleProduct/${item.id}`}
                  className="border-r border-b group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[280px] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      ₹{item.price}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="col-span-3 text-center py-10 text-gray-500">
                No products found.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
