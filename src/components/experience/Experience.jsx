import React from "react";
import "./experience.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { CgFigma } from "react-icons/cg";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Do I Have</h5>
      <h2>My Experience</h2>

      <div className="container exp_container">
        <div className="exp_frontend">
          <h3>Front-end</h3>
          <div className="exp_content">
            <article className="exp_details">
              <SiHtml5 className="exp_icon" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <SiCss3 className="exp_icon" />
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <SiJavascript className="exp_icon" />
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <SiReact className="exp_icon" />
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exp_backend">
          <h3>Back-end</h3>
          <div className="exp_content">
            <article className="exp_details">
              <SiNodedotjs className="exp_icon" />
              <div>
                <h4>NodeJS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <SiPython className="exp_icon" />
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exp_graphic">
          <h3>Graphic & Motion Design</h3>
          <div className="exp_content">
            <article className="exp_details">
              <SiAdobepremierepro className="exp_icon" />
              <div>
                <h4>
                  Adobe
                  <br />
                  Premier Pro
                </h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <SiAdobeaftereffects className="exp_icon" />
              <div>
                <h4>
                  Adobe
                  <br />
                  After Effects
                </h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <SiAdobeillustrator className="exp_icon" />
              <div>
                <h4>Adobe Illustrator</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <SiAdobephotoshop className="exp_icon" />
              <div>
                <h4>Adobe Photoshop</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exp_animation">
          <h3>Tools</h3>
          <div className="exp_content">
            <article className="exp_details">
              <BsGithub className="exp_icon" />
              <div>
                <h4>Git</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <SiFirebase className="exp_icon" />
              <div>
                <h4>Google Firebase</h4>
                <small>Junior</small>
              </div>
            </article>

            <article className="exp_details">
              <SiTailwindcss className="exp_icon" />
              <div>
                <h4>TailwindCSS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <SiWordpress className="exp_icon" />
              <div>
                <h4>Wordpress</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <CgFigma className="exp_icon" />
              <div>
                <h4>Figma</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
