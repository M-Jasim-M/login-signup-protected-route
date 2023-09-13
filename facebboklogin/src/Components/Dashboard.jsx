// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Dashboard() {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Make a GET request to fetch user data
//     axios.get('http://localhost:3000/api/user')
//       .then((response) => {
//         const { userData } = response.data;
//         setUserData(userData);
//         console.log(userData)
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {userData ? (
//         <div>
//           <h2>User Profile</h2>
//           <p>Name: {userData.name}</p>
//           <p>Email: {userData.email}</p>
//           <img src={userData.image} alt="User" />
//           {/* Add other user data fields here */}
//         </div>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Token.css'

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Make a GET request to fetch user data and access token
    axios.get('http://localhost:3000/api/user')
      .then((response) => {
        const { userData, accessToken } = response.data;
        setUserData(userData);
        // Access token is available in the response
        console.log('Access Token:', accessToken);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);


  const handleCopy = async () => {
    try {
      // Use the Clipboard API to copy text to the clipboard
      await navigator.clipboard.writeText(userData.facebookAccessToken);
      setCopied(true);
      alert("Token Copied to Clipboard")
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };


  return (
    <div>
      {userData ? (
        <div className='mainface'>
          <h2>Facebook account data.</h2>
          <img src={userData.image} alt="User" />
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          
          <div className="tokendiv">
          <div>
<div>This is your token</div>

<button onClick={handleCopy}>Copy Token</button>
          </div>
          <p className='token'>{userData.facebookAccessToken}</p>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Dashboard;

