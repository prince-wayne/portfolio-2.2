import { useState } from 'react';
import ContactForm from './contact';

const Overlay = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  const handleClickOutside = (event) => {
    if (event.target.className === 'overlay') {
      closeOverlay();
    }
  };

  return (
    <div>
      <button onClick={openOverlay} data-testid="open-overlay-btn">Contact Us</button>
      {isOpen && (
        <div className="overlay" onClick={handleClickOutside} data-testid="overlay">
          {children}
        </div>
      )}
    </div>
  );
};

export default Overlay;