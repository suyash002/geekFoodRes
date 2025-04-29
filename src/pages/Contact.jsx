import React from "react";
import { useForm } from "react-hook-form";
import "../css/contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // Clear the form after submission
    fetch("https://formsubmit.co/dd4d01d2da866e7c612ce2e34b608a09", data, {
      method: "POST",
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact GeekFood</h2>
      <p className="intro-text">
        Have questions or feedback? We'd love to hear from you!
      </p>

      <div className="contact-content">
        <form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          // action="https://formsubmit.co/alpha.alphapandey@gmail.com"
          method="POST"
        >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Your Email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            type="text"
            name="message"
            rows="5"
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message..."
          />
          {errors.message && <p className="error">{errors.message.message}</p>}

          <button type="submit">Send Message</button>

          {isSubmitSuccessful && (
            <p className="success">Thanks! We'll get back to you soon.</p>
          )}
        </form>

        <div className="contact-info">
          <h3>Our Info</h3>
          <p>
            <strong>Email:</strong> support@geekfood.com
          </p>
          <p>
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Address:</strong> 42 Dev Street, Code City, 90001
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;