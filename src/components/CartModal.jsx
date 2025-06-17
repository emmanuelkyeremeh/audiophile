import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity, clearCart } from "../state/cartSlice";
import "./CartModal.css";

const CartModal = ({ isOpen, onClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleQuantityChange = (slug, delta) => {
    dispatch(updateQuantity({ slug, delta }));
  };

  const handleRemoveItem = (slug) => {
    dispatch(removeFromCart(slug));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const total = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal-header">
          <h6>CART ({cart.items.length})</h6>
          {cart.items.length > 0 && (
            <button className="remove-all" onClick={handleClearCart}>
              Remove all
            </button>
          )}
        </div>

        {cart.items.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.items.map((item) => (
                <div key={item.slug} className="cart-item">
                  <div className="cart-item-image">
                    <img
                      src={`/assets/cart/image-${item.slug}.jpg`}
                      alt={item.product.name}
                    />
                  </div>
                  <div className="cart-item-info">
                    <h6>{item.product.shortName || item.product.name}</h6>
                    <span className="price">
                      $ {item.product.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="quantity-selector">
                    <button onClick={() => handleQuantityChange(item.slug, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.slug, 1)}>
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <span>TOTAL</span>
              <span>$ {total.toLocaleString()}</span>
            </div>

            <Link
              to="/checkout"
              className="btn btn-primary checkout-btn"
              onClick={onClose}
            >
              CHECKOUT
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
