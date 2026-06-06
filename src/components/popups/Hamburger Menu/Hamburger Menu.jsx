import "./Hamburger Menu.css";
import { Link } from "react-router-dom";
// this wouldn't be the btn, this is the actual menu that shows, for us to use the btn, we much adjust overlay.jsx to accept an image.

// const ContactForm = ({ onClose }) => {
const HamburgerMenu = ({onClose}) => {

  return (
    <>
      <div className="hamburger-menu__container overlay__child" >
        <Link to="/contact" onClick={onClose}>
          <div className="hamburger-menu__item overlay__child">
            <img
              className="overlay__child"
              src="/Images/Icons/Hamburger Icons/Contact.png"
              alt="Contact Icon Link, opens our contact page for more information."
            />
            <h3 className="overlay__child"> Contact</h3>
          </div>
        </Link>

        <Link to="/projects" onClick={onClose}>
          <div className="hamburger-menu__item overlay__child">
            <img
              className="overlay__child"
              src="Images/Icons/Hamburger Icons/Projects.png"
              alt=""
            />
            <h3 className="overlay__child">Projects</h3>
          </div>
        </Link>

        <Link to="/about" onClick={onClose}>
          <div className="hamburger-menu__item overlay__child">
            <img
              className="overlay__child"
              src="Images/Icons/Hamburger Icons/About.png"
              alt=""
            />
            <h3 className="overlay__child">About</h3>
          </div>
        </Link>
        <Link to="/" onClick={onClose}>
          <div className="hamburger-menu__item overlay__child">
            <img
              className="overlay__child"
              src="Images/Icons/Hamburger Icons/Home.png"
              alt=""
            />
            <h3 className="overlay__child">Home</h3>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HamburgerMenu;