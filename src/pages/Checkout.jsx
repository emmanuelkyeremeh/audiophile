import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField, resetForm } from "../state/checkoutFormSlice";
import { clearCart } from "../state/cartSlice";
import { openModal } from "../state/modalSlice";
import "../styles/Checkout.css";

const requiredFields = [
  "name",
  "email",
  "phone",
  "address",
  "zip",
  "city",
  "country",
  "paymentMethod",
];

const Checkout = () => {
  const form = useSelector((state) => state.checkoutForm);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const total = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping;

  const validate = () => {
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!form[field] || form[field].toString().trim() === "") {
        newErrors[field] = "Required";
      }
    });
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    if (form.zip && !/^\d{5,}$/.test(form.zip)) {
      newErrors.zip = "Invalid ZIP";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch(
      updateField({ field: name, value: type === "checkbox" ? checked : value })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(
      openModal({
        items: cart.items,
        total,
        shipping,
        vat,
        grandTotal,
        form,
      })
    );
    dispatch(clearCart());
    dispatch(resetForm());
  };

  return (
    <div className="checkout-page container">
      <button className="go-back" onClick={() => window.history.back()}>
        Go Back
      </button>

      <div className="checkout-content">
        <form className="checkout-form-col">
          <h1>CHECKOUT</h1>

          <div className="form-section">
            <h4>BILLING DETAILS</h4>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name || ""}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email || ""}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone || ""}
                  onChange={handleChange}
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h4>SHIPPING INFO</h4>
            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={form.address || ""}
                  onChange={handleChange}
                  className={errors.address ? "error" : ""}
                />
                {errors.address && (
                  <span className="error-message">{errors.address}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="zip">ZIP Code</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={form.zip || ""}
                  onChange={handleChange}
                  className={errors.zip ? "error" : ""}
                />
                {errors.zip && (
                  <span className="error-message">{errors.zip}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.city || ""}
                  onChange={handleChange}
                  className={errors.city ? "error" : ""}
                />
                {errors.city && (
                  <span className="error-message">{errors.city}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={form.country || ""}
                  onChange={handleChange}
                  className={errors.country ? "error" : ""}
                />
                {errors.country && (
                  <span className="error-message">{errors.country}</span>
                )}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h4>PAYMENT DETAILS</h4>
            <div className="form-grid">
              <div className="form-group">
                <label>Payment Method</label>
                <div className="radio-group">
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="e-money"
                      name="paymentMethod"
                      value="e-money"
                      checked={form.paymentMethod === "e-money"}
                      onChange={handleChange}
                    />
                    <label htmlFor="e-money">e-Money</label>
                  </div>
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="cash"
                      name="paymentMethod"
                      value="cash"
                      checked={form.paymentMethod === "cash"}
                      onChange={handleChange}
                    />
                    <label htmlFor="cash">Cash on Delivery</label>
                  </div>
                </div>
                {errors.paymentMethod && (
                  <span className="error-message">{errors.paymentMethod}</span>
                )}
              </div>

              {form.paymentMethod === "e-money" && (
                <div className="e-money-section">
                  <div className="form-group">
                    <label htmlFor="eMoneyNumber">e-Money Number</label>
                    <input
                      type="text"
                      id="eMoneyNumber"
                      name="eMoneyNumber"
                      value={form.eMoneyNumber || ""}
                      onChange={handleChange}
                      className={errors.eMoneyNumber ? "error" : ""}
                    />
                    {errors.eMoneyNumber && (
                      <span className="error-message">
                        {errors.eMoneyNumber}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="eMoneyPin">e-Money PIN</label>
                    <input
                      type="text"
                      id="eMoneyPin"
                      name="eMoneyPin"
                      value={form.eMoneyPin || ""}
                      onChange={handleChange}
                      className={errors.eMoneyPin ? "error" : ""}
                    />
                    {errors.eMoneyPin && (
                      <span className="error-message">{errors.eMoneyPin}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>

        <div className="checkout-summary-col">
          <h2>SUMMARY</h2>
          <ul>
            {cart.items.map((item) => (
              <li key={item.slug} className="cart-item">
                <div className="cart-item-image">
                  <img
                    src={`/assets/cart/image-${item.slug}.jpg`}
                    alt={item.product.name}
                  />
                </div>
                <div className="cart-item-details">
                  <h4>{item.product.shortName || item.product.name}</h4>
                  <p className="price">
                    $ {item.product.price.toLocaleString()}
                  </p>
                </div>
                <span className="quantity">x{item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="summary-row">
            <span>TOTAL</span>
            <span className="price">$ {total.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>SHIPPING</span>
            <span className="price">$ {shipping}</span>
          </div>
          <div className="summary-row">
            <span>VAT (INCLUDED)</span>
            <span className="price">$ {vat}</span>
          </div>
          <div className="summary-row grand">
            <span>GRAND TOTAL</span>
            <span>$ {grandTotal.toLocaleString()}</span>
          </div>
          <button
            className="btn-continue-pay"
            type="submit"
            onClick={handleSubmit}
          >
            CONTINUE & PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
