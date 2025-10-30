import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import submitContact from "../../utils/contactHandler";

import "./contact.css";

const ContactForm = ({ onClose }) => {
  // Use FormContext to read and update the shared form state.
  // formData shape: { name: string, email: string, message: string }
  const { formData, setFormData } = useContext(FormContext);
  const initial = { name: "", email: "", message: "" };

  // resetForm is a small helper so consumers don't need to remember the initial shape.
  const resetForm = () => setFormData(initial);
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
      await submitContact(formData); // todo
      // On success, clear the form and close the popup.
      resetForm();
      onClose();
    } catch (err) {
      // Show some error to the user here in a real app.
      console.error("Failed to send contact message:", err);
    }
  };
  return (
    <div className="contact-form overlay__child" data-testid="contact-form">
      <form className="overlay__child" onSubmit={handleSubmit}>
      <h2 className="overlay__child contact-form__header">Contact Me</h2>
        <img
          src="Images/Icons/contact Icons/Phone Icon.png"
          alt="name icon"
          className="overlay__child contact-form__name-label"
        ></img>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          data-testid="name-input"
          className="overlay__child contact-form__name-input"
          placeholder="(optional phone number)"
        />

        <img
          src="Images/Icons/contact Icons/Gmail Icon.png"
          className="overlay__child contact-form__email-label"
          alt="email icon"
        />
        <input
          required
          placeholder="Someone@gmail.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          data-testid="email-input"
          className="overlay__child contact-form__email-input"
        />

        <img
          src="Images/Icons/contact Icons/Vector.png"
          className="overlay__child contact-form__message-label"
          alt="message icon"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          data-testid="message-input"
          className="overlay__child contact-form__message-input"
          alt="Message input box"
          placeholder="Your message here..."
        />

        <button
          type="submit"
          data-testid="submit-btn"
          className="overlay__child btn--primary contact-form__submit-btn"
        >
          Send
        </button>

        <img
          type="button"
          onClick={onClose}
          data-testid="close-btn"
          className="overlay__child contact-form__close-btn"
          alt="Close button"
          src="Images/Buttons/X Close btn.png"
        />
      </form>
    </div>
  );
};

export default ContactForm;
