import React, { useState } from "react";
export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setResponseMessage({ text: "✅ Feedback submitted successfully!", type: "success" });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setResponseMessage({ text: "❌ Failed to submit feedback.", type: "error" });
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setResponseMessage({ text: "⚠️ Error connecting to the server.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-3 mb-5">
      <h2 className="text-center mb-4">Submit Feedback</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {responseMessage.text && (
        <div className={`alert mt-3 ${responseMessage.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
          {responseMessage.text}
        </div>
      )}
    </div>
  );
}
