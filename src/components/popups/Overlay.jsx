import React, { useEffect, useState } from "react";
import "./Overlay.css";
import "./Hamburger Menu/Hamburger Menu.jsx";

const Overlay = ({ children, onClose, header, type, source }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);
  const ISIMAGETYPE = type === "Image";

  const handleClickOutside = (event) => {
    const CLASSLIST = event.target.classList;
    if (!CLASSLIST.contains("overlay__child")) {
      closeOverlay();
    }
  };

  // Listen for Escape key so keyboard users can close the popup.
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen) closeOverlay();
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {ISIMAGETYPE ? (
        <img
          src={source}
          alt="Overlay Background"
          className="hamburger--menu__Image"
          onClick={openOverlay}
        />
      ) : (
        <button
          onClick={openOverlay}
          data-testid="open-overlay-btn"
          className="btn--primary"
        >
          {header}
        </button>
      )}
      {isOpen && (
        <div
          className="overlay" /* not a true child but prevents close if pressed */
          onClick={handleClickOutside}
          role="dialog"
          aria-modal="true"
          data-testid="overlay"
        >
          {/* Clicking inside the content should not close the popup, so stop propagation. */}
          <div
            className="overlay-content overlay__child"
            onClick={(e) => e.stopPropagation()}
          >
            {React.cloneElement(children, {
              onClose: closeOverlay,
              onClick: (e) => console.log(e),
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Overlay;
