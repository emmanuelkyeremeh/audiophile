import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import categoryHeadphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import categorySpeakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import categoryEarphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import productXX99MarkTwoHeadphones from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import zx9SpeakerImg from "../assets/product-zx9-speaker/desktop/image-product.jpg";
import zx7SpeakerImg from "../assets/product-zx7-speaker/desktop/image-product.jpg";
import yx1EarphonesImg from "../assets/product-yx1-earphones/desktop/image-product.jpg";

const categories = [
  {
    name: "Headphones",
    image: categoryHeadphones,
    link: "/category/headphones",
  },
  {
    name: "Speakers",
    image: categorySpeakers,
    link: "/category/speakers",
  },
  {
    name: "Earphones",
    image: categoryEarphones,
    link: "/category/earphones",
  },
];

const featured = [
  data.find((p) => p.slug === "zx9-speaker"),
  data.find((p) => p.slug === "zx7-speaker"),
  data.find((p) => p.slug === "yx1-earphones"),
].filter(Boolean);

const featuredImages = {
  "zx9-speaker": zx9SpeakerImg,
  "zx7-speaker": zx7SpeakerImg,
  "yx1-earphones": yx1EarphonesImg,
};

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="overline">NEW PRODUCT</span>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            with the new XX99 Mark II headphones.{" "}
          </p>
          <Link
            to="/product/xx99-mark-two-headphones"
            className="btn btn-primary"
          >
            See Product
          </Link>
        </div>
        <div className="hero-img">
          <img
            src={productXX99MarkTwoHeadphones}
            alt="XX99 Mark II Headphones"
          />
        </div>
      </section>

      {/* Category Cards */}
      <section className="categories">
        {categories.map((cat) => (
          <Link to={cat.link} className="category-card" key={cat.name}>
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <span className="shop-link">Shop &rarr;</span>
          </Link>
        ))}
      </section>

      {/* Featured Products */}
      <section className="featured">
        {featured.map((product) => (
          <div className="featured-card" key={product.slug}>
            <img src={featuredImages[product.slug]} alt={product.name} />
            <div className="featured-info">
              {product.new && <span className="overline">NEW PRODUCT</span>}
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <Link
                to={`/product/${product.slug}`}
                className="btn btn-secondary"
              >
                See Product
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
