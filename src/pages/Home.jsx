import React, { useState, useEffect } from 'react';
import LoginModal from '../components/LoginModal';
import WatchwordModal from '../components/WatchwordModal'
import Pagination from '../components/Pagination';
import hotDealsData from '../data/hotDealsData'
import LeftAds from '../components/LeftAds';
import RightUserPanel from '../components/RightUserPanel';
import SearchBar from '../components/SearchBar';
import HotDealList from '../components/HotDealList';
import { useSelector, useDispatch  } from 'react-redux';
import { setUser, clearUser } from '../features/userSlice';
import RecommendedCategories from '../components/RecommendedCategories'
import api from '../api'

function Home() {
  
  // 내정보수정(닉네임수정) //
  // 다크모드 // 
  // HotDealCard.jsx에서 categoryId받아서 categoriesData.id와 비교해서 categoriesData.name받기
  // vscode에서 스프링부트 백엔드 실행하기
  // RightUserPanel.jsx 에 닉네임넣기
  // WatchwordModal.jsx 에러

  // TestMode
  const isTestMode = useSelector((state) => state.config.isTestMode);

  // 로그인 상태
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleSignIn = () => setIsLoggedIn(true);
  // const handleSignOut = () => setIsLoggedIn(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);
  const handleSignIn = () => {
    if(!isTestMode){
      dispatch(setUser(user));

      return;
    } 

    const dummyUser = { id: 1, username: 'hotdeal@gmail.com', nickname: '회원1' };
    dispatch(setUser(dummyUser));
  };
  const handleSignOut = () => dispatch(clearUser());
  

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
          const response = await api.get(`/api/hot-deals?page=${currentPage}&size=15`);
          setHotDeals(response.data.data);
          setTotalPages(response.data.totalPages);

          return;
        } 
        setHotDeals(hotDealsData.data);
        setTotalPages(hotDealsData.totalPages);
      } catch (err) {
        console.error("핫딜 데이터를 불러오는 중 오류 발생:", err);
      } 
    };
    fetchHotDeals();
  }, [currentPage, isTestMode]);

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