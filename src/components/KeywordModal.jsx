import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="absolute inset-0 bg-black opacity-50" 
        onClick={onClose}
      ></div>
      <div className="bg-white p-5 rounded-lg shadow-lg z-10 w-full h-auto max-w-md">
        <p className="text-xl font-bold ml-2 mb-2">키워드 알림 등록</p>
        <input
          type="text"
          id="keyword"
          placeholder="등록하실 키워드를 입력해주세요."
          className="w-full border-2 border-blue-500 rounded-lg p-4 focus:outline-none"
        />
        <div className="flex justify-center mt-4 space-x-2">
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
            등록
          </button>
          <button 
            type="button"
            onClick={() => {
              onClose();
            }}
            className="w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600">
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;