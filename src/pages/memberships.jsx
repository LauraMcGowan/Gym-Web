import React, { useState } from 'react';
import '../styling/memberships.css'

const MembershipCard = ({ title, price, features, highlighted, onJoin }) => {
  return (
    <div className={`card £{highlighted ? 'highlighted' : ''}`}>
      <h3 className="card-title">{title}</h3>
      <p className="price">£{price}/month</p>
      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span className="checkmark">✓</span> {feature}
          </li>
        ))}
      </ul>
      <button className="join-button" onClick={() => onJoin(title)}>
        Join {title}
      </button>
    </div>
  );
};

const Memberships = () => {
  const [joinedPlan, setJoinedPlan] = useState(null);

  const plans = [
    {
      title: "NHS/Armed forces",
      price: 30.00,
      features: [
       "Access to all gym equipment",
       "Access to all group classes"
      ]
    },
    {
      title: "Standard Membership",
      price: 35.00,
      features: [
        "Access to all gym equipment",
        "Access to all group classes"
      ],
      highlighted: true
    },
    {
        title: "Platinum Plus 60+",
        price: 30.00,
        features: [
         "Access to all gym equipment",
         "Access to all group classes"
        ]
      },
    {
      title: "Offshore Yearly Membership",
      price: 275.00,
      features: [
       "Access to all gym equipment",
        "Access to all group classes"
      ]
    }
  ];

  const handleJoin = (planTitle) => {
    setJoinedPlan(planTitle);
    setTimeout(() => setJoinedPlan(null), 3000);
  };

  return (
    <div className="container">
      <h2 className="title">Membership Plans</h2>
      <div className="card-container">
        {plans.map((plan, index) => (
          <MembershipCard key={index} {...plan} onJoin={handleJoin} />
        ))}
      </div>
      {joinedPlan && (
        <div className="notification">
          Thank you for joining the {joinedPlan}!
        </div>
      )}
    </div>
  );
};

export default Memberships;
