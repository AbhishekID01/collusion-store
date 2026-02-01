import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useProductContext } from "../context/productContext";
import { useCartContext } from "../context/CartContext";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

const SingleProduct = () => {
  const { id } = useParams();
  // const { products, isLoading } = useProductContext();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const { addToCart } = useCartContext();
  const navigate = useNavigate();

  if (isLoading) {
    return <p className="text-center py-10 text-lg font-medium">Loading...</p>;
  }

  if (isError) {
    return (
      <p className="text-center py-10 text-lg text-red-500">
        Failed to load product
      </p>
    );
  }

  const product = (products || []).find((item) => String(item.id) === id);

  if (!product) {
    return (
      <p className="text-center py-10 text-lg text-red-500">
        Product not found
      </p>
    );
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-white rounded hover:bg-gray-300 transition border cursor-pointer"
      >
        ← Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full h-[400px] md:h-[400px]">
          <img
            src={product.image}
            alt={product.name}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover border"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-gray-700 font-semibold mb-6">
            ₹{product.price}
          </p>
          <p className="text-gray-600 mb-6">
            {product.description || "No description available."}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="relative bg-lime-300 border text-black px-6 py-3 font-semibold rounded-md overflow-hidden group
             transition-all duration-200 hover:bg-lime-400 active:scale-95 cursor-pointer"
          >
            <span className="relative z-10">Add to Cart</span>

            <span className="absolute inset-0 bg-lime-200 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
