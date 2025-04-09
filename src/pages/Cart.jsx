import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import "./Cart.css";

const Cart = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector((state) => state.cart.cartItems);

   const handleQuantityChange = (id, amount) => {
      const item = cartItems.find((item) => item.id === id);
      if (item) {
         if (item.quantity + amount <= 0) {
            dispatch(removeFromCart(id));
         } else {
            dispatch(addToCart({ ...item, quantity: amount }));
         }
      }
   };

   const handleRemoveItem = (id) => {
      dispatch(removeFromCart(id));
   };

   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

   return (
      <div className="cart-container">
         <h2>Your Cart</h2>
         {cartItems.length > 0 ? (
            <>
               <div className="cart-items">
                  {cartItems.map((item) => (
                     <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-info">
                           <h3>{item.name}</h3>
                           <p className="price">₹{item.price}</p>
                           <div className="quantity-controls">
                              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                           </div>
                        </div>
                        <div className="cart-item-subtotal">
                           <p>Subtotal: ₹{item.price * item.quantity}</p>
                           <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
                              Remove
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="cart-summary">
                  <h3>Total: ₹{totalPrice}</h3>
                  <button className="checkout-btn">Proceed to Checkout</button>
               </div>
            </>
         ) : (
            <p className="empty-cart">Your cart is empty!</p>
         )}
      </div>
   );
};

export default Cart;
