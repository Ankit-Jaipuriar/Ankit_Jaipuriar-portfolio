import React, { useState } from "react";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import { FaStaylinked } from "react-icons/fa";
import "./about.css";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
import cloud from "../../assets/cloud.png";
import hkr from "../../assets/hkr.png";
import cert3 from "../../assets/cert3.png"; // Replace with actual cert image
import cert4 from "../../assets/cert4.png"; // Replace with actual cert image
import leetLogo from "../../assets/leetcode.png"; // Add logo to assets
import chefLogo from "../../assets/codechef.png"; // Add logo to assets
import hackLogo from "../../assets/hackr.png"; // Add logo to assets
import codfLogo from "../../assets/codf.png"; // Add logo to assets

const About = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [showAllProfiles, setShowAllProfiles] = useState(false); // NEW

  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <ul className="info__list grid">
              <Info />
            </ul>
            <a
              href="https://www.linkedin.com/in/ankit-kumar-jaipuriar/"
              className="button"
            >
              Get in touch
              <span className="button__icon">
                <FaStaylinked />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      {/* Dashboard Section */}
      <section className="dashboard">
  <h3 className="section__subtitle subtitle__center">Coding Dashboard</h3>
  <div className="dashboard__cards grid">
    <div className="dashboard__card leetcode">
      <img src={leetLogo} alt="LeetCode" className="dashboard__logo" />
      <h4>LeetCode</h4>
      <p>Solved: 390+ problems</p>
      <a href="https://leetcode.com/u/Ankit_Jaipuriar/" target="_blank" rel="noreferrer">View Profile</a>
    </div>
    <div className="dashboard__card codechef">
      <img src={chefLogo} alt="CodeChef" className="dashboard__logo" />
      <h4>CodeChef</h4>
      <p>2★ | Max Rating: 1449</p>
      <a href="https://www.codechef.com/users/ankitjaipuriar" target="_blank" rel="noreferrer">View Profile</a>
    </div>

    {showAllProfiles && (
      <>
        <div className="dashboard__card">
          <img src={hackLogo} alt="HackerRank" className="dashboard__logo" />
          <h4>HackerRank</h4>
          <p>5★ in Problem Solving</p>
          <a href="https://www.hackerrank.com/profile/Ankit_Jaipuriar" target="_blank" rel="noreferrer">View Profile</a>
        </div>
        <div className="dashboard__card">
          <img src={codfLogo} alt="Codeforces" className="dashboard__logo" />
          <h4>Codeforces</h4>
          <p>Max.ratings : 1020</p>
          <a href="https://codeforces.com/profile/ankit_jaipuriar" target="_blank" rel="noreferrer">View Profile</a>
        </div>
      </>
    )}
  </div>

  <div className="cert__toggle">
    <button onClick={() => setShowAllProfiles(!showAllProfiles)} className="button">
      {showAllProfiles ? "View Less" : "View More"}
    </button>
  </div>
</section>

      <br></br>

      {/* Certifications Section */}
      <section className="certifications">
        <h3 className="section__subtitle subtitle__center">Certifications</h3>
        <div className="certifications__container grid">
          <div className="cert__card">
            <img src={cloud} alt="Certificate 1" />
            <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S157020042504430442" target="_blank" rel="noreferrer">View Certificate</a>
          </div>
          <div className="cert__card">
            <img src={hkr} alt="Certificate 2" />
            <a href="https://www.hackerrank.com/certificates/fc7c3808361c" target="_blank" rel="noreferrer">View Certificate</a>
          </div>
          {showAllCerts && (
            <>
              <div className="cert__card">
                <img src={cert3} alt="Certificate 3" />
                <a href="https://www.coursera.org/account/accomplishments/verify/GEG2LST7DTEG" target="_blank" rel="noreferrer">View Certificate</a>
              </div>
              <div className="cert__card">
                <img src={cert4} alt="Certificate 4" />
                <a href="https://www.coursera.org/account/accomplishments/verify/RUV9GWKXAKVF" target="_blank" rel="noreferrer">View Certificate</a>
              </div>
            </>
          )}
        </div>
        <div className="cert__toggle">
          <button onClick={() => setShowAllCerts(!showAllCerts)} className="button">
            {showAllCerts ? "View Less" : "View More"}
          </button>
        </div>
      </section>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

<section className="resume">
  <h3 className="section__subtitle subtitle__center">
    Education
  </h3>
  <div className="resume__container grid">
    <div className="resume__data">
      {resume.map((val) => {
        if (val.category === "education") {
          return <ResumeItem key={val.id} {...val} />;
        }
        return null;
      })}
    </div>
  </div>
</section>
</main>

         
  );
};

export default About;
