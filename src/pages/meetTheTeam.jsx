import React from 'react';
import matthew from "../assets/matthew.png";
import tony from "../assets/tony.png";
import chris from "../assets/chris.png";
import nadia from "../assets/nadia.png";
import jonathan from "../assets/jonathan.png";
import bex from "../assets/bex.png";
import { FaInstagram } from 'react-icons/fa';
import derek from "../assets/derek.png";
import amanda from"../assets/amanda.png";
import '../styling/meetTheTeam.css';

const teamMembers = [
  { name: 'Matthew', role: 'Level 3 Personal Trainer', image: matthew, instagram: 'https://www.instagram.com/fitality_pt?igsh=ZTQyZXBlYzEwOWxk' },
  { name: 'Tony', role: 'Level 3 Personal Trainer', image: tony, instagram: 'https://www.instagram.com/tonymoranfitness?igsh=MTNuYzd5ZWZvMmtwYQ==' },
  { name: 'Chris', role: 'Level 3 Personal Trainer', image: chris, instagram: 'https://www.instagram.com/coached_by_chris?igsh=NzZuaW5sdW53c3l0' },
  { name: 'Nadia', role: 'Level 3 Personal Trainer', image: nadia, instagram: 'https://www.instagram.com/nadiafantastico?igsh=MXFkYmFmMWZ4emp5Ng==' },
  { name: 'Jonathan', role: 'Level 2 Personal Trainer', image: jonathan, instagram: 'https://www.instagram.com/jonny_boy_83?igsh=MWl6ZWF3Y3VnN2R2bw==' },
  { name: 'Bex', role: 'Level 3 Personal Trainer', image: bex, instagram: 'https://www.instagram.com/bex_theempowermentpt?igsh=ZTF0enNqbnZ3cDNh' },
  { name: 'Derek', role: 'Level 3 Personal Trainer', image: derek, instagram: 'https://www.instagram.com/discover_training?igsh=MWhxcGF6M3JzdXNyYg==' },
  { name: 'Amanda', role: 'Level 3 Personal Trainer', image: amanda, instagram: 'https://www.instagram.com/move_with_amanda?igsh=MWxtc3VnMm1teXBqNA==' }
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
               {/* Instagram Icon */}
               <a href={member.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="#E4405F" />
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}

export default MeetTheTeam;


