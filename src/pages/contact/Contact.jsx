// import React from "react";
// import {
//   FaEnvelopeOpen,
//   FaPhoneSquareAlt,
//   FaGithub,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";

// import { FiSend } from "react-icons/fi";
// import "./contact.css";

// const Contact = () => {
//   return (
//     <section className="contact section">
//       <h2 className="section__title">
//         Get In <span>Touch</span>
//       </h2>

//       <div className="contact__container container grid">
//         <div className="contact__data">
//           <h3 className="contact__title">Don't be Shy!</h3>

//           <p className="contact__description">
//             Feel free to get in touch with me. I am always open to discussing
//             new projects, creative ideas or opportunities to be part of your
//             visions.
//           </p>
//           <div className="contact__info">
//             <div className="info__item">
//               <FaEnvelopeOpen className="info__icon" />

//               <div>
//                 <span className="info__title">Mail me</span>
//                 <h4 className="info__desc">ankitkumarjaipuriar@gmail.com</h4>
//               </div>
//             </div>
//             <div className="info__item">
//               <FaPhoneSquareAlt className="info__icon" />

//               <div>
//                 <span className="info__title">Contact</span>
//                 <h4 className="info__desc">700xxxxx27</h4>
//               </div>
//             </div>
//           </div>
//           <div className="contact__socials">
//             <a
//               href="https://github.com/Ankit-Jaipuriar"
//               className="contact__social-link"
//             >
//               <FaGithub />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/ankit-kumar-jaipuriar/"
//               className="contact__social-link"
//             >
//               <FaLinkedinIn />
//             </a>

//             <a
//               href="https://www.instagram.com/"
//               className="contact__social-link"
//             >
//               <FaInstagram />
//             </a>
//           </div>
//         </div>

//         <form className="contact__form">
//           <div className="form__input-group">
//             <div className="form__input-div">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="form__control"
//               />
//             </div>
//             <div className="form__input-div">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="form__control"
//               />
//             </div>
//             <div className="form__input-div">
//               <input
//                 type="text"
//                 placeholder="Your Subject"
//                 className="form__control"
//               />
//             </div>
//           </div>
//           <div className="form__input-div">
//             <textarea
//               placeholder="Your Message"
//               className="form__control textarea"
//             ></textarea>
//           </div>

//           <button className="button">
//             Send Message
//             <span className="button___icon contact__button-icon">
//               <FiSend />
//             </span>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ffivbwh",   // 🔁 Replace with your EmailJS service ID
        "template_k98msui",  // 🔁 Replace with your EmailJS template ID
        form.current,
        "aEptSj5Rq6f5YbRAo"    // 🔁 Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">ankitkumarjaipuriar@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Contact</span>
                <h4 className="info__desc">700xxxxx27</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://github.com/Ankit-Jaipuriar" className="contact__social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ankit-kumar-jaipuriar/" className="contact__social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/" className="contact__social-link">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* 📧 EmailJS Form */}
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="form__control"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="form__control"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form__control textarea"
              required
            ></textarea>
          </div>

          <button type="submit" className="button">
            Send Message
            <span className="button___icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
