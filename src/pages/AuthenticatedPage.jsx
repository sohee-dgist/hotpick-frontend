/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import testData from '../data/userData'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';
import api from '../api';

const AuthenticatedPage = () => {

  // testMode
  const isTestMode = useSelector((state) => state.config.isTestMode);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = isTestMode ? testData.data : (await api.get('/api/users/my')).data;
        const userData = response.data;

        if (userData?.id) {
          dispatch(setUser(userData));
          if (window.opener) {
            window.opener.location.href = '/';
            window.close();
          } else {
            navigate('/');
          }
        } else {
          setErrorMessage('사용자 인증에 실패했습니다. 다시 로그인해 주세요.');
        }
      } catch (error) {
        console.error('사용자 정보 확인 중 오류 발생:', error);
        setErrorMessage('사용자 인증 중 오류가 발생했습니다. 다시 시도해 주세요.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [navigate, dispatch]);

  if (loading) return <div>사용자 정보를 확인 중입니다...</div>;

  return (
    <div className="p-4">
      {errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <p className="text-green-500">인증 성공! 잠시 후 메인 화면으로 이동합니다.</p>
      )}
    </div>
  );
};

export default AuthenticatedPage;