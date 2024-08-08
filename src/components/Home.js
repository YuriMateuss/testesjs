// src/components/Home.js

import React from 'react';
import './Home.css'; // Para estilos específicos da página Home

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the New Home Page!</h1>
      <p>This is a completely different home page.</p>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  );
}

export default Home;
