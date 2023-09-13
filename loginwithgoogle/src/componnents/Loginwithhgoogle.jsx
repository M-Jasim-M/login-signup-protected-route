import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState(null);

  // Function to initiate Google login
  const loginWithGoogle = () => {
    window.location.href = 'http://localhost:3000/auth/google'; // Redirect to the backend route for Google login
  };

  useEffect(() => {
    // Check if the URL contains the user data after Google login
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('name') && searchParams.has('email') && searchParams.has('image')) {
      const userData = {
        name: searchParams.get('name'),
        email: searchParams.get('email'),
        image: searchParams.get('image'),
      };
      setUser(userData);
    }
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <img src={user.image} alt={user.name} />
        </div>
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  );
};

export default Login;
