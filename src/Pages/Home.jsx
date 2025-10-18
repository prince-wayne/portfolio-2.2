import React, { Suspense, lazy } from "react";
// import ReactDOM from "react-dom/client";
// import reportWebVitals from "../reportWebVitals.js";

// Styles
import "src/Styles/Main.css"; // Global styles
import "src/Styles/Home.css"; // Home page specific styles

// Components
// import SkillGroupsInline from "../components/Icons Static/skill groups inline.jsx";
import SkillGroupsInline from "../../src/components/Icons Static/skill groups inline.jsx";
import ProjectDisplay from "../components/project display/project-display.jsx";
import Socials from "../components/Icons Static/social icons.jsx";

import Overlay from '../components/popups/Overlay.jsx';
import ContactForm from '../components/popups/contact.jsx';

// path issue, logging for testing & resolution

export default function Home() {
  return (
    <>
      {/* to do */}
      {/* 
          background image - done
          Call to action buttons - a basic overlay box with a header, short paragraph, and two buttons.

       */}
      <section
        id="home-hero-section"
        className="hero-section hero-section__background"
        data-testid="home-hero-section"
      >
        <div className="hero-section__overlay">
          <h1>Turning Ideas into Interactive Experiences.</h1>
          <p>
            A Front-End Developer specializing in building responsive,
            userfocused websites. Let’s createsomething amazing together.
            {/* This hero section doesn't flow correctly double check the design file for a mistake of headers */}
          </p>
          <div id="hero-section__overlay-btns">
            <button>
              {/* takes us to projects page */}
              Veiw My Work
            </button>
            <button> {/* opens our popup display */}Contact Me</button>
          </div>
        </div>
        <div className="hero-section__fade-out"></div>
      </section>

      <section
        id="introduction"
        data-testid="introduction"
        className="introduction-section"
      >
        <img
          src={`/Images/Home Page/Intro - mobile.png`}
          alt="A wireframe style illustration of a website."
        />
        <h2>Hi, I'm Tyshawn, a Passionate Front-End developer</h2>
        <p>
          I craft clean, responsive, and dynamic websitesthat bring ideas to
          life. With expertise in HTML,CSS, JavaScript, and React, I focus on
          creatingseamless user experiences and visually strikinginterfaces.
          Whether you're a business looking fora website or an employer seeking
          talent, I’m here to help build your vision.
        </p>
      </section>

      <section id="Skills" data-testid="Skills">
        {" "}
        {/* if this is a flex it will allow the mobile and desktop to work without change to structure */}
        <h2>Skills and Expertise</h2>
        {/* <skillGroups isGrid={false} /> */}
        <SkillGroupsInline />
        <p>
          I bring a versatile skill set to front-end development, combining
          technical expertise with problem-solving and adaptability. Proficient
          in core web technologies like JavaScript (green), I am actively
          expanding my knowledge in React (yellow) to build dynamic applications
          and occasionally practicing Bash scripting (grey) to enhance my
          workflow. My approach prioritizes responsive design, accessibility,
          and engaging user interfaces, complemented by strong and collaboration
          skills that enable me to adapt to diverse challenges.
        </p>
      </section>

      <ProjectDisplay data-testid="project-display">
        <h2>Recent Projects & Learning Highlights</h2>
      </ProjectDisplay>

      <section id="contact-section" data-testid="contact-section">
        <h2>Let's Work Together</h2>
        <img src="" alt="" />
        <p>
          Whether you’re interested in hiring me for a full-time position,
          collaborating on a project, or just want to say hi, feel free to reach
          out.
        </p>
        {/* unsure if that's an actual issue above but come/back todo (for marking refence) later */}
        <div
          id="contact-section-social-media-icon-box"
          className="inline-icons" // We will need to come back to this
          data-testid="social-icons" // addional change needed
        >
          <Socials />
        </div>
        <div id="contact-btn">
          {/* to do */}
          {/* contact overlay */}
          
          <Overlay>
            <ContactForm />
          </Overlay>
           
        </div>
      </section>
    </>
  );
}
