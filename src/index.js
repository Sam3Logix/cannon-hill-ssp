import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Header from './Header';
import SSP from './SSP';
import SideMenu from './SideMenu';
import APIDemo from './APIDemo';
import Info from './Info';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <SideMenu />
      <div id="primary-content">
        <SSP />
        <APIDemo />
        <Info />
      </div>
    </main>
  </React.StrictMode>
);
