import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Adjust path as needed

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithTokens } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      // Store tokens in localStorage or context
      loginWithTokens(accessToken, refreshToken);
      navigate('/chats'); // Navigate to your main app page
    } else {
      navigate('/login', { state: { error: 'Social login failed' } });
    }
  }, [location, navigate, loginWithTokens]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-xl font-medium">Processing login...</h2>
        <div className="mt-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;