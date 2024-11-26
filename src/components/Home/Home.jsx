import { signInWithPopup } from 'firebase/auth';
import React from 'react';

function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 w-full p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to Our Application</h1>
        <nav className="mt-2">
          <a href="#features" className="text-white hover:underline mx-2">Features</a>
          <a href="#about" className="text-white hover:underline mx-2">About</a>
          <a href="#contact" className="text-white hover:underline mx-2">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-6">
        <div className="bg-cover bg-center h-64 w-full max-w-4xl" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h2 className="text-4xl font-semibold text-white">Your Journey Starts Here</h2>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-6">Hello, User!</h2>
        <p className="text-gray-700 mb-4">
          This is your home page where you can find the latest updates and features.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-6">
          <h3 className="text-xl font-bold mb-2">Get Started</h3>
          <p className="text-gray-600 mb-4">
            Explore our features and see what we have to offer. You can navigate to different sections from the menu.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Learn More
          </button>
        </div>

        <section id="features" className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-bold mb-4">Features</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Feature 1: Description of feature 1.</li>
            <li>Feature 2: Description of feature 2.</li>
            <li>Feature 3: Description of feature 3.</li>
          </ul>
        </section>

        <section id="about" className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-gray-700">
            We are committed to providing the best services to our users. Our application is designed to meet your needs and help you achieve your goals.
          </p>
        </section>

        <section id="contact" className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mb-6">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-700 mb-2">Have questions? Reach out to us at:</p>
          <p className="text-gray-700">Email: support@example.com</p>
          <p className="text-gray-700">Phone: (123) 456-7890</p>
        </section>
      </main>

      <footer className="bg-gray-800 w-full p-4 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;