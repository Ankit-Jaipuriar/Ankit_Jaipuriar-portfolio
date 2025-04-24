import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Profile from "../../assets/me.jpeg";
import videoFile from "../../assets/videocv.mp4"
import { FaDownload, FaPlay } from "react-icons/fa";
import "./home.css";

const Home = () => {
  const resumeUrl = "https://drive.google.com/file/d/1xqTOyMXs3yfVoedmWyk_C79-GLBSnMoU/view?usp=drive_link";

  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const circleRef = useRef(null);

  const openResumeInNewTab = () => {
    window.open(resumeUrl, "_blank");
  };

  const toggleVideo = () => {
    setShowVideo((prev) => !prev);
  };

  useEffect(() => {
    const video = videoRef.current;
    const circle = circleRef.current;

    if (video && circle) {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;

      const updateProgress = () => {
        const progress = video.currentTime / video.duration;
        const offset = circumference - progress * circumference;
        circle.style.strokeDashoffset = offset;
      };

      video.addEventListener("timeupdate", updateProgress);
      return () => video.removeEventListener("timeupdate", updateProgress);
    }
  }, [showVideo]);

  return (
    <motion.section
      className="home section grid"
      initial="hidden"
      animate="visible"
    >
      {/* Separate Section for Video Text */}
<div className="video-text-section">
  <p className="video-text">Watch My Video CV</p>
</div>

      {/* Floating Video Button */}
      <div className="video-cv-thumbnail" onClick={toggleVideo}>
        <img src={Profile} alt="Video CV" />
        <FaPlay className="video-play-icon" />
      </div>

      {/* Circular Video Player */}
      {showVideo && (
        <div className="video-cv-center-player">
          <div className="circular-video-container">
            <svg className="progress-ring" width="600" height="600">
  <circle
    ref={circleRef}
    className="progress-ring__circle"
    strokeWidth="4"
    fill="transparent"
    r="296"      // 600/2 - 4 (stroke width * 2 margin)
    cx="300"
    cy="300"
  />
</svg>

<video
  ref={videoRef}
  src={videoFile}
  autoPlay
  playsInline
  className="circular-video"
/>

          </div>
        </div>
      )}

      <motion.img src={Profile} alt="" className="home__img" />

      <motion.div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Ankit Kumar Jaipuriar.</span> 
          </h1>
          <h2 className="home__subtitle">
            Passionate about building scalable web applications and exploring cutting-edge technologies.
          </h2>

          <motion.button onClick={openResumeInNewTab} className="button">
            Download Resume{" "}
            <span className="button__icon">
              <FaDownload />
            </span>
          </motion.button>
        </div>
      </motion.div>

      <div className="color__block"></div>
    </motion.section>
  );
};

export default Home;
