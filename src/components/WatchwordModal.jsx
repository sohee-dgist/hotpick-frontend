import React, { useState, useEffect } from 'react';
import api from '../api';
import { useSelector } from 'react-redux';
import dummyWatchwords from '../data/watchwords';

const WatchwordModal = ({ isOpen, onClose }) => {

  const isTestMode = useSelector((state) => state.config.isTestMode);
  const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

  const [watchword, setWatchword] = useState('');
  const [watchwords, setWatchwords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const fetchWatchwords = async () => {
        try {
          if (isTestMode) {
            setWatchwords(dummyWatchwords.data);
          } else {
            const response = await api.get(`/api/subscriptions`);
            setWatchwords(response.data.data);
          }
        } catch (err) {
          console.error('구독 목록 조회 오류:', err);
          setError('구독 목록을 불러오는 데 실패했습니다.');
        }
      };
      fetchWatchwords();
    }
  }, [isOpen, baseUrl, isTestMode]);

  // 구독 등록
  const handleSubmit = async () => {
    if (!watchword.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${baseUrl}/api/subscriptions`, { watchword });
      console.log('구독 등록 성공:', response.data);
      setWatchword('');
      onClose();
    } catch (err) {
      console.error('구독 등록 오류:', err);
      setError('구독 등록에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  // 구독 수정
  const handleUpdate = async (id, currentWatchword) => {
    const newWatchword = prompt("새 구독을 입력하세요:", currentWatchword);
    if (!newWatchword || !newWatchword.trim()) return;
    try {
      if (isTestMode) {
        setWatchwords((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, watchword: newWatchword } : item
          )
        );
      } else {
        await axios.put(`${baseUrl}/api/subscriptions/${id}`, { watchword: newWatchword });
        const updatedResponse = await axios.get(`${baseUrl}/api/keyword-alerts`);
        setWatchwords(updatedResponse.data.data);
      }
    } catch (err) {
      console.error("구독 수정 오류:", err);
    }
  };

  // 구독 삭제
  const handleDelete = async (id) => {
    if (!window.confirm("해당 구독을 삭제하시겠습니까?")) return;
    try {
      if (isTestMode) {
        setWatchwords((prev) => prev.filter((item) => item.id !== id));
      } else {
        await axios.delete(`${baseUrl}/api/subscriptions/${id}`);
        const updatedResponse = await axios.get(`${baseUrl}/api/keyword-alerts`);
        setWatchwords(updatedResponse.data.data);
      }
    } catch (err) {
      console.error("구독 삭제 오류:", err);
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
        <p className="text-xl font-bold ml-2 mb-2">구독 등록</p>
        <input
          type="text"
          id="watchword"
          value={watchword}
          onChange={(e) => setWatchword(e.target.value)}
          placeholder="등록하실 구독을 입력해주세요."
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
         {/* 구독 목록 */}
         <div className="mt-4">
          <p className="text-lg font-bold">구독 목록</p>
          {watchwords.length === 0 ? (
            <p>등록된 구독이 없습니다.</p>
          ) : (
            <ul>
              {watchwords.map((item) => (
                <li key={item.id} className="mt-2 border-b pb-2">
                  <div>{item.watchword}</div>
                  <button
                    onClick={() => handleUpdate(item.id, item.watchword)}
                    className="ml-2 text-blue-500 hover:underline"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="ml-2 text-red-500 hover:underline"
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchwordModal;