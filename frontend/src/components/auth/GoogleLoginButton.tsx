import React from 'react';
import { FcGoogle } from 'react-icons/fc'; // Make sure to install react-icons

const GoogleLoginButton: React.FC = () => {
  const handleGoogleLogin = () => {
    // Redirect to your backend's Google authentication route
    window.location.href = 'http://localhost:8080/api/v1/users/google/callback';
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center justify-center w-full gap-2 py-2 px-4 bg-white text-gray-700 rounded-md shadow-sm border border-gray-300 hover:bg-gray-50 transition-colors"
    >
      <FcGoogle className="w-5 h-5" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLoginButton;

