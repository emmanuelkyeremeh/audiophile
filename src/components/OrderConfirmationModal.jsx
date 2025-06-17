import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../state/modalSlice";
import "../styles/OrderConfirmationModal.css";

const OrderConfirmationModal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (!modal.isOpen || !modal.order) return null;
  const { items, total, shipping, vat, grandTotal } = modal.order;

  return (
    <div className="order-modal-backdrop">
      <div className="order-modal">
        <h2>Thank you for your order</h2>
        <p>You will receive an email confirmation shortly.</p>
        <div className="order-summary">
          <ul>
            {items.map((item) => (
              <li key={item.slug}>
                {item.product.name} x{item.quantity}{" "}
                <span>${item.product.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <div className="summary-row">
            <span>Grand Total</span>
            <span>${grandTotal.toLocaleString()}</span>
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(closeModal())}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
