import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_img">
            <img src={IMG1} alt="" />
          </div>
          <h3>Responsive Restaurant App</h3>
          <small>
            React, Redux/Reducer, Firebase, Framer Motion, TailwindCSS
          </small>
          <div className="portfolio_cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://www.youtube.com/channel/UCe1SjUZsOFX0GGTa1nTsAWw"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_img">
            <img src={IMG2} alt="" />
          </div>
          <h3>Responsive Portfolio</h3>
          <small>React, HTML, CSS, SwiperJS</small>
          <div className="portfolio_cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://www.youtube.com/channel/UCe1SjUZsOFX0GGTa1nTsAWw"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_img">
            <img src={IMG3} alt="" />
          </div>
          <h3>VieSmart Company Website</h3>
          <small>WordPress</small>
          <div className="portfolio_cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://www.youtube.com/channel/UCe1SjUZsOFX0GGTa1nTsAWw"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_img">
            <img src={IMG4} alt="" />
          </div>
          <h3>BioRinse & Baby's Tooth Package</h3>
          <small>Adobe Illustrator</small>
          <div className="portfolio_cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://www.youtube.com/channel/UCe1SjUZsOFX0GGTa1nTsAWw"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_img">
            <img src={IMG5} alt="" />
          </div>
          <h3>Genshin Impact Cursor Pack</h3>
          <small>Adobe Illustrator, icoFX3</small>
          <div className="portfolio_cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://www.youtube.com/channel/UCe1SjUZsOFX0GGTa1nTsAWw"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_img">
            <img src={IMG6} alt="" />
          </div>
          <h3>VieSmart Logo & Catalog</h3>
          <small>Adobe Illustrator</small>
          <div className="portfolio_cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://www.youtube.com/channel/UCe1SjUZsOFX0GGTa1nTsAWw"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
