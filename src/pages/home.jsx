import React from "react";
// eslint-disable-next-line no-unused-vars
import home from "../styling/home.css";
import logo from "../assets/jpslogo.png";

function Home() {
  const getCurrentMonthForCalendly = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    return `${year}-${month}`;
  };

  return (
    <main>
      <section className="Welcome">
        &nbsp;
        <img src={logo} className="animated-logo" alt="JPS Gym logo" />
        &nbsp;
        <h1>Welcome to JPSGYM!</h1>
        <p>
          Join JP's, visit for the day, and even invest in our merchandise
          below!
        </p>
      </section>

      <section className="About">
        <h1>About Us</h1>
        <p>
          When JP's opened back in June 2018 for the first time, the mission
          was clear... To inspire, educate, and permanently change the lives
          of everyone who walks in its doors. Not only did we want to
          provide the members with a gym that had the best equipment from
          companies like Atlantis, Cybex, Nautilus, Life Fitness, Prime,
          Custom Gym Kit, etc., but also have a team of skilled, expert
          coaches on hand to offer the care and support they truly deserve.
          Unlike most commercial gyms, our bespoke kit and layout are designed
          to match the needs and body mechanics of everyone who walks through
          the door, and whether you're a beginner or an advanced athlete,
          we've got you covered! The goal for 2025 is to be Scotland's best
          specialized facility! The atmosphere is relaxed, friendly, and
          feels like a home away from home, just like JP himself intended.
          Here we have a passion for fitness, strive for excellence, and
          promise you'll not find a more diverse, welcoming gym around. This
          is your life, our passion, let's share it together.
        </p>
        <h2>Opening Hours</h2>
        <ul>
          24/7 all day, every day (unstaffed) Staffed hours:
          <ul>
            <li>Monday to Friday: 9am-7pm</li>
            <li>Saturday: 9am-4pm</li>
            <li>Sunday: 12-3pm</li>
          </ul>
        </ul>
      </section>

      <section className="Contact">
        <h1>Get in Touch</h1>
        <p>Please feel free to reach out to us with any questions or comments!</p>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
            required
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </section>

      <section className="Booking">
      &nbsp;
        <h2>To book a gym tour</h2>
        &nbsp;
        <a
          href={`https://calendly.com/johnpaulpt/15min?month=${getCurrentMonthForCalendly()}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="booking-button">Book Now</button>
        </a>
      </section>

      <section className="Location">
        <h1>Where to Find Us</h1>
        <p>
          Linburn Business Park Unit 8 Brown Street Coatbridge ML5 4AS ​
          <br />
          Email: support@jpsgym.co.uk
          <br />
          Phone: 07817317301
        </p>
      </section>
    </main>
  );
}

export default Home;
