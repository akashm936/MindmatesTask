// src/components/LoginForm.jsx

import React, { useState } from 'react';
import { signInWithEmail } from '../firebase/Firebase';
import { toast } from 'react-toastify';
import GoogleLogin from './GoogleLogin';

const LoginForm = ({ onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const userCredential = await signInWithEmail(email, password);
      onSuccess(userCredential.user);
      toast.success('Login successful');
      onClose();
    } catch (error) {
      toast.error('Login failed: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8 p-6 bg-purple-400 rounded-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing In...' : 'Login'}
        </button>
      </form>

      {/* Google Sign In Button */}
      <GoogleLogin onSuccess={onSuccess} />

      {/* Close Button */}
      <button onClick={onClose} className="mt-4 w-full text-red-600 hover:text-red-800">
        Close
      </button>
    </div>
  );
};

export default LoginForm;
