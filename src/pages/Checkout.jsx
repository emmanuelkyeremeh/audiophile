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

  const total = cart.reduce(
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
        items: cart,
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
    <div className="checkout-bg">
      <div className="checkout-page">
        <form className="checkout-form-col" onSubmit={handleSubmit}>
          <h1>Checkout</h1>
          <div className="form-section">
            <label>
              Name
              <input name="name" value={form.name} onChange={handleChange} />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </label>
            <label>
              Email
              <input name="email" value={form.email} onChange={handleChange} />
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </label>
            <label>
              Phone
              <input name="phone" value={form.phone} onChange={handleChange} />
              {errors.phone && (
                <span className="form-error">{errors.phone}</span>
              )}
            </label>
            <label>
              Address
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
              />
              {errors.address && (
                <span className="form-error">{errors.address}</span>
              )}
            </label>
            <label>
              ZIP
              <input name="zip" value={form.zip} onChange={handleChange} />
              {errors.zip && <span className="form-error">{errors.zip}</span>}
            </label>
            <label>
              City
              <input name="city" value={form.city} onChange={handleChange} />
              {errors.city && <span className="form-error">{errors.city}</span>}
            </label>
            <label>
              Country
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
              />
              {errors.country && (
                <span className="form-error">{errors.country}</span>
              )}
            </label>
            <label>
              Payment Method
              <select
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
              >
                <option value="e-Money">e-Money</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
              {errors.paymentMethod && (
                <span className="form-error">{errors.paymentMethod}</span>
              )}
            </label>
            {form.paymentMethod === "e-Money" && (
              <>
                <label>
                  e-Money Number
                  <input
                    name="eMoneyNumber"
                    value={form.eMoneyNumber}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  e-Money PIN
                  <input
                    name="eMoneyPin"
                    value={form.eMoneyPin}
                    onChange={handleChange}
                  />
                </label>
              </>
            )}
          </div>
          <button className="btn btn-primary" type="submit">
            Continue & Pay
          </button>
        </form>
        <div className="checkout-summary-col">
          <h2>Summary</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.slug}>
                {item.product.name} x{item.quantity}{" "}
                <span>${item.product.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="summary-row">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
        