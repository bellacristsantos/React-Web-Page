import React from 'react';

const Contact = () => (
  <main>
    <header>
      <div id="header"></div>
      <div className="header-form-content">
        {/* <h1>Message Form</h1> */}
        <p>
          Hey there!
          <br />
          <br />
          We value your input and want to make your experience even better.
          <br />
          <br />
          Please take a moment to share your thoughts with us through this form.
          <br />
          <br />
          Your opinion is essential in helping us improve.
          <br />
          <br />
          Thank you for being a part of our journey!
          <br />
          <br />
          Cheers,
        </p>
      </div>
    </header>
    <section>
      <div>
        <form id="messageForm">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <br />
            <br />
          </div>

          <div className="input-container">
            <label htmlFor="message">Your Message</label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="32"
              rows="4"
              placeholder="Your opinion matters! Tell us what you think..."
              required
            ></textarea>
            <br />
          </div>

          <div className="form-button">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </section>
  </main>
);

export default Contact;
