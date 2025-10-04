import React from "react";
import { useCartContext } from "../context/CartContext";
import { Trash2 } from "lucide-react"; // 🗑️ icon (optional if you use lucide-react)

const CartPage = () => {
  const { cartItems, removeFromCart } = useCartContext();

  // ✅ Calculate totals
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <p className="text-center py-10 text-lg text-gray-500 h-[450px]">
        Your cart is empty 🛒
      </p>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>


      <div className="flex flex-col md:flex-row gap-8">
    
        <div className="flex-1 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 bg-white shadow-sm"
            >
              {/* Product details */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover border "
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600 text-sm">₹{item.price}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <p className="font-semibold text-gray-800">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm flex items-center gap-1 hover:text-red-700 transition cursor-pointer"
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 💳 Right: Order Summary */}
        <div className="w-full md:w-1/3 bg-gray-50 border p-6 h-fit shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between text-gray-700 mb-2">
            <span>Items:</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between text-gray-700 mb-4">
            <span>Subtotal:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full bg-black text-white py-3 font-semibold rounded hover:bg-gray-800 transition cursor-pointer">
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
