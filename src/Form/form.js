import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './form.css'; // Optional: Custom styles for the form

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '', // Initial value as an empty string
    email: '',
    date: null,
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for mandatory fields
    if (!formData.firstName || !formData.lastName) {
      alert('Please enter your first and last name.');
      return;
    }

    // Validation for age (number between 18-65)
    const parsedAge = parseInt(formData.age, 10); // Parse string to number
    if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 65) {
      alert('Please enter a valid age between 18 and 65.');
      return;
    }

    const { firstName, lastName, email, date, message } = formData;
    const formattedDate = date ? date.toDateString() : '';
    alert(
      `Name: ${firstName} ${lastName}\nAge: ${parsedAge}\nEmail: ${email}\nDate: ${formattedDate}\nMessage: ${message}`
    );
  };

  return (
    <div className="userForm">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required // Mark as required field
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required // Mark as required field
          />
        </label>
        <label>
          Age:
          <input
            type="number" // Input type for numbers
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Select a date:
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            placeholderText="Select a date"
            dateFormat="MMMM d, yyyy"
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
