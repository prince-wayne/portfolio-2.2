import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

const ContactForm = ({ onClose }) => {
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-form" data-testid="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} data-testid="name-input" />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} data-testid="email-input" />
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} data-testid="message-input"></textarea>
        <button type="submit" data-testid="submit-btn">Send</button>
        <button type="button" onClick={onClose} data-testid="close-btn">Close</button>
      </form>
    </div>
  );
};

export default ContactForm;