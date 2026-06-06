import Socials from "../components/Icons Static/social icons.jsx";
import ContactForm from "../components/popups/Contact-Form.jsx";

import "src/components/popups/contact.css";
import "src/Styles/Main.css"; // Global styles

export default function Contact() {
  return (
    <>
      <section className="hero-section hero-section-TBSS">
        <img src="Images/Pages/Contact/Contact-Hero.png" alt="" />
        <div className="hero-section__overlay">
          <h1>Let's chat</h1>
          <p>
            Have a project in mind or just want to say hi? I’d love to hear from
            you!
          </p>
        </div>
      </section>
      <section className="contact-section__FLAT" id="contact-section__FLAT">
        <div className="Contact-section-wrapper">
          <h2>Send a Message</h2>
          <ContactForm />
        </div>
      </section>
      <section> 
        <h2>Other Ways to Contact Me</h2>
        <Socials/>
      </section>
    </>
  );
}
