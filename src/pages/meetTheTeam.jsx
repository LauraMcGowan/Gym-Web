import React from 'react';
import matthew from "../assets/matthew.png";
import tony from "../assets/tony.png";
import chris from "../assets/chris.png";
import nadia from "../assets/nadia.png";
import jonathan from "../assets/jonathan.png";
import bex from "../assets/bex.png";
import derek from "../assets/derek.png";
import '../styling/meetTheTeam.css';

const teamMembers = [
  { name: 'Matthew', role: 'Level 3 Personal Trainer', image: matthew },
  { name: 'Tony', role: 'Level 3 Personal Trainer', image: tony },
  { name: 'Chris', role: 'Level 3 Personal Trainer', image: chris },
  { name: 'Nadia', role: 'Level 3 Personal Trainer', image: nadia },
  { name: 'Jonathan', role: 'Level 2 Personal Trainer', image: jonathan },
  { name: 'Bex', role: 'Level 3 Personal Trainer', image: bex },
  { name: 'Derek', role: 'Level 3 Personal Trainer', image: derek }
];

const MeetTheTeam = () => {
  return (
    <div className="team-container">
      <header> 
        <h1>Meet the Team</h1>
      </header>
      <main className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <p>{member.name}</p>
            <p>{member.role}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default MeetTheTeam;


