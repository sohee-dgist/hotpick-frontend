import React, { useState } from 'react';
import axios from 'axios';

const WatchwordModal = ({ isOpen, onClose }) => {

  const [watchword, setWatchword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!watchword.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';
      const response = await axios.post(`${baseUrl}/api/subscriptions`, { watchword });
      console.log('키워드 등록 성공:', response.data);
      setWatchword('');
      onClose();
    } catch (err) {
      console.error('키워드 등록 오류:', err);
      setError('키워드 등록에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

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
          id="watchword"
          value={watchword}
          onChange={(e) => setWatchword(e.target.value)}
          placeholder="등록하실 키워드를 입력해주세요."
          className="w-full border-2 border-blue-500 rounded-lg p-4 focus:outline-none"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="flex justify-center mt-4 space-x-2">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            등록
          </button>
          <button 
            type="button"
            onClick={onClose}
            className="w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600">
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchwordModal;