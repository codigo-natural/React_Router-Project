import React from 'react'
import { useAuth } from '../../services/auth';

function LogoutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={logout}>
        <label>¿seguro de que quieres salir?</label>

        <button type='submit'>Salir</button>
      </form>
    </>
  );
}

export { LogoutPage }; 