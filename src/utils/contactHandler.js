import emailjs from "@emailjs/browser";

// submitContact(formData) handles sending form data via EmailJS.
// Returns the EmailJS response object or throws on failure.
const submitContact = async (formData) => {
  const { name, email, message } = formData;

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        message,
      },
      PUBLIC_KEY
    );

    console.log("EmailJS result:", result.text);
    return { success: true, message: "Email sent successfully!" };
  } catch (err) {
    console.error("submitContact error:", err);
    throw new Error("Failed to send email. Please try again later.");
  }
};

export default submitContact;
