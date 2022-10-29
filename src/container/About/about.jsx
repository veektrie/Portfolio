import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description:
      "I am a Web Developer with 2 years of experience, I also have a comprehensive understanding of common programming paradigms and fundamental React principles, such as React components, hooks, and the React lifecycle, and experience in designing and implementing user interfaces (UIs) and UI components using Bootstrap and Tailwind, I have Developed and maintained UIs for web and mobile apps meeting standards for web design, user experience, best practices, and speed.",
    imgUrl: images.about01,
  },
  {
    title: "Backend Development",
    description:
      "A thorough grasp of MySQL and Sanity.io in contributing to generating custom Schemas for specific organizational needs.",
    imgUrl: images.about02,
  },
  {
    title: "Digital Marketing",
    description:
      "I also lend detailed knowledge of Digital Marketing to connect with potential customers using the internet and other forms of digital communication. This includes using tools that are at a company's disposal. These channels include social media, the company's own website, search engine rankings/optimization, email marketing and display advertising.",
    imgUrl: images.about03,
  },
  {
    title: "Web Design",
    description:
      "I have Developed and maintained UIs for web and mobile apps meeting standards for web design, user experience, best practices, and speed.I bring a strong commitment to collaboration and solutions-oriented problem-solving. Use various web design packages to develop custom-crafted,customer-focused websites and designs.",
    imgUrl: images.about04,
  },
];
const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
