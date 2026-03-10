import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import mainImage from "../main.jpg";

function Home() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
  }, []);

  return (
    <section className="home">
      <div className="home-content" ref={contentRef}>
        <h1>Hi, It's <span>Alex</span></h1>
        <h3 className="typing-text">I'm a <span></span></h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus labore
          dolores esse. Odit similique doloribus tenetur doloremque.
        </p>

        <button className="btn">Hire me</button>

        <div className="social-icons">
          <button><FaLinkedin /></button>
          <button><FaGithub /></button>
          <button><FaXTwitter /></button>
          <button><FaInstagram /></button>
        </div>
      </div>

      <div className="home-img" ref={imageRef}>
        <img src={mainImage} alt="profile" />
      </div>
    </section>
  );
}

export default Home;
