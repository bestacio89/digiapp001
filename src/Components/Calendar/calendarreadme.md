# README - Composant Calendrier avec React

## Introduction

Le composant `Calendar` permet aux utilisateurs de sélectionner une date à l'aide d'un calendrier. Lorsqu'une date est sélectionnée et si elle tombe pendant le week-end, un message est affiché. Ce composant utilise la bibliothèque `react-datepicker` pour afficher le calendrier et gère l'état de la date sélectionnée avec le hook `useState`.

## Pourquoi Utiliser des Hooks ?

Les hooks comme `useState` simplifient la gestion de l'état dans les composants fonctionnels. Voici les raisons principales :

- **Simplicité** : Les hooks rendent le code plus concis et facile à lire par rapport aux classes.
- **Lisibilité** : La gestion de l'état et des effets est plus claire sans avoir besoin de méthodes de classe complexes.

## Explication du Code

### 1. Importations

```javascript
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css'; // Optionnel : styles personnalisés pour le calendrier
```

- **React** : Importé pour utiliser React et ses fonctionnalités.
- **useState** : Un hook pour gérer l'état du composant.
- **DatePicker** : Un composant de la bibliothèque `react-datepicker` pour afficher le calendrier.
- **calendar.css** : Fichier CSS optionnel pour ajouter des styles au composant (assurez-vous de le créer si vous souhaitez personnaliser le style).

### 2. État de la Date Sélectionnée

```javascript
const [selectedDate, setSelectedDate] = useState(null);
```

- **useState** : Initialise l'état `selectedDate` à `null`, ce qui signifie qu'aucune date n'est sélectionnée par défaut. La fonction `setSelectedDate` est utilisée pour mettre à jour cet état lorsque l'utilisateur sélectionne une date.

### 3. Gestion du Changement de Date

```javascript
const handleDateChange = (date) => {
  setSelectedDate(date);
};
```

- **handleDateChange** : Fonction appelée lorsque l'utilisateur sélectionne une date. Elle met à jour l'état `selectedDate` avec la date sélectionnée.

### 4. Vérification du Week-End

```javascript
const isWeekend = (date) => {
  const day = date.getDay();
  return day === 6 || day === 0; // 6 est le samedi, 0 est le dimanche
};
```

- **isWeekend** : Fonction qui vérifie si la date donnée est un week-end (samedi ou dimanche). Elle utilise la méthode `getDay()` de l'objet `Date`, qui retourne le jour de la semaine (0 pour dimanche, 6 pour samedi).

### 5. Rendu du Composant

```javascript
return (
  <div className="calendar">
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      placeholderText="Select a date"
      dateFormat="MMMM d, yyyy"
    />
    {selectedDate && isWeekend(selectedDate) && (
      <p className="message">Cette prochaine date est bien</p>
    )}
  </div>
);
```

- **DatePicker** : Affiche le calendrier pour la sélection de la date. Utilise `selected` pour afficher la date actuellement sélectionnée et `onChange` pour gérer les changements de date.
- **placeholderText** : Texte affiché lorsque aucune date n'est sélectionnée.
- **dateFormat** : Format de la date affichée dans le calendrier.
- **message** : Affiche un message si une date est sélectionnée et si elle tombe pendant le week-end. Le message est affiché en utilisant une condition logique `&&`.

## Fichier CSS (`calendar.css`)

Vous pouvez créer un fichier `calendar.css` pour ajouter des styles à votre calendrier. Voici un exemple simple :

```css
.calendar {
  font-family: Arial, sans-serif;
  text-align: center;
}

.message {
  color: green;
  font-size: 1.2em;
  margin-top: 10px;
}
```

- **.calendar** : Style général du conteneur du calendrier.
- **.message** : Style pour le message affiché lorsque la date sélectionnée est un week-end.

## Conclusion

Le composant `Calendar` est un exemple de l'utilisation des hooks `useState` pour gérer l'état d'un composant React fonctionnel. Il permet aux utilisateurs de sélectionner une date et affiche un message si cette date tombe pendant le week-end. En utilisant `react-datepicker`, nous simplifions la sélection de la date et la gestion du formatage.

Si vous avez des questions ou avez besoin d'aide avec ce composant ou React en général, n'hésitez pas à demander !
