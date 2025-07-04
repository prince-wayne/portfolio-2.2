import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import reportWebVitals from "../reportWebVitals.js";

import ProjectDisplay from "../components/project display/project display.jsx"; 
// import SocialIcons from "./src/components/icon groups/Social Icons.jsx";
// import Overlay from '../components/popups/Overlay.jsx';
// import ContactForm from '../components/popups/contact.jsx';

export default function Home() {
  return (
    <>

      <section id="home-hero-section" className="hero-section" data-testid="home-hero-section">
        {/* <img /> */}
        {/* background image could just use the css property or could make the overlay absolute. */}
        <div id="hero-section-overlay" className="overlay">
          <h1>Turning Ideas into Interactive Experiences.</h1>
          <p>
            A Front-End Developer specializing in building responsive,
            userfocused websites. Let’s createsomething amazing together.
            {/* This hero section doesn't flow correctly double check the design file for a mistake of headers */}
          </p>
          <div id="hero-section-overlay-btns">
            <button>
              {" "}
              {/* this is a cta buttonn but I be saying cat a lot. */}
              Veiw My Work
            </button>
            <button>Contact Me</button>
          </div>
        </div>
      </section>

      <section id="introduction" data-testid="introduction">
        <img src={null} alt="" />
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
        <h2>Skills and Expertise</h2>
        <p>
          Here are the technologies and tools I use to create functional and
          engaging websites:
        </p>
        {/* 
        <skillGroups isGrid={false} />
         */}

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
        <div
          id="contact-section-social-media-icon-box"
          className="inline-icons"
          data-testid="social-icons"
        >
          {/* <SocialIcons /> */}
        </div>
        <div id="contact-btn">
          {/* contact overlay */}
          {/* 
          <Overlay>
            <ContactForm />
          </Overlay>
            */}
        </div>

      </section>
    </>
  );
}
