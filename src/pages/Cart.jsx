import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart, clearCart } from "../state/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Cart.css";
// Import all product images for desktop
import xx99MarkOneImg from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx99MarkTwoImg from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import xx59Img from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import zx9Img from "../assets/product-zx9-speaker/desktop/image-product.jpg";
import zx7Img from "../assets/product-zx7-speaker/desktop/image-product.jpg";
import yx1Img from "../assets/product-yx1-earphones/desktop/image-product.jpg";

const imageMap = {
  "xx99-mark-one-headphones": xx99MarkOneImg,
  "xx99-mark-two-headphones": xx99MarkTwoImg,
  "xx59-headphones": xx59Img,
  "zx9-speaker": zx9Img,
  "zx7-speaker": zx7Img,
  "yx1-earphones": yx1Img,
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantity = (slug, delta, currentQty) => {
    const newQty = Math.max(1, currentQty + delta);
    dispatch(updateQuantity({ slug, quantity: newQty }));
  };

  const handleRemove = (slug) => {
    dispatch(removeFromCart(slug));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <div className="cart-empty">Your cart is empty.</div>
      ) : (
        <>
          <button className="cart-clear" onClick={handleClear}>
            Remove all
          </button>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.slug}>
                <img
                  src={imageMap[item.slug]}
                  alt={item.product.name}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <h3>{item.product.name}</h3>
                  <span className="cart-item-price">
                    $ {item.product.price.toLocaleString()}
                  </span>
                  <div className="cart-item-actions">
                    <button
                      onClick={() =>
                        handleQuantity(item.slug, -1, item.quantity)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantity(item.slug, 1, item.quantity)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => handleRemove(item.slug)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span>Total</span>
            <span className="cart-total-amount">
              $ {total.toLocaleString()}
            </span>
          </div>
          <button
            className="btn btn-primary cart-checkout"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
