import React from "react";
import img from "../assets/img2.jpeg";
let text = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima."];

const Section3 = () => {
  return (
    <section className="feedback-section">
      <div className="container">
        <div className="feedback-grid">
          {[...Array(6)].map((_, index) => (
            <div className="feedback-card" key={index}>
              <blockquote className="feedback-text-box">
                <p className="feedback-text">
                  {text[index]};
                </p>
              </blockquote>
              <div className="feedback-profile">
                <img src={img} alt="User" className="profile-img" />
                <div className="profile-info">
                  <p className="profile-name">Gladis Lennon</p>
                  <p className="profile-role">Head of SEO</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;