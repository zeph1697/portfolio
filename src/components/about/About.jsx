import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaLaptopCode } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaLaptopMedical } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaLaptopCode className="about_icon" />
              <h5>Web Development</h5>
              <small>1+ Year</small>
            </article>

            <article className="about_card">
              <FaLaptop className="about_icon" />
              <h5>Graphic Design</h5>
              <small>5+ Years</small>
            </article>

            <article className="about_card">
              <FaLaptopMedical className="about_icon" />
              <h5>Video Editing</h5>
              <small>5+ Years</small>
            </article>

            <article className="about_card">
              <IoPeopleCircle className="about_icon" />
              <h5>Clients</h5>
              <small>
                10+ Persons
                <br />&<br />
                3+ Entities
              </small>
            </article>

            <article className="about_card">
              <FaProjectDiagram className="about_icon" />
              <h5>Products</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
            My name is <h3>Viet Anh Nguyen</h3>, I'm a full-stack developer and
            a graphic designer. I'm here to help you design & develop pixel
            perfect & clean modern websites with exactly your requirements. I
            also can design/redesign tons of awesome artworks or edit social
            media videos like tiktok, youtube. Let me know what you want, I'll
            make ideas become true!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
