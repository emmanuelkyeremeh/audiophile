import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../state/cartSlice";
import data from "../data.json";
import "../styles/Product.css";
// Import all product images for desktop
import xx99MarkOneImg from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx99MarkTwoImg from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import xx59Img from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import zx9Img from "../assets/product-zx9-speaker/desktop/image-product.jpg";
import zx7Img from "../assets/product-zx7-speaker/desktop/image-product.jpg";
import yx1Img from "../assets/product-yx1-earphones/desktop/image-product.jpg";
// Import gallery images for all products (desktop only for now)
import xx99MarkOneGallery1 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import xx99MarkOneGallery2 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import xx99MarkOneGallery3 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import xx99MarkTwoGallery1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import xx99MarkTwoGallery2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import xx99MarkTwoGallery3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import xx59Gallery1 from "../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import xx59Gallery2 from "../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import xx59Gallery3 from "../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";
import zx9Gallery1 from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import zx9Gallery2 from "../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import zx9Gallery3 from "../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";
import zx7Gallery1 from "../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import zx7Gallery2 from "../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
import zx7Gallery3 from "../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";
import yx1Gallery1 from "../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import yx1Gallery2 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import yx1Gallery3 from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";

const imageMap = {
  "xx99-mark-one-headphones": xx99MarkOneImg,
  "xx99-mark-two-headphones": xx99MarkTwoImg,
  "xx59-headphones": xx59Img,
  "zx9-speaker": zx9Img,
  "zx7-speaker": zx7Img,
  "yx1-earphones": yx1Img,
};
const galleryMap = {
  "xx99-mark-one-headphones": [
    xx99MarkOneGallery1,
    xx99MarkOneGallery2,
    xx99MarkOneGallery3,
  ],
  "xx99-mark-two-headphones": [
    xx99MarkTwoGallery1,
    xx99MarkTwoGallery2,
    xx99MarkTwoGallery3,
  ],
  "xx59-headphones": [xx59Gallery1, xx59Gallery2, xx59Gallery3],
  "zx9-speaker": [zx9Gallery1, zx9Gallery2, zx9Gallery3],
  "zx7-speaker": [zx7Gallery1, zx7Gallery2, zx7Gallery3],
  "yx1-earphones": [yx1Gallery1, yx1Gallery2, yx1Gallery3],
};

const Product = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = data.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  if (!product) return <div>Product not found.</div>;

  const handleQuantity = (delta) => {
    setQuantity((q) => Math.max(1, q + delta));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ slug: product.slug, quantity, product }));
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <div className="product-page">
      <button className="go-back" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="product-main">
        <div className="product-img">
          <img src={imageMap[product.slug]} alt={product.name} />
        </div>
        <div className="product-info">
          {product.new && <span className="overline">NEW PRODUCT</span>}
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span className="product-price">
            $ {product.price.toLocaleString()}
          </span>
          <div className="product-actions">
            <div className="quantity-selector">
              <button onClick={() => handleQuantity(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantity(1)}>+</button>
            </div>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="product-features">
        <h2>Features</h2>
        <p>{product.features}</p>
      </div>
      <div className="product-includes">
        <h2>In the Box</h2>
        <ul>
          {product.includes.map((item) => (
            <li key={item.item}>
              <span className="item-qty">{item.quantity}x</span> {item.item}
            </li>
          ))}
        </ul>
      </div>
      <div className="product-gallery">
        {galleryMap[product.slug].map((img, idx) => (
          <img src={img} alt={`${product.name} gallery ${idx + 1}`} key={img} />
        ))}
      </div>
      <div className="product-others">
        <h2>You may also like</h2>
        <div className="others-list">
          {product.others.map((other) => (
            <div className="other-card" key={other.slug}>
              <img src={imageMap[other.slug]} alt={other.name} />
              <h3>{other.name}</h3>
              <Link to={`/product/${other.slug}`} className="btn btn-secondary">
                See Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
