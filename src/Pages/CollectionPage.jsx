import React, { useMemo } from "react";
// import { useProductContext } from "../context/productContext";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

const CollectionPage = () => {
  // const { isLoading, featureProducts } = useProductContext();
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

  const featureProducts = useMemo(() => {
    return (products || []).filter((item) => item.featured);
  }, [products]);
  if (isLoading) {
    return <p className="text-center py-10 text-lg font-medium">Loading...</p>;
  }

  if (isError) {
    return (
      <p className="text-center py-10 text-red-500">Error loading products</p>
    );
  }

  return (
    <section className="w-full">
      {/* Section Heading */}
      <div className="px-14 py-4">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          Spring / Summer 2024 Collection
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left Big Product */}
          {featureProducts[0] && (
            <Link
              to={`/singleProduct/${featureProducts[0].id}`}
              className="w-full h-full overflow-hidden block"
            >
              <img
                src={featureProducts[0].image}
                alt={featureProducts[0].name}
                loading="lazy"
                decoding="async"
                className="h-[400px] md:h-[700px] w-full object-cover border-t"
              />
              <div className="p-6 border-t border-r">
                <h3 className="text-sm md:text-base font-semibold">
                  {featureProducts[0].name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {featureProducts[0].price}
                </p>
              </div>
            </Link>
          )}

          {/* Right Side */}
          <div className="md:col-span-2 grid grid-rows-2">
            {/* Top Row (2 small products) */}
            <div className="grid grid-cols-2">
              {featureProducts.slice(1, 3).map((item) => (
                <Link
                  key={item.id}
                  to={`/singleProduct/${item.id}`}
                  className="overflow-hidden block"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[200px] md:h-[300px] object-cover border"
                  />
                  <div className="p-7 border-r">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Row (1 wide product) */}
            {featureProducts[3] && (
              <Link
                to={`/singleProduct/${featureProducts[3].id}`}
                className="overflow-hidden block"
              >
                <img
                  src={featureProducts[3].image}
                  alt={featureProducts[3].name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[200px] md:h-[300px] object-cover border"
                />
                <div className="p-7">
                  <h3 className="text-sm font-medium">
                    {featureProducts[3].name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {featureProducts[3].price}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPage;
