import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make the API request to fetch user data
    axios.get('http://localhost:3000/api/userData') // Use the relative URL
      .then((response) => {
        if (response.status === 200) {
          setUserData(response.data);
        } else {
          throw new Error('User data not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData.name) {
    return <p>User data not found</p>;
  }

  return (
    <div>
      <h1>Welcome, {userData.name}</h1>
      <p>Email: {userData.email}</p>
      <img src={userData.image} alt="" />
      <div>{userData.googleAccessToken
}</div>
      {/* Add other user data fields as needed */}
    </div>
  );
}

export default Dashboard;
