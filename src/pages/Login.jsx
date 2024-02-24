import React, { useEffect } from 'react';
import './connecting.css';

export default function Login() {
  useEffect(() => {
    // Set a timeout to redirect after 5 seconds
    const redirectTimeout = setTimeout(() => {
      // Replace 'your-redirect-link' with the actual link you want to redirect to
      window.location.replace('https://app.chatfiler.ca');
    }, 5000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className='w-[100%] h-[100vh] flex'>
      <div className="text">
        CONNECTING
      </div>
      <div className="box">
        <div className="comp"></div>
        <div className="loader"></div>
        <div className="con"></div>
        <div className="byte"></div>
        <div className="server"></div>
      </div>
    </div>
  );
}
