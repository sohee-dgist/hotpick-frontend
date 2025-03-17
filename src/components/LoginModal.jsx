import React from 'react';
import { Link } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose, onSignIn }) => {

  if (!isOpen) return null;

  const openAuthPopup = () => {
    const authUrl = `${process.env.REACT_APP_API_BASE_URL}/oauth2/authorization/google`;
    const popup = window.open(
      authUrl,
      'GoogleAuth',
      'width=600,height=600'
    );

    const handleMessage = (event) => {
      if (event.origin !== process.env.REACT_APP_API_BASE_URL) return;

      if (event.data?.success) {
        onSignIn();
        onClose();
      }
      window.removeEventListener('message', handleMessage);
      if (popup) popup.close();
    };

    window.addEventListener('message', handleMessage);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="absolute inset-0 bg-black opacity-50" 
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">SNS 로그인</h2>
        <div className="space-y-3">
          <Link to="/login/authenticated">
            <button 
              type="button"
              onClick={() => {
                onSignIn();
                onClose();
              }}
              className="w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600">
              그냥 로그인
            </button>
          </Link>
          <button 
            type="button"
            onClick={openAuthPopup}
            className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 block text-center">
            Google 로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;