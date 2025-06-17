import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";
import "../styles/Category.css";
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

const Category = () => {
  const { category } = useParams();
  const products = data.filter((p) => p.category === category);

  return (
    <div className="category-page">
      <h1 className="category-title">{category}</h1>
      <div className="category-products">
        {products.map((product, idx) => (
          <div
            className={`category-product-card ${
              idx % 2 === 1 ? "reverse" : ""
            }`}
            key={product.slug}
          >
            <div className="category-product-img">
              <img src={imageMap[product.slug]} alt={product.name} />
            </div>
            <div className="category-product-info">
              {product.new && <span className="overline">NEW PRODUCT</span>}
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <Link to={`/product/${product.slug}`} className="btn btn-primary">
                See Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
