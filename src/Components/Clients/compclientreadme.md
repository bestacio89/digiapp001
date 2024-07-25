

## Introduction

Le composant `CompClient` est conçu pour permettre la saisie et la validation des données d'un client. Ce composant est intégré dans une page intermédiaire, `CompClientsPage`, qui est à son tour incluse dans l'application via la configuration de routage.

## Structure du Projet

### 1. **Fichiers Principaux**

- **`CompClient.js`** : Composant principal pour la saisie des données du client.
- **`CompClient.css`** : Fichier CSS pour le style du composant `CompClient`.
- **`CompClientsPage.js`** : Composant intermédiaire qui rend `CompClient` et gère la mise en page.
- **`CompClientsPage.css`** : Fichier CSS pour le style de la page contenant `CompClient`.

### 2. **Intégration dans l'Application**

Le composant `CompClientsPage` est intégré dans l'application principale via le routage, permettant aux utilisateurs d'accéder à une interface dédiée pour la gestion des clients.

## Fonctionnalités du Composant `CompClient`

1. **Champs de Saisie**
   - **Nom** : Saisie obligatoire, entre 2 et 40 caractères, sans chiffres.
   - **Prénom** : Saisie obligatoire, entre 2 et 30 caractères, sans chiffres.
   - **Date de Naissance** : Format de date obligatoire, doit être postérieure au 01/01/1950.

2. **Validation**
   - Le formulaire valide les entrées et affiche des messages d'erreur si les contraintes ne sont pas respectées.

3. **Boutons**
   - **Valider** : Soumet les données et effectue la validation.
   - **Visualiser Infos** : Affiche les informations saisies après la soumission.

## Code du Composant

### `CompClient.js`

```jsx
import React, { useState } from 'react';
import './CompClient.css'; // Importation des styles

const CompClient = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [errors, setErrors] = useState({});
  const [infoVisible, setInfoVisible] = useState(false);

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    // Validation du Nom
    if (!nom || nom.length < 2 || nom.length > 40 || /\d/.test(nom)) {
      errors.nom = 'Nom est obligatoire, entre 2 et 40 caractères, sans chiffres.';
      isValid = false;
    }

    // Validation du Prénom
    if (!prenom || prenom.length < 2 || prenom.length > 30 || /\d/.test(prenom)) {
      errors.prenom = 'Prénom est obligatoire, entre 2 et 30 caractères, sans chiffres.';
      isValid = false;
    }

    // Validation de la Date de Naissance
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
```

### `CompClientsPage.js`

```jsx
import React from 'react';
import CompClient from './CompClient'; // Importation du composant CompClient
import './CompClientsPage.css'; // Importation des styles pour la page

const CompClientsPage = () => {
  return (
    <div className="clients-page">
      <h1>Gestion des Clients</h1>
      <CompClient />
    </div>
  );
};

export default CompClientsPage;
```

### `App.js`

Intégration du routage pour inclure `CompClientsPage` dans l'application :

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClockPage from './Components/Clock/ClockPage';
import TimerPage from './Components/Timer/TimerPage';
import CalendarPage from './Components/Calendar/CalendarPage';
import UserFormPage from './Components/Form/UserFormPage';
import CompClientsPage from './Components/CompClientsPage'; // Importation du nouveau composant
import './App.css'; // Importation des styles globaux

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Clock</Link></li>
            <li><Link to="/timer">Timer</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/clients">Clients</Link></li> {/* Nouveau lien pour la page des clients */}
          </ul>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ClockPage />} />
            <Route path="/timer" element={<TimerPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/form" element={<UserFormPage />} />
            <Route path="/clients" element={<CompClientsPage />} /> {/* Nouveau route pour CompClientsPage */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
```

---

### Résumé

- **Création du Composant `CompClient`** : Permet la saisie et la validation des informations d'un client avec une interface utilisateur stylisée de manière futuriste.
- **Page `CompClientsPage`** : Sert de conteneur pour `CompClient`, ajoutant une page dédiée à la gestion des clients.
- **Routage** : Intégration du composant `CompClientsPage` dans le routage principal de l'application pour permettre la navigation vers la page des clients.
