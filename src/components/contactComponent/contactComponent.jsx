import React, { Component } from 'react'

export class contactComponent extends Component {
  render() {
    return (
        <div className="container">
          <h1>Contact Us</h1>
          {/* <form className="contact-form"> */}
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5"></textarea>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          {/* </form> */}
        </div>
      );
  }
}

export default contactComponent