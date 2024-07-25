// src/composants/CompClientsPage.js
import React from 'react';
import CompClient from './Compclients';
import './CompClientPage.css'; // Import CSS for the page

const CompClientsPage = () => {
  return (
    <div className="clients-page">
      <h1>Gestion des Clients</h1>
      <CompClient />
    </div>
  );
};

export default CompClientsPage;
