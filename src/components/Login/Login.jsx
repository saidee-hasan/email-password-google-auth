import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase.init';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // 
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for the checkbox
console.log(rememberMe)
  // Handle form submission



  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Set loading state
    setError(''); // Reset error state
    setSuccess(''); // Reset success state

    try {


      if (rememberMe) {
        // Save email to localStorage or handle accordingly
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User  logged in:', user);
      setSuccess('Login successful!'); // Set success message
      
      }else{
        setError('Rebember Me');
      }
    
      // Here, you can handle the "Remember Me" functionality
     

    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.'); // Specific error message
      } else if (error.code === 'auth/user-not-found') {
        setError('No user found with this email.'); // Specific error message
      } else {
        setError('An error occurred. Please try again.'); // General error message
      }
   
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>


        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
          
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)} // Toggle checkbox state
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
        </div>
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button 
          type="submit" 
          disabled={loading} // Disable button while loading
          className={`w-full p-2 ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded hover:bg-blue-600 transition duration-200`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;