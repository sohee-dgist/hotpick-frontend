import React from 'react';

const LoginModal = ({ isOpen, onClose, onSignIn }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="absolute inset-0 bg-black opacity-50" 
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">SNS 로그인</h2>
        {/* <p className="mb-6">아래 SNS 계정으로 로그인해주세요.</p> */}
        <div className="space-y-3">
          <button 
            type="button"
            onClick={() => {
              onSignIn();
              onClose();
            }}
            className="w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600">
            그냥 로그인
          </button>
          <button className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">
            Google 로그인
          </button>
          <button className="w-full py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-800">
            Facebook 로그인
          </button>
          <button className="w-full py-2 px-4 bg-rose-500 text-white rounded hover:bg-rose-600">
            Instargram 로그인
          </button>
          <button className="w-full py-2 px-4 bg-sky-500 text-white rounded hover:bg-sky-600">
            Twitter 로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;