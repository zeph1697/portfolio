import React from "react";
import "./services.css";
import { TbChecks } from "react-icons/tb";

const Services = () => {
  return (
    <section id="services">
      <h5>What Can I Offer You</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Website Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <TbChecks className="service_icon" />
              <p>Business Website.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Ecommerce Website.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Real Estate Website.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Restaurant Web/App.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Blog & Portfolio.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Brand Style</h3>
          </div>

          <ul className="service_list">
            <li>
              <TbChecks className="service_icon" />
              <p>Create Professional Logo.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Banner/Ads Design.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Package Design.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Catalog Design.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Draw T-shirt Art.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Background/Custom Art.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Social Media</h3>
          </div>

          <ul className="service_list">
            <li>
              <TbChecks className="service_icon" />
              <p>Edit YouTube & Youtube Short Videos.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Edit Tiktok Videos.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Create Intro/Outro.</p>
            </li>

            <li>
              <TbChecks className="service_icon" />
              <p>Add 2D & 3D Effects.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
