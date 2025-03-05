import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Header from './Header';
import SSP from './SSP';
import SideMenu from './SideMenu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <SideMenu />
      <SSP />
    </main>
  </React.StrictMode>
);
