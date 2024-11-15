import React from "react";
import '../styling/classes.css';

const GymClasses = () => {
  const classes = [
    {
      name: "Wodfit",
      description: "High-Intensity Interval Training. Burn calories fast!",
      time: "Tuesday & Wednesday, 6:15 PM - 7:00 PM",
      instructor: "Coach Jonathan",
      bookingLink: "https://www.jpsgym.com/booking-calendar/wodfit?referral=service_list_widget",
    },
    {
      name: "Yoga",
      description: "Stretch and unwind with relaxing yoga sessions.",
      time: "Tuesday & Thursday, 6:15 PM - 8:00 PM",
      instructor: "Amanda",
      bookingLink: "https://www.jpsgym.com/booking-calendar/yoga?referral=service_list_widget",
    },
    {
      name: "Strength Training",
      description: "Build muscle and increase strength in this full-body workout.",
      time: "Friday, 5:00 PM - 6:30 PM",
      instructor: "Coach Sam",
      bookingLink: "https://www.jpsgym.com/booking-calendar/strength-training?referral=service_list_widget",
    },
    {
      name: "Ass & Abs",
      description: "Tone and strengthen with a focus on core and lower body.",
      time: "Saturday, 8:00 AM - 9:00 AM",
      instructor: "Chris Landles",
      bookingLink: "https://www.jpsgym.com/booking-calendar/ass-abs?referral=service_list_widget",
    },
    {
      name: "Boxing",
      description: "Learn the fundamentals of boxing and improve your stamina.",
      time: "Sunday, 3:00 PM - 4:30 PM",
      instructor: "Matthew Smillie",
      bookingLink: "https://www.jpsgym.com/booking-calendar/boxing?referral=service_list_widget",
    },
  ];

  return (
    <section className="gym-classes-section">
      <h1>Our Gym Classes</h1>
      <div className="classes-grid">
        {classes.map((gymClass, index) => (
          <div className="class-card" key={index}>
            <h2>{gymClass.name}</h2>
            <p>{gymClass.description}</p>
            <p><strong>Time:</strong> {gymClass.time}</p>
            <p><strong>Instructor:</strong> {gymClass.instructor || "TBA"}</p>
            <a
              href={gymClass.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="booking-button">Book Now</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GymClasses;







