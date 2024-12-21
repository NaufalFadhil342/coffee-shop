import React, { useState } from 'react';

const AccountForm = ({ login, initialState }) => {
  const [accountState, setAccountState] = useState(initialState);

  const accountHandler = (e) => {
    const { name, value } = e.target;

    setAccountState({
      ...accountState,
      [name]: value,
    });
  };

  const accountSubmit = async (e) => {
    e.preventDefault();

    try {
      // update the function with your api here...
      // const fetctAccount = await axios.post('http://yourapi.com', {})

      const formData = new FormData();

      formData.append('username', accountState.username);
      formData.append('email', accountState.email);
      formData.append('password', accountState.password);
      formData.append('confirmPassword', accountState.confirmPassword);

      const accountData = Object.fromEntries(formData)

      console.log('account data:', accountData)

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form className="w-full h-auto flex flex-col gap-8" onSubmit={accountSubmit}>
      <div className="w-full flex flex-col gap-2">
        <label className="text-stone-600">{login ? 'Username or email address' : 'Username'}</label>
        <input
          className="w-full h-12 border-b-2 border-accent text-stone-600 px-2 outline-none"
          type="text"
          name="username"
          value={login ? accountState.username || accountState.email : accountState.username}
          onChange={accountHandler}
          required
        />
      </div>
      {!login && (
        <div className="w-full flex flex-col gap-2">
          <label className="text-stone-600">email address</label>
          <input className="w-full h-12 border-b-2 border-accent text-stone-600 px-2 outline-none" type="email" value={accountState.email} name="email" onChange={accountHandler} required />
        </div>
      )}
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-stone-600">Password</label>
          <input className="w-full h-12 border-b-2 border-accent text-stone-600 px-2 outline-none" type="password" value={accountState.password} name="password" onChange={accountHandler} required />
        </div>
        {!login && (
          <div className="flex flex-col gap-2">
            <label className="text-stone-600">Confirm Password</label>
            <input className="w-full h-12 border-b-2 border-accent text-stone-600 px-2 outline-none" type="password" value={accountState.confirmPassword} name="confirmPassword" onChange={accountHandler} required />
          </div>
        )}
      </div>
      <button className="button w-fit h-12 bg-accent text-white hover:bg-[#9D6842] hover:cursor-pointer">{login ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default AccountForm;
