import React, { useState, useEffect } from 'react';
import LoginModal from '../components/LoginModal';
import WatchwordModal from '../components/WatchwordModal'
import Pagination from '../components/Pagination';
import axios from 'axios';
import hotDealsData from '../data/hotDealsData'
import LeftAds from '../components/LeftAds';
import RightUserPanel from '../components/RightUserPanel';
import SearchBar from '../components/SearchBar';
import HotDealList from '../components/HotDealList';
import { useSelector } from 'react-redux';
import RecommendedCategories from '../components/RecommendedCategories'

function Home() {
  

  // search api //
  // categoris api // c
  // 키워드 등록 post // c
  // 상태관리(userInfo, testMode) // c 
  // 다크모드 // 
  // 키알조회 수정 삭제
  // 내정보수정

  // TestMode
  const isTestMode = useSelector((state) => state.config.isTestMode);

  // 로그인 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSignIn = () => setIsLoggedIn(true);
  const handleSignOut = () => setIsLoggedIn(false);

  // 핫딜 
  const [hotDeals, setHotDeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const ads = ["https://naver.com", "https://youtube.com"]

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isWatchwordModalOpen, setIsWatchwordModalOpen] = useState(false);

  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);
  
  const handleOpenWatchwordModal = () => setIsWatchwordModalOpen(true);
  const handleCloseWatchwordModal = () => setIsWatchwordModalOpen(false);

  useEffect(() => {
    const fetchHotDeals = async () => {
      try {
        if(!isTestMode){
          const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';
          const response = await axios.get(`${baseUrl}/api/hot-deals?page=${currentPage}&size=15`);
          setHotDeals(response.data.data);
          setTotalPages(response.data.totalPages);
        } else{
          setHotDeals(hotDealsData.data);
          setTotalPages(hotDealsData.totalPages);
        }
      } catch (err) {
        console.error("핫딜 데이터를 불러오는 중 오류 발생:", err);
      } 
    };
    fetchHotDeals();
  }, [currentPage]);

  return (
    <div className="container mx-auto py-1 px-4">
      <div className="flex space-x-4 h-full">
        {/* 왼쪽 영역 */}
        <LeftAds adUrl={ads[0]} adImage="images/alice.png" />
        {/* 중앙 영역 */}
        <main className="w-4/6 bg-white p-6">
          <SearchBar />
          <RecommendedCategories />
          <HotDealList hotDeals={hotDeals} /> 
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        </main>
        {/* 오른쪽 영역 */}
        <RightUserPanel 
          isLoggedIn={isLoggedIn}
          handleOpenLoginModal={handleOpenLoginModal}
          handleOpenWatchwordModal={handleOpenWatchwordModal}
          handleSignOut={handleSignOut}
        />
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} onSignIn={handleSignIn}/>
      <WatchwordModal isOpen={isWatchwordModalOpen} onClose={handleCloseWatchwordModal}/>
    </div>
  );
}

export default Home;