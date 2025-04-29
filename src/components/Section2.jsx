import React from "react";
import img from '../assets/img1.jpeg'
const Section2 = () => {
  return (
    <section className="section2">
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
            <button>Get in touch</button>
        </div>
    </section>
  );
};

export default Section2;