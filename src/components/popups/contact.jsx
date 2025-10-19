import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import submitContact from "../../utils/contactHandler";

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
      <h2 className="overlay__child">Contact Us</h2>
      <form className="overlay__child" onSubmit={handleSubmit}>
        <label className="overlay__child">Name</label>
        {/* data-testid are kept for tests to target inputs reliably */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          data-testid="name-input"
          className="overlay__child"
        />
        <label className="overlay__child">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          data-testid="email-input"
          className="overlay__child"
        />
        <label className="overlay__child">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          data-testid="message-input"
          className="overlay__child"
        ></textarea>
        <button
          type="submit"
          data-testid="submit-btn"
          className="overlay__child"
        >
          Send
        </button>
        <button
          type="button"
          onClick={onClose}
          data-testid="close-btn"
          className="overlay__child"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
