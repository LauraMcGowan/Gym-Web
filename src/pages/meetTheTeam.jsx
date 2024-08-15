import React from 'react';
import matthew from "./assets/matthew.png"

const meetTheTeam = () => {
  return (
    <div>
      <header>
        <h1>Meet the Team</h1>
      </header>
      <main>
        <img src={matthew} alt="matthew" />
        <p>Level 3 Personal Trainer</p>
      </main>
    </div>
  );
}

export default meetTheTeam;
