import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contactusform.css'

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    //validate the form fields
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setStatus("Form submitted successfully");
    setName("");
    setEmail("");
    setMessage("");
    toast("Thanks for the message, we'll get back within 24 hours!", { position: 'top-center', theme: 'dark' });
  }

  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!message) {
      errors.message = "Message is required";
    }
    return errors;
  }

  return (
    <div className="container mt-500">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="Images/Images/contactus.gif" className="d-block w-100" alt="Carousal3" />
        </div>
      </div>
      <br />

      <form onSubmit={handleSubmit}>
        <label><i className="fa-solid fa-user"></i> Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        {errors.name && <p className="error">{errors.name}</p>}
        <label><i className="fa-solid fa-at"></i> Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        {errors.email && <p className="error">{errors.email}</p>}
        <label><i className="fa-solid fa-comments"></i> Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        {errors.message && <p className="error">{errors.message}</p>}
        <button type="submit">Submit</button>
        <p>{status}</p>
      </form>
      <ToastContainer />
    </div>
  )
}

export default ContactUsForm;







