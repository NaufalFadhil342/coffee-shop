import React, { useState } from 'react';
import AccountForm from './accountForm';

const MyAccount = () => {
  const [login, setLogin] = useState(true);
  const initialFormState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const ConditionalAccount = () => {
    if (login) {
      return (
        <div className="w-full text-stone-600 flex gap-1">
          <>You don't have an account?</>{' '}
          <p className="text-accent font-medium hover:text-stone-600 hover:cursor-pointer duration-200 transition-colors" onClick={() => setLogin(false)}>
            Register
          </p>
        </div>
      );
    } else {
      return (
        <div className="w-full text-stone-600 flex gap-1">
          <>You already have an account?</>{' '}
          <p className="text-accent font-medium hover:text-stone-600 hover:cursor-pointer duration-200 transition-colors" onClick={() => setLogin(true)}>
            Login
          </p>
        </div>
      );
    }
  };

  return (
    <div className="w-full h-auto flex flex-col gap-12 px-[8%] my-28">
      <div className="w-full">
        <h1 className="text-5xl text-stone-800 font-semibold uppercase">{login ? 'Login' : 'Register'}</h1>
      </div>
      <div className="w-full h-auto">
        <AccountForm login={login} setLogin={setLogin} initialState={initialFormState} />
      </div>
      <div className="w-auto">
        <ConditionalAccount />
      </div>
    </div>
  );
};

export { MyAccount };
