import React, { useState, useContext } from 'react';
import UserContext from '../context/user/UserContext';

const Login = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const { setUser } = useContext(UserContext);
   const handleSubmit = (e) => {
      e.preventDefault();
      setUser({ username, password });
   }
   return (
      <div>
         <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg dark:bg-gray-500">

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
               Login
            </h2>

            <input
               type="text"
               name="username"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               placeholder="Username"
               className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />

            <input
               type="password"
               name="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Password"
               className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />

            <button
               onClick={handleSubmit}
               className="w-full bg-green text-white font-semibold"
            >
               Login
            </button>

         </div>
      </div>

   );
}
export default Login;