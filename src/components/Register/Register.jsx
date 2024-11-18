import React, { useState } from 'react';

import { HiEye, HiEyeOff } from 'react-icons/hi'; // Importing eye icons for password visibility toggle

import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth"; 

import { auth } from '../../../firebase.init';


function Register() {

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [loading, setLoading] = useState(false);





  const togglePasswordVisibility = () => {

    setShowPassword(!showPassword);

  };


  const handleSubmit = async (e) => {

    e.preventDefault(); // Prevent the default form submission

    setLoading(true); // Set loading state

    setError(''); // Reset error state




    
    try {
  

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
// Send email verification

await sendEmailVerification(user);
setSuccess('User  registered successfully! Please check your email for verification.');

const profile = {
  displayName : username
}
await updateProfile(auth.currentUser, profile);

      console.log('User  registered:', user);

    

      setSuccess('User  registered successfully!'); // Set success message

    } catch (error) {

      if (error.code === 'auth/email-already-in-use') {

        setError('This email is already in use.'); // Set specific error message

      } else {

        setError('An error occurred. Please try again.'); // General error message

      }

      

    } finally {

      setLoading(false); // Reset loading state

    }

  };


  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-200">

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Create an Account</h2>

   

        <form onSubmit={handleSubmit}>

          <div className="mb-4">

            <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>

            <input

              type="text"

              id="username"

              value={username}

              onChange={(e) => setUsername(e.target.value)} // Update state on input change

              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"

              placeholder="Enter your username"

              required

            />

          </div>

          <div className="mb-4">

            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>

            <input

              type="email"

              id="email"

              value={email}

              onChange={(e) => setEmail(e.target.value)} // Update state on input change

              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"

              placeholder="Enter your email"

              required

            />

          </div>

          <div className="mb-4 relative">

            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>

            <input

              type={showPassword ? 'text' : 'password'}

              id="password"

              value={password}

              onChange={(e) => setPassword(e.target.value)} // Update state on input change

              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"

              placeholder="Enter your password"

              required

            />

            <button

              type="button"

              onClick={togglePasswordVisibility}

              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"

            >

              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}

            </button>

          </div>
          {error && <p className="text-red-500 text-sm  mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm  mb-4">{success}</p> }

          <button

            type="submit"

            disabled={loading} // Disable button while loading

            className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-600'} text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200`}

          >

            {loading ? 'Registering...' : 'Register'}

          </button>

        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;