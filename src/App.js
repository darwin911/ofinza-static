import './app.css';

import { Header } from './Components/Header';
import React from 'react';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <article>
          <h3>Diseño</h3>
          <ul>
            <li>Estructural</li>
            <li>Arquitectónico</li>
            <li>Sanitario</li>
            <li>Iluminación</li>
          </ul>
          <h3>Visualización</h3>
        </article>
      </main>
      <footer>
        <h6>Contact Info</h6>
      </footer>
    </div>
  );
};

export default App;
