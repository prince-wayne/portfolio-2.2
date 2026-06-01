import ProjectDisplay from "../components/project display/project-display.jsx";
import SkillIconGrid from "../components/icon groups/Skill Icon Grid.jsx";
import ContactForm from "../components/popups/contact.jsx";
import Overlay from "../components/popups/Overlay.jsx";

import "src/Styles/Main.css";
import "src/Styles/Projects.css";

export default function Projects() {
  return (
    <>
      {/* hero section */}
      <div className="hero-section">
        <div className="hero-section__overlay">
          <h1>My Work</h1>
          <p>
            Here are some of the projects I've worked on, showcasing my skills
            in front-end development and responsive design.
          </p>
        </div>
        <img
          className="projects--hero__image"
          src="/Images/Projects/Projects page Image Desktop.png"
          alt="Projects hero"
        />
      </div>
      {/* tools that power my work */}
      <section className="skills-section">
        <h2>Tools That Power My Work</h2>
        <SkillIconGrid />
        <p>
          These are the technologies and tools I rely on to create seamless,
          responsive, and dynamic user experiences. They form the foundation of
          everything you see in my portfolio.
        </p>
      </section>
      {/* add the filters to these later, just the selection value */}
      <section className="project-display-section__featured">
        <h2>Featured Project</h2>
        <ProjectDisplay />
      </section>
      <section className="project-display-section projects-display__study">
        <h2>Study & Learning Highlights</h2>
        <ProjectDisplay />
      </section>
      <section className="project-display-section projects-display__community">
        <h2>Community Projects</h2>
        <ProjectDisplay />
      </section>
      <section className="project-display-section projects-display__personal">
        <h2>Personal Projects</h2>
        <ProjectDisplay />
      </section>

      {/* contact section */}
            <section className="contact-section" data-testid="contact-section">
        <h2> 
            Have an Idea? Let’s Bring It to Life.
        </h2>
        <img
          src="/Images/Projects/Projects contact image.png"
          alt=""
          className="section-image"
        />
        <p>
          Whether you’re ready to start something new or just curious about my work, I’d love to hear from you. Let’s take your ideas and turn them into something amazing.
        </p>
        {/* unsure if that's an actual issue above but come/back todo (for marking refence) later */}
        <div
          id="contact-section-social-media-icon-box"
          className="inline-icons" // We will need to come back to this
          data-testid="social-icons" // addional change needed
        >
        </div>
        <Overlay header="Contact Me" className="contact-overlay">
          <ContactForm />
        </Overlay>
      </section>
      <footer
        id="footer"
        data-testid="footer-section"
        className="footer-section"
      >
        <p>© 2024 Tyshawn Smith. All rights reserved.</p>
      </footer>
    </>
  );
}
