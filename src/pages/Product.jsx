import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/cartSlice";
import data from "../data.json";
import "../styles/Product.css";

// Import product images for all screen sizes
import xx99MarkOneDesktop from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx99MarkOneTablet from "../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import xx99MarkOneMobile from "../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import xx99MarkTwoDesktop from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import xx99MarkTwoTablet from "../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import xx99MarkTwoMobile from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx59Desktop from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import xx59Tablet from "../assets/product-xx59-headphones/tablet/image-product.jpg";
import xx59Mobile from "../assets/product-xx59-headphones/mobile/image-product.jpg";
import zx9Desktop from "../assets/product-zx9-speaker/desktop/image-product.jpg";
import zx9Tablet from "../assets/product-zx9-speaker/tablet/image-product.jpg";
import zx9Mobile from "../assets/product-zx9-speaker/mobile/image-product.jpg";
import zx7Desktop from "../assets/product-zx7-speaker/desktop/image-product.jpg";
import zx7Tablet from "../assets/product-zx7-speaker/tablet/image-product.jpg";
import zx7Mobile from "../assets/product-zx7-speaker/mobile/image-product.jpg";
import yx1Desktop from "../assets/product-yx1-earphones/desktop/image-product.jpg";
import yx1Tablet from "../assets/product-yx1-earphones/tablet/image-product.jpg";
import yx1Mobile from "../assets/product-yx1-earphones/mobile/image-product.jpg";

// Import gallery images
import xx99MarkOneGallery1Desktop from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import xx99MarkOneGallery1Tablet from "../assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg";
import xx99MarkOneGallery1Mobile from "../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";
import xx99MarkOneGallery2Desktop from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import xx99MarkOneGallery2Tablet from "../assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg";
import xx99MarkOneGallery2Mobile from "../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import xx99MarkOneGallery3Desktop from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import xx99MarkOneGallery3Tablet from "../assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg";
import xx99MarkOneGallery3Mobile from "../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";

// Similar imports for other products' gallery images...

const productImagesMap = {
  "xx99-mark-one-headphones": {
    desktop: xx99MarkOneDesktop,
    tablet: xx99MarkOneTablet,
    mobile: xx99MarkOneMobile,
    gallery: {
      first: {
        desktop: xx99MarkOneGallery1Desktop,
        tablet: xx99MarkOneGallery1Tablet,
        mobile: xx99MarkOneGallery1Mobile,
      },
      second: {
        desktop: xx99MarkOneGallery2Desktop,
        tablet: xx99MarkOneGallery2Tablet,
        mobile: xx99MarkOneGallery2Mobile,
      },
      third: {
        desktop: xx99MarkOneGallery3Desktop,
        tablet: xx99MarkOneGallery3Tablet,
        mobile: xx99MarkOneGallery3Mobile,
      },
    },
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

const Product = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = data.find((p) => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  if (!product) return <div>Product not found.</div>;

  const productImages = productImagesMap[slug];

  const handleQuantity = (delta) => {
    setQuantity((q) => Math.max(1, q + delta));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ slug: product.slug, quantity, product }));
    setQuantity(1);
  };

  return (
    <div className="product-page container">
      <button className="go-back" onClick={() => navigate(-1)}>
        Go Back
      </button>

      <div className="product-main">
        <div className="product-img">
          <picture>
            <source
              srcSet={`/src/assets/product-${product.slug}/desktop/image-product.jpg`}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={`/src/assets/product-${product.slug}/tablet/image-product.jpg`}
              media="(min-width: 768px)"
            />
            <img
              src={`/src/assets/product-${product.slug}/mobile/image-product.jpg`}
              alt={product.name}
            />
          </picture>
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
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="product-details">
        <div className="features">
          <h2>FEATURES</h2>
          <p>{product.features}</p>
        </div>

        <div className="in-the-box">
          <h2>IN THE BOX</h2>
          <ul>
            {product.includes.map((item) => (
              <li key={item.item}>
                <span className="item-qty">{item.quantity}x</span>
                <span className="item-name">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-gallery">
        <div className="gallery-grid">
          <picture className="gallery-item first">
            <source
              srcSet={`/src/assets/product-${product.slug}/desktop/image-gallery-1.jpg`}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={`/src/assets/product-${product.slug}/tablet/image-gallery-1.jpg`}
              media="(min-width: 768px)"
            />
            <img
              src={`/src/assets/product-${product.slug}/mobile/image-gallery-1.jpg`}
              alt="Gallery 1"
            />
          </picture>
          <picture className="gallery-item second">
            <source
              srcSet={`/src/assets/product-${product.slug}/desktop/image-gallery-2.jpg`}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={`/src/assets/product-${product.slug}/tablet/image-gallery-2.jpg`}
              media="(min-width: 768px)"
            />
            <img
              src={`/src/assets/product-${product.slug}/mobile/image-gallery-2.jpg`}
              alt="Gallery 2"
            />
          </picture>
          <picture className="gallery-item third">
            <source
              srcSet={`/src/assets/product-${product.slug}/desktop/image-gallery-3.jpg`}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={`/src/assets/product-${product.slug}/tablet/image-gallery-3.jpg`}
              media="(min-width: 768px)"
            />
            <img
              src={`/src/assets/product-${product.slug}/mobile/image-gallery-3.jpg`}
              alt="Gallery 3"
            />
          </picture>
        </div>
      </div>

      <div className="you-may-also-like">
        <h2>YOU MAY ALSO LIKE</h2>
        <div className="suggestions">
          {product.others.map((other) => (
            <div key={other.slug} className="suggestion">
              <picture>
                <source
                  srcSet={`/src/assets/shared/desktop/image-${other.slug}.jpg`}
                  media="(min-width: 1024px)"
                />
                <source
                  srcSet={`/src/assets/shared/tablet/image-${other.slug}.jpg`}
                  media="(min-width: 768px)"
                />
                <img
                  src={`/src/assets/shared/mobile/image-${other.slug}.jpg`}
                  alt={other.name}
                />
              </picture>
              <h3>{other.name}</h3>
              <Link to={`/product/${other.slug}`} className="btn btn-primary">
                SEE PRODUCT
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
