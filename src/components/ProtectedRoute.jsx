import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, roleRequired }) => {
  const isLoggedIn = localStorage.getItem('eduflex_logged_in') === 'true';
  const user = JSON.parse(localStorage.getItem('eduflex_user') || '{}');

  if (!isLoggedIn) {
    // Not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (roleRequired && user.role?.toLowerCase() !== roleRequired.toLowerCase()) {
    // Logged in but doesn't have the required role
    console.warn(`Access denied: Required role ${roleRequired}, found ${user.role}`);
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;
