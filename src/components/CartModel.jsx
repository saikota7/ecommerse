import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useShoppingCart } from '../hooks/useShoppingCart';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useShoppingCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative min-h-screen md:min-h-0 md:h-auto flex items-center justify-center p-4">
        <div className="relative bg-white w-full max-w-md rounded-lg shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-4 max-h-[60vh] overflow-y-auto">
            {cart.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4 border-b">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
              </div>
              <a
                href="/checkout"
                className="block w-full bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Proceed to Checkout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
