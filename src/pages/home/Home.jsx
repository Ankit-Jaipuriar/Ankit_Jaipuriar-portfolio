// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import Profile from "../../assets/me.jpeg";
// import videoFile from "../../assets/video.mp4";
// import { FaDownload, FaPlay } from "react-icons/fa";
// import "./home.css";

// const Home = () => {
//   const resumeUrl = "https://drive.google.com/file/d/1xqTOyMXs3yfVoedmWyk_C79-GLBSnMoU/view?usp=drive_link";

//   const [showVideo, setShowVideo] = useState(false);
//   const videoRef = useRef(null);
//   const circleRef = useRef(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleKeyDown = () => {
//       if (loading || showVideo) {
//         setShowVideo(false);
//         setLoading(false);
//       }
//     };
  
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [loading, showVideo]);
  

//   const openResumeInNewTab = () => {
//     window.open(resumeUrl, "_blank");
//   };

//   const toggleVideo = () => {
//     if (!loading && !showVideo) {
//       setLoading(true);
//       setShowVideo(true);
//     }
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     const circle = circleRef.current;

//     if (video && circle) {
//       const radius = circle.r.baseVal.value;
//       const circumference = 2 * Math.PI * radius;
//       circle.style.strokeDasharray = `${circumference} ${circumference}`;
//       circle.style.strokeDashoffset = `${circumference}`;

//       const updateProgress = () => {
//         const progress = video.currentTime / video.duration;
//         const offset = circumference - progress * circumference;
//         circle.style.strokeDashoffset = offset;
//       };

//       const handleLoadedData = () => {
//         setLoading(false);
//       };

//       video.addEventListener("timeupdate", updateProgress);
//       video.addEventListener("loadeddata", handleLoadedData);

//       return () => {
//         video.removeEventListener("timeupdate", updateProgress);
//         video.removeEventListener("loadeddata", handleLoadedData);
//       };
//     }
//   }, [showVideo]);

//   return (
//     <motion.section className="home section grid" initial="hidden" animate="visible">
//       {/* Separate Section for Video Text */}
//       <div className="video-text-section">
//         <p className="video-text">Watch My Video CV</p>
//       </div>

//       {/* Floating Video Button */}
//       <div
//         className={`video-cv-thumbnail ${loading || showVideo ? "disabled" : ""}`}
//         onClick={toggleVideo}
//       >
//         <img src={Profile} alt="Video CV" />
//         <FaPlay className="video-play-icon" />
//       </div>

//       {/* Loading or Playing Overlay */}
//       {(loading || showVideo) && (
//         <div className="video-loading-overlay">
//           {loading && (
//             <>
//               <div className="spinner"></div>
//               <p>Loading Video... (Press any key to cancel)</p>
//             </>
//           )}
//         </div>
//       )}

//       {/* Circular Video Player */}
//       {showVideo && (
//         <div className="video-cv-center-player">
//           <div className="circular-video-container">
//             <svg className="progress-ring" width="600" height="600">
//               <circle
//                 ref={circleRef}
//                 className="progress-ring__circle"
//                 strokeWidth="4"
//                 fill="transparent"
//                 r="296"
//                 cx="300"
//                 cy="300"
//               />
//             </svg>

//             <video
//               ref={videoRef}
//               src={videoFile}
//               autoPlay
//               playsInline
//               className="circular-video"
//               onCanPlay={() => setLoading(false)}
//             />
//           </div>
//         </div>
//       )}

//       <motion.img src={Profile} alt="" className="home__img" />

//       <motion.div className="home__content">
//         <div className="home__data">
//           <h1 className="home__title">
//             <span>I'm Ankit Kumar Jaipuriar.</span>
//           </h1>
//           <h2 className="home__subtitle">
//             Passionate about building scalable web applications and exploring cutting-edge technologies.
//           </h2>

//           <motion.button onClick={openResumeInNewTab} className="button">
//             Download Resume{" "}
//             <span className="button__icon">
//               <FaDownload />
//             </span>
//           </motion.button>
//         </div>
//       </motion.div>

//       <div className="color__block"></div>
//     </motion.section>
//   );
// };

// export default Home;

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Profile from "../../assets/me.jpeg";
import videoFile from "../../assets/video.mp4";
import { FaDownload, FaPlay } from "react-icons/fa";
import "./home.css";

const Home = () => {
  const resumeUrl = "https://drive.google.com/file/d/1xqTOyMXs3yfVoedmWyk_C79-GLBSnMoU/view?usp=drive_link";

  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const circleRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = () => {
      if (loading || showVideo) {
        setShowVideo(false);
        setLoading(false);
      }
    };

    const handleTouchStart = () => {
      if (loading || showVideo) {
        setShowVideo(false);
        setLoading(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart); // Add touch event listener

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart); // Clean up touch event listener
    };
  }, [loading, showVideo]);

  const openResumeInNewTab = () => {
    window.open(resumeUrl, "_blank");
  };

  const toggleVideo = () => {
    if (!loading && !showVideo) {
      setLoading(true);
      setShowVideo(true);
    }
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

      const handleLoadedData = () => {
        setLoading(false);
      };

      video.addEventListener("timeupdate", updateProgress);
      video.addEventListener("loadeddata", handleLoadedData);

      return () => {
        video.removeEventListener("timeupdate", updateProgress);
        video.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, [showVideo]);

  return (
    <motion.section className="home section grid" initial="hidden" animate="visible">
      {/* Separate Section for Video Text */}
      <div className="video-text-section">
        <p className="video-text">Watch My Video CV</p>
      </div>

      {/* Floating Video Button */}
      <div
        className={`video-cv-thumbnail ${loading || showVideo ? "disabled" : ""}`}
        onClick={toggleVideo}
      >
        <img src={Profile} alt="Video CV" />
        <FaPlay className="video-play-icon" />
      </div>

      {/* Loading or Playing Overlay */}
      {(loading || showVideo) && (
        <div className="video-loading-overlay">
          {loading && (
            <>
              <div className="spinner"></div>
              <p>Loading Video... (Press any key to cancel)</p>
            </>
          )}
        </div>
      )}

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
                r="296"
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
              onCanPlay={() => setLoading(false)}
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
