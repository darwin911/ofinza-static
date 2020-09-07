import React from 'react';
import logo from '../web-logo.png';

export const Header = () => (
  <header className='App-header'>
    <figure className='brand-logo'>
      <img src={logo} alt='Ofinza' />
    </figure>
    <div className='wrapper'>
      <h1 className='main-title'>Ofinza</h1>
      <h2 className='main-subtitle'>Ingeniería y Arquitectura</h2>
    </div>
  </header>
);
