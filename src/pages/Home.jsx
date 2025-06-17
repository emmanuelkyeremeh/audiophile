import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImage from "../assets/home/desktop/image-hero.jpg";
import heroImageTablet from "../assets/home/tablet/image-header.jpg";
import heroImageMobile from "../assets/home/mobile/image-header.jpg";
import categoryHeadphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import categorySpeakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import categoryEarphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import zx9SpeakerImg from "../assets/home/desktop/image-speaker-zx9.png";
import zx9SpeakerImgTablet from "../assets/home/tablet/image-speaker-zx9.png";
import zx9SpeakerImgMobile from "../assets/home/mobile/image-speaker-zx9.png";
import zx7SpeakerImg from "../assets/home/desktop/image-speaker-zx7.jpg";
import yx1EarphonesImg from "../assets/home/desktop/image-earphones-yx1.jpg";
import yx1EarphonesImgTablet from "../assets/home/tablet/image-earphones-yx1.jpg";
import yx1EarphonesImgMobile from "../assets/home/mobile/image-earphones-yx1.jpg";
import patternCircles from "../assets/home/desktop/pattern-circles.svg";
import bestGearImg from "../assets/shared/desktop/image-best-gear.jpg";
import bestGearImgTablet from "../assets/shared/tablet/image-best-gear.jpg";
import bestGearImgMobile from "../assets/shared/mobile/image-best-gear.jpg";

const categories = [
  {
    name: "HEADPHONES",
    image: categoryHeadphones,
    link: "/category/headphones",
  },
  {
    name: "SPEAKERS",
    image: categorySpeakers,
    link: "/category/speakers",
  },
  {
    name: "EARPHONES",
    image: categoryEarphones,
    link: "/category/earphones",
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content container">
          <span className="overline">NEW PRODUCT</span>
          <h1>
            XX99 MARK II
            <br />
            HEADPHONES
          </h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            to="/product/xx99-mark-two-headphones"
            className="btn btn-primary"
          >
            SEE PRODUCT
          </Link>
        </div>
        <picture className="hero-img">
          <source srcSet={heroImage} media="(min-width: 1024px)" />
          <source srcSet={heroImageTablet} media="(min-width: 768px)" />
          <img src={heroImageMobile} alt="XX99 Mark II Headphones" />
        </picture>
      </section>

      {/* Category Cards */}
      <section className="categories container">
        {categories.map((cat) => (
          <Link to={cat.link} className="category-card" key={cat.name}>
            <img src={cat.image} alt={cat.name} />
            <h6>{cat.name}</h6>
            <span className="shop-link">
              SHOP <span className="arrow">›</span>
            </span>
          </Link>
        ))}
      </section>

      {/* Featured Products */}
      <section className="featured container">
        <div className="featured-zx9">
          <img src={patternCircles} alt="" className="pattern-circles" />
          <div className="product-image">
            <picture>
              <source srcSet={zx9SpeakerImg} media="(min-width: 1024px)" />
              <source srcSet={zx9SpeakerImgTablet} media="(min-width: 768px)" />
              <img src={zx9SpeakerImgMobile} alt="ZX9 Speaker" />
            </picture>
          </div>
          <div className="content">
            <h1>
              ZX9
              <br />
              SPEAKER
            </h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/product/zx9-speaker" className="btn btn-black">
              SEE PRODUCT
            </Link>
          </div>
        </div>

        <div className="featured-zx7">
          <div className="content">
            <h4>ZX7 SPEAKER</h4>
            <Link to="/product/zx7-speaker" className="btn btn-outline">
              SEE PRODUCT
            </Link>
          </div>
        </div>

        <div className="featured-yx1">
          <div className="image">
            <picture>
              <source srcSet={yx1EarphonesImg} media="(min-width: 1024px)" />
              <source
                srcSet={yx1EarphonesImgTablet}
                media="(min-width: 768px)"
              />
              <img src={yx1EarphonesImgMobile} alt="YX1 Earphones" />
            </picture>
          </div>
          <div className="content">
            <h4>YX1 EARPHONES</h4>
            <Link to="/product/yx1-earphones" className="btn btn-outline">
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>

      {/* Best Gear Section */}
      <section className="best-gear container">
        <div className="content">
          <h2>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="image">
          <picture>
            <source srcSet={bestGearImg} media="(min-width: 1024px)" />
            <source srcSet={bestGearImgTablet} media="(min-width: 768px)" />
            <img src={bestGearImgMobile} alt="Best audio gear" />
          </picture>
        </div>
      </section>
    </div>
  );
};

export default Home;
