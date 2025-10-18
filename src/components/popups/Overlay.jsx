import React, { useEffect, useState} from 'react';
import ContactForm from './contact';


const Overlay = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  const handleClickOutside = (event) => {
    if (event.target.className === 'overlay') {
      closeOverlay();
    }
  };

  // Listen for Escape key so keyboard users can close the popup.
  useEffect(() => {
    const handleKey = (e) => {
      console.log(isOpen);
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div>
      <button onClick={openOverlay} data-testid="open-overlay-btn">Contact Us</button>
      {isOpen && (
        <div
          className="overlay"
          onClick={handleClickOutside}
          role="dialog"
          aria-modal="true"
          data-testid="overlay"
        >
          {/* Clicking inside the content should not close the popup, so stop propagation. */}
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            {React.cloneElement(children, { onClose:  closeOverlay })}

          </div>
        </div>
      )}
    </div>
  );
};

export default Overlay;