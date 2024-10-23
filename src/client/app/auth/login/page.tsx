'use client'

import React, { CSSProperties } from 'react';

const Login = () => {
  const handleGoogleLogin = () => {
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`);
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`;
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <button onClick={handleGoogleLogin} style={styles.button}>
        Sign in with Google
      </button>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Login;