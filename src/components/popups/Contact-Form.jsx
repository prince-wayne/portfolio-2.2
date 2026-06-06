import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import submitContact from "../../utils/contactHandler";

// import ""

export default function ContactForm() {
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
      await submitContact(formData);
      window.alert("Message Sent, thank you for your time.");
      resetForm();
    } catch (err) {
      // Show some error to the user here in a real app.
      console.error("Failed to send contact message:", err);
      window.alert("Error in message connection, please try again later");
      // todo
      // set up a way for me to know if there's error here.
    }
  };

  return (
    <>
      <form className="Contact-form" onSubmit={handleSubmit}>
        <img
          src="Images/Icons/contact Icons/icons8-person-25.png"
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
          placeholder="Name please."
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
      </form>
    </>
  );
}
