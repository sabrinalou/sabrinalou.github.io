import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="title-header text-center spacing-lg">    
        <h1>For My Valentine</h1>
        <h3>jazzy!</h3>
        <p>you're a shrimpster &lt;3</p>
      </div>

      <div className="accent-bg spacing-md">
        <h2>A Special Message</h2>
        <p>This is a heartfelt message with styled text to express how much you mean to me.</p>
      </div>

      <div className="spacing-md">
        <h4>Why You're Amazing</h4>
        <ul>
          <li>Your smile brightens my day</li>
          <li>Your kindness knows no bounds</li>
          <li>You make every moment special</li>
        </ul>
      </div>

      <div className="spacing-md">
        <h4>Fun Facts About Us</h4>
        <ol>
          <li>We met at the perfect time</li>
          <li>Every day with you is an adventure</li>
          <li>You're my favorite person</li>
        </ol>
      </div>

      <div className="spacing-md">
        <h4>Connect With Me</h4>
        <p>
          <a href="#about">Learn More</a> • 
          <a href="#gallery">See Gallery</a> • 
          <a href="#contact">Get in Touch</a>
        </p>
      </div>

      <div className="spacing-md">
        <h4>Send Me a Message</h4>
        <form>
          <input type="text" placeholder="Your Name" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Send Love</button>
        </form>
      </div>

      <div className="spacing-md text-center">
        <p className="text-muted">With all my love, always 💕</p>
      </div>
    </div>

  </React.StrictMode>
);