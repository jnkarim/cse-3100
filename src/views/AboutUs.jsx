import React from "react";


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="intro">
        Welcome to our website! We are a passionate team committed to delivering
        high-quality products and services. Our mission is to create value for our
        customers through innovation, reliability, and customer-centric solutions.
      </p>
      
      <div className="section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses with cutting-edge solutions that
          help them grow and thrive in a fast-paced digital world. We are dedicated
          to continuous improvement, and we believe in creating lasting relationships
          with our clients based on trust and results.
        </p>
      </div>
      
      <div className="section">
        <h2>Our Team</h2>
        <p>
          Our team consists of talented professionals from diverse backgrounds
          who bring unique perspectives and expertise to the table. We collaborate
          to develop innovative solutions that address real-world challenges.
        </p>
      </div>

      <div className="section">
        <h2>Contact Us</h2>
        <p>
          If you'd like to know more about us or our services, feel free to
          reach out to us through our <a href="/contact-us">Contact Us</a> page. We'd
          love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
