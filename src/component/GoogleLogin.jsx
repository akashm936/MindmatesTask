import React from 'react';
import { signInWithGoogle } from '../firebase/Firebase';
import { toast } from 'react-toastify';

const GoogleLogin = ({ onSuccess }) => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      onSuccess(user);
      toast.success(`Welcome, ${user.displayName}`);
    } catch (error) {
      toast.error('Google login failed: ' + error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-red-700"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleLogin;
