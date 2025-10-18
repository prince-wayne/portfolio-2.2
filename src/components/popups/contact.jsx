import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import submitContact from '../../utils/contactHandler';

const ContactForm = ({ onClose }) => {
  // Use FormContext to read and update the shared form state.
  // formData shape: { name: string, email: string, message: string }
  const { formData, setFormData, resetForm } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Merge the changed field into the shared formData object.
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Delegate network / submission logic to a small helper to keep the component focused on UI.
    try {
      // submitContact returns parsed JSON or throws on network/error status.
      await submitContact(formData);
      // On success, clear the form and close the popup.
      resetForm();
      onClose();
    } catch (err) {
      // In production you might show a toast or inline error message.
      onClose();

      console.error('Failed to send contact message:', err);
    }
  };

  return (
    <div className="contact-form" data-testid="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        {/* data-testid are kept for tests to target inputs reliably */}
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