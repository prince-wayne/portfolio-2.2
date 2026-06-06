import { Link } from "react-router-dom";

import SkillIconGrid from "../components/icon groups/Skill Icon Grid.jsx";
import Overlay from "../components/popups/Overlay.jsx";
import ContactForm from "../components/popups/contact.jsx";

import "src/Styles/Main.css"; // Global styles
import "src/Styles/About.css"; // Home page specific styles


export default function About() {
  return (
    <>
      <div className="hero-section hero-section-TBSS">
        <div className="hero-section__overlay">
          <h1>Let's get acquainted</h1>
          <p>
            {" "}
            Hi, I’m Tyshawn, a passionate front-end developer with a love for
            crafting clean, functional, and visually engaging user experiences.
            I thrive at the intersection of creativity and technology, always
            pushing to build intuitive designs that leave a lasting
            impression.{" "}
          </p>
        </div>
        <img
          className="about--hero__image"
          src="/Images/Pages/About/About-Hero.png"
          alt="About hero"
          /* Over flow must be clipped for the image to be mobile and desktop without multiple versions */
        />
      </div>

      <section className="about-page-intro">
        <h2> From curiosity to code </h2>
        <img
          src="/Images/Pages/About/About-Intro.png"
          alt="A casual view of a laptop being used with an IDE"
        />

        <div className="about-page-intro__content about-page-intro__content-the-gift">
          <h3>A Gift That Sparked a Journey</h3>
          <p>
            dMy journey into web development began with an unexpected gift—a
            monitor and three broken desktops from my mother and brother. At
            first, I simply wanted to repair the machines to relive my childhood
            gaming experiences. But as I searched online for help, I stumbled
            upon computer science content instead. What started as an attempt to
            fix hardware turned into a fascination with the mechanics of coding.
          </p>
        </div>

        <div className="about-page-intro__content about-page-intro__content-the-basics">
          <h3>Discovering the Basics </h3>
          <p>
            I was in sixth grade when I first dove into JavaScript, HTML, and
            CSS through resources like Khan Academy. While SQL felt too complex
            at the time, I immersed myself in the foundational aspects of
            coding. That year sparked a passion for creating and exploring the
            digital world, even if I didn’t yet know where it could lead.
          </p>
        </div>
        <div className="about-page-intro__content about-page-intro__content-challenges">
          <h3>Challenges Along the Way</h3>
          <p>
            My first attempt at building something was a business application,
            though I couldn’t fully pursue it without an LLC. High school came
            with its own challenges—time and other priorities left me without
            much opportunity to continue learning. However, later on, I found
            new inspiration through coding tutorials on YouTube. By treating
            them like coding challenges—pausing videos and experimenting with
            the code—I rekindled my interest and realized the potential of what
            I could create.
          </p>
        </div>
        <div className="about-page-intro__content about-page-intro__content-drive">
          <h3>The Drive to Build</h3>
          <p>
            What started as a simple desire to fix broken computers has grown
            into a lifelong curiosity about how the digital world works—and how
            I can shape it. Today, that curiosity fuels my exploration of new
            technologies, my problem-solving mindset, and my drive to push the
            boundaries of what I can create as a web developer.
          </p>
        </div>
      </section>

      <section className="SKills-section">
        <h2>What\ I Bring To The Table</h2>
        <SkillIconGrid />
        <h3>Development Skills:</h3>
        <p>
          Proficient in creating responsive, accessible websites and engaging
          interfaces using tools like React, JavaScript, and CSS.
        </p>
        <h3>Problem-Solving:</h3>
        <p>
          Approach challenges methodically, ensuring elegant solutions to
          complex issues.
        </p>
        <h3>Adaptability</h3>
        <p>
          Open to learning new tools and frameworks to meet project demands.
        </p>
      </section>

      <section className="beyond">
        <h2>Beyond The Code</h2>
        <img src="Images/Pages/About/Beyond the Code.png" alt="A game of chess" />
        <p>
          There’s more to me than just coding! When I’m not deep into
          development, you can often find me playing chess, a game I enjoy both
          casually and competitively. It’s a great way to exercise strategic
          thinking and stay sharp.
        </p>
        <p>
          I’m also a fan of role-playing games and permanent-death type
          games—the challenge and immersion they offer keep me hooked. These
          hobbies not only provide entertainment but also inspire the way I
          approach problem-solving and creativity in my projects.
        </p>
        <p>
          Looking ahead, one of my biggest personal goals is to own a business
          that generates passive income. I envision it as something rooted in
          technology, perhaps even software development, where I can combine my
          skills and entrepreneurial spirit to make a lasting impact.
        </p>
      </section>

      <section className="about-contact">
        <h2>Ready to Connect?</h2>
        <img src="Images/Pages/About/About-Contact.png" alt="About contact" />
        <p>
          If you’re ready to take the next step, I’d love to hear from you! But
          if you’d like to get a closer look at what I’ve accomplished first,
          feel free to explore my{" "}
          <Link to="/projects" className="Inline-link">
            projects
          </Link>{" "}
          page. It’s the perfect way to see how our passion for web development
          translates into real results.
        </p>
        <Overlay header="Contact Me" className="contact-overlay">
          <ContactForm />
        </Overlay>
      </section>
    </>
  );
}

/* 




*/
