import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styling/home.css";
import logo from "../assets/jpslogo.png";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: logo,
  iconSize: [45, 45],
  iconAnchor: [22, 94], 
  popupAnchor: [-3, -76] 
});

function Home() {
  const getCurrentMonthForCalendly = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    return `${year}-${month}`;
  };

  const handleStandardMembershipClick = () => {
    window.open("https://pay.gocardless.com/billing/static/collect-customer-details?id=BRF001K6SZBKW6JH7FN83H664BY54A4S&initial=%2Fcollect-customer-details", "_blank");
  };

  const handleNhsMembershipClick = () => {
    window.open("https://pay.gocardless.com/billing/static/collect-customer-details?id=BRF001K6T1DYWN37HQ2H3PYJ8ENT75MK&initial=%2Fcollect-customer-details", "_blank");
  };

  const handlePlatinumMembershipClick = () => {
    window.open("https://pay.gocardless.com/billing/static/collect-customer-details?id=BRF001K6T2XBWTDEBP9D60W579CRZ6TW&initial=%2Fcollect-customer-details", "_blank");
  };

  const handleOffshoreMembershipClick = () => {
    window.open("https://pay.gocardless.com/billing/static/collect-customer-details?id=BRF001K6T3R3CE97K8CQNEVM6TXG0Q7H&initial=%2Fcollect-customer-details", "_blank");
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

      <section className="MembershipOptions">
        <h1>Looking to join us?</h1>
        <button className="standard-membership" onClick={handleStandardMembershipClick}>Standard membership £35 per month</button>
        <button className="nhs-membership" onClick={handleNhsMembershipClick}>NHS/blue light/armed forces £30 per month</button>
        <button className="platinum-membership" onClick={handlePlatinumMembershipClick}>Platinum 60+ £30 per month</button>
        <button className="offshore-membership" onClick={handleOffshoreMembershipClick}>Offshore £275 yearly</button>
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
        <MapContainer
          center={[55.85477382909784, -4.023143702544617]} // Coordinates for Coatbridge
          zoom={20}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[55.85477382909784, -4.023143702544617]} icon={customIcon}>
            <Popup>
              JPS Gym <br /> Linburn Business Park Unit 8 Brown Street Coatbridge ML5 4AS
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </main>
  );
}

export default Home;