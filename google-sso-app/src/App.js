import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const App = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse); 

    axios.post('http://your-backend-url/api/auth/google', {
      token: credentialResponse.credential
    }).then(response => {
      console.log("Login success!", response.data);
    }).catch(error => {
      console.error("Error during login", error);
    });
  };

  const handleLoginFailure = (error) => {
    console.log("Login failed:", error);
  };

  return (
    <div className="App">
      <h1>Google SSO</h1>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  );
};

export default App;
