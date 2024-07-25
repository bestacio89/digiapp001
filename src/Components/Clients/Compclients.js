// src/composants/CompClient.js
import React, { useState } from 'react';
import './CompClient.css'; // Import your CSS file for styling

const CompClient = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [errors, setErrors] = useState({});
  const [infoVisible, setInfoVisible] = useState(false);

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    // Validate Nom
    if (!nom || nom.length < 2 || nom.length > 40 || /\d/.test(nom)) {
      errors.nom = 'Nom est obligatoire, entre 2 et 40 caractères, sans chiffres.';
      isValid = false;
    }

    // Validate Prénom
    if (!prenom || prenom.length < 2 || prenom.length > 30 || /\d/.test(prenom)) {
      errors.prenom = 'Prénom est obligatoire, entre 2 et 30 caractères, sans chiffres.';
      isValid = false;
    }

    // Validate Date de Naissance
    const minDate = new Date('1950-01-01');
    const enteredDate = new Date(dateNaissance);
    if (isNaN(enteredDate.getTime()) || enteredDate < minDate) {
      errors.dateNaissance = 'Date de Naissance doit être après le 01/01/1950.';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Formulaire soumis avec succès !');
    }
  };

  const handleVisualize = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    <div className="comp-client">
      <h2>Formulaire Client</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom:</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            maxLength="40"
          />
          {errors.nom && <p className="error">{errors.nom}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="prenom">Prénom:</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            maxLength="30"
          />
          {errors.prenom && <p className="error">{errors.prenom}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="dateNaissance">Date de Naissance:</label>
          <input
            type="date"
            id="dateNaissance"
            value={dateNaissance}
            onChange={(e) => setDateNaissance(e.target.value)}
          />
          {errors.dateNaissance && <p className="error">{errors.dateNaissance}</p>}
        </div>

        <button type="submit">Valider</button>
        <button type="button" onClick={handleVisualize}>
          {infoVisible ? 'Cacher Infos' : 'Visualiser Infos'}
        </button>
      </form>

      {infoVisible && (
        <div className="info-display">
          <h3>Informations Saisies</h3>
          <p><strong>Nom:</strong> {nom}</p>
          <p><strong>Prénom:</strong> {prenom}</p>
          <p><strong>Date de Naissance:</strong> {dateNaissance}</p>
        </div>
      )}
    </div>
  );
};

export default CompClient;
