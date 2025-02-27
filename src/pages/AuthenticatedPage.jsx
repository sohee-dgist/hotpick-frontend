import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthenticatedPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // 예시로 사용자 정보를 가져오는 API 호출
        const response = await axios.get('/api/user'); // 백엔드에 맞는 엔드포인트 사용
        const userData = response.data;
        
        // userData가 존재하면 인증된 것으로 간주
        if (userData && userData.id) {
          // 인증된 사용자라면 메인 페이지로 리다이렉트
          navigate('/');
        } else {
          // 사용자 정보가 없으면 로그인 페이지로 리다이렉트 또는 에러 처리
          navigate('/login');
        }
      } catch (error) {
        console.error('사용자 정보 확인 중 오류 발생:', error);
        navigate('/login'); // 에러 시 로그인 페이지로 이동
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [navigate]);

  if (loading) {
    return <div>사용자 정보를 확인 중입니다...</div>;
  }
  
  return null;
};

export default AuthenticatedPage;