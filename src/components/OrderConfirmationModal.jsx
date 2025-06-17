import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../state/modalSlice";
import "../styles/OrderConfirmationModal.css";
import checkmarkIcon from "../assets/checkout/icon-order-confirmation.svg";

const OrderConfirmationModal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!modal.isOpen || !modal.order) return null;
  const { items, total, shipping, vat, grandTotal } = modal.order;

  const mainItem = items[0];
  const otherItems = items.slice(1);

  const handleBackToHome = () => {
    dispatch(closeModal());
    navigate("/");
  };

  return (
    <div className="order-modal-backdrop">
      <div className="order-modal">
        <img
          src={checkmarkIcon}
          alt="Order confirmed"
          className="checkmark-icon"
        />
        <h2>
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h2>
        <p className="confirmation-text">
          You will receive an email confirmation shortly.
        </p>

        <div className="order-summary">
          <div className="items-section">
            <div className="main-item">
              <div className="item-with-price">
                <div className="item-image">
                  <img
                    src={`/src/${mainItem.product.image.mobile.replace(
                      "./",
                      ""
                    )}`}
                    alt={mainItem.product.name}
                  />
                </div>
                <div className="item-details">
                  <h4>{mainItem.product.name}</h4>
                  <p className="price">
                    $ {mainItem.product.price.toLocaleString()}
                  </p>
                </div>
                <span className="quantity">x{mainItem.quantity}</span>
              </div>
              {otherItems.length > 0 && (
                <div className="other-items">
                  <div className="divider"></div>
                  <p>and {otherItems.length} other item(s)</p>
                </div>
              )}
            </div>
          </div>
          <div className="grand-total-section">
            <p className="total-label">GRAND TOTAL</p>
            <p className="total-amount">$ {grandTotal.toLocaleString()}</p>
          </div>
        </div>

        <button className="btn-back-home" onClick={handleBackToHome}>
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
