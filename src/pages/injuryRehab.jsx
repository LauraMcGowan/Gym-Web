import React from 'react';
import '../styling/injuryRehab.css';


const MassagePage = () => {

  const getCurrentMonthForCalendly = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Get month in "MM" format
    return `${year}-${month}`;
  };

  const services = [
    {
      title: 'Swedish Massage',
      description: 'A gentle, full-body massage to relax and rejuvenate.',
      duration: '60 minutes',
     
    },
    {
      title: 'Full body',
      description: 'A therapeutic massage focusing on deep muscle layers to relieve tension.',
      duration: '60 minutes',
  
    },
    {
      title: 'Sports Massage',
      description: 'A specialised massage for athletes to improve performance and prevent injury.',
      duration: '60 minutes',
     
    },
    {
        title: 'Back, neck, and shoulders',
        description: 'A specialised massage for athletes to improve performance and prevent injury.',
        duration: '30 minutes',
       
      },
      {
        title: 'Legs',
        description: 'A specialised massage for athletes to improve performance and prevent injury.',
        duration: '30 minutes',
       
      },
  ];

  return (
    <div className="massage-page">
      <header className="massage-header">
        <h1>
        Injury rehabilitation, and deep tissue massage by Amanda</h1>
        <p>Relax, rejuvenate, and unwind with our variety of massage therapies designed for your well-being.</p>
      </header>

      <div className="services-section">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p><strong>Duration:</strong> {service.duration}</p>
              <a
          href={`https://calendly.com/johnpaulpt/15min?month=${getCurrentMonthForCalendly()}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="booking-button">Book Now</button>
        </a>
    
          </div>
        ))}
      </div>
    </div>
  );
};

export default MassagePage;

