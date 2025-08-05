import React from 'react'

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>
          Name
          <input type="text" name="name" required/>
        </label>
        <label>
          Email
          <input type="email" name="email" required/>
        </label>
        <label>
          Message
          <textarea name="message" required/>
        </label>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Email: info@prestigepedicraft.com</p>
        <p>Instagram: @prestigepedicraft</p>
      </div>
    </section>
  )
}

export default Contact
