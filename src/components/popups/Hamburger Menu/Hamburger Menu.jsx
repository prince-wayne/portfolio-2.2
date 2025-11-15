// this wouldn't be the btn, this is the actual menu that shows, for us to use the btn, we much adjust overlay.jsx to accept an image.
import "./Hamburger Menu.css";

export default function HamburgerMenu() {
  return (
    <>
      <div className="hamburger-menu__container overlay__child">
        <div className="hamburger-menu__item overlay__child">
          <img
            className="overlay__child"
            src="/Images/Icons/Hamburger Icons/Contact.png"
            alt="Contact Icon link, opens our contact page for more information."
          />
          <h3 className="overlay__child"> Contact</h3>
        </div>

        <div className="hamburger-menu__item overlay__child">
          <img
            className="overlay__child"
            src="Images/Icons/Hamburger Icons/Projects.png"
            alt=""
          />
          <h3 className="overlay__child">Projects</h3>
        </div>

        <div className="hamburger-menu__item overlay__child">
          <img
            className="overlay__child"
            src="Images/Icons/Hamburger Icons/About.png"
            alt=""
          />
          <h3 className="overlay__child">About</h3>
        </div>
        <div className="hamburger-menu__item overlay__child">
          <img
            className="overlay__child"
            src="Images/Icons/Hamburger Icons/Home.png"
            alt=""
          />
          <h3 className="overlay__child">Home</h3>
        </div>
      </div>
    </>
  );
}
