import React from 'react';
import UserForm from './form';
import './form.css'; // Import form styles
import './formpage.css';

const UserFormPage = () => {
  return (
    <div className="userFormPage">
      <h1>User Form</h1>
      <UserForm />
    </div>
  );
};

export default UserFormPage;
