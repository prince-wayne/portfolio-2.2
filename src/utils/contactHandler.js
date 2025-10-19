// submitContact(formData) handles the network request for the contact form.
// It returns parsed JSON on success and throws on network or server error.
// Caller should catch errors and decide how to surface them to the user.
const submitContact = async (formData) => {
  // Example POST to an API route. Replace '/api/contact' with your endpoint.
  const URL = '/api/contact';
  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Treat non-2xx as errors so callers can catch and handle them cleanly.
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      const err = new Error(`Request failed with status ${res.status}: ${text}`);
      err.status = res.status;
      throw err;
    }

    // Parse response body as JSON and return it to the caller.
    return await res.json();
  } catch (err) {
    // Keep a clear, consistent log message for debugging.
    console.error('submitContact error:', err);
    throw err;
  }
};

export default submitContact;
