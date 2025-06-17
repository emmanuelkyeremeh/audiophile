import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";
import "../styles/Category.css";

// Import product images for all screen sizes
import xx99MarkOneDesktop from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx99MarkOneTablet from "../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx99MarkOneMobile from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import xx99MarkTwoDesktop from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99MarkTwoTablet from "../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import xx99MarkTwoMobile from "../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import xx59Desktop from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import xx59Tablet from "../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx59Mobile from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import zx9Desktop from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx9Tablet from "../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import zx9Mobile from "../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import zx7Desktop from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import zx7Tablet from "../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import zx7Mobile from "../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import yx1Desktop from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import yx1Tablet from "../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx1Mobile from "../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";

const imageMap = {
  "xx99-mark-one-headphones": {
    desktop: xx99MarkOneDesktop,
    tablet: xx99MarkOneTablet,
    mobile: xx99MarkOneMobile,
  },
  "xx99-mark-two-headphones": {
    desktop: xx99MarkTwoDesktop,
    tablet: xx99MarkTwoTablet,
    mobile: xx99MarkTwoMobile,
  },
  "xx59-headphones": {
    desktop: xx59Desktop,
    tablet: xx59Tablet,
    mobile: xx59Mobile,
  },
  "zx9-speaker": {
    desktop: zx9Desktop,
    tablet: zx9Tablet,
    mobile: zx9Mobile,
  },
  "zx7-speaker": {
    desktop: zx7Desktop,
    tablet: zx7Tablet,
    mobile: zx7Mobile,
  },
  "yx1-earphones": {
    desktop: yx1Desktop,
    tablet: yx1Tablet,
    mobile: yx1Mobile,
  },
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
              <picture>
                <source
                  srcSet={imageMap[product.slug].desktop}
                  media="(min-width: 1024px)"
                />
                <source
                  srcSet={imageMap[product.slug].tablet}
                  media="(min-width: 768px)"
                />
                <img src={imageMap[product.slug].mobile} alt={product.name} />
              </picture>
            </div>
            <div className="category-product-info">
              {product.new && <span className="overline">NEW PRODUCT</span>}
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <Link to={`/product/${product.slug}`} className="btn btn-primary">
                SEE PRODUCT
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
