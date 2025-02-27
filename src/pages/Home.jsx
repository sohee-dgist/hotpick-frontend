import React, { useState } from 'react';
import LoginModal from '../components/LoginModal';
import KeywordModal from '../components/KeywordModal'
import deals from '../data/deals';
import hotDealsData from '../data/hotDealsData'
import Search from '../pages/Search';
import { Checkbox } from 'antd';

function Home() {
  
  // 로그인 관련
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleSignIn = () => setIsLoggedIn(true);
  const handleSignOut = () => setIsLoggedIn(false);
  
  // 게시물 내림차순
  const sortedDeals = [...deals].sort((a, b) => b.id - a.id);

  // 페이지네이션
  const postsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sortedDeals.length / postsPerPage); // Math.ceil 소수점 올림
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentDeals = sortedDeals.slice(indexOfFirstPost, indexOfLastPost);
  const currentDeals2 = hotDealsData.data;

  // 페이지
  const groupSize = 10;
  const currentGroup = Math.floor((currentPage - 1) / groupSize); // Math.ceil 소수점 버림
  const groupStart = currentGroup * groupSize + 1; // 각 그룹의 1페이지 
  const groupEnd = Math.min(groupStart + groupSize - 1, totalPages); // 각 그룹의 마지막 페이지 10, 20, 30

  const ads = ["https://naver.com", "https://youtube.com"]

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isKeywordModalOpen, setIsKeywordModalOpen] = useState(false);

  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);
  
  const handleOpenKeywordModal = () => setIsKeywordModalOpen(true);
  const handleCloseKeywordModal = () => setIsKeywordModalOpen(false);

  const [isSearchCheckbox, setIsSearchCheckbox] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsSearchCheckbox(e.target.checked);
  };

  return (
    <div className="container mx-auto py-1 px-4">
      <div className="flex space-x-4 h-full">
        {/* 왼쪽 영역 */}
        <div className="w-1/6 p-4">
          <h3 className="text-xl font-bold mb-4">
            Fuction / Ads
          </h3>
          {/* 좌측광고영역(고정O) div className만 지우면 고정X */}
          <div className="fixed top-1/2 transform -translate-y-1/2">
            <a 
              href={ads[0]}
              target="_blank"
              rel="noopener noreferrer"
              >
              <img src="images/alice.png" alt='광고이미지_네이버' className="w-64"/>
            </a>
          </div>
        </div>
        {/* 중앙 영역 */}
        <main className="w-4/6 bg-white p-6">
          <div className="flex justify-center pb-3">
            <div className="relative w-4/6">
              <input
                type="text"
                id="product"
                placeholder="상품명을 입력해주세요."
                className="w-full border-2 border-blue-500 rounded-full p-4 pl-8 pr-24 focus:outline-none"
              />
              <button className="absolute top-0 right-0 h-full px-4 text-white border-2 border-blue-500 bg-blue-500 rounded-r-full hover:bg-blue-600 hover:border-blue-600">
                <p className="pr-2">
                  검색
                </p>
              </button>
            </div>
          </div>
            <Checkbox className="pr-1" checked={isSearchCheckbox} onChange={handleCheckboxChange}/>검색 *정렬방식으로 바꿀예정
          {isSearchCheckbox ? (<div><Search/></div>) : (<div></div>)}
          {/* {hotdeals.map((deal) => (
            <div>
              <p>{deal.id}</p>
            </div>

          ))} */}
          {currentDeals2.map((deal) => (
            <a
              key={deal.id}
              href={deal.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4"
            >
              <div className="flex p-4 bg-gray-50 rounded shadow mb-4 cursor-pointer hover:bg-gray-100">
                <div className="w-1/3 sm:w-32">
                  <img
                    src={deal.thumbnailUrl} 
                    alt="썸네일"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 pl-4">
                  <div className="flex space-x-1 items-center">
                    <p className="px-[5px] bg-red-500 rounded text-sm text-white mb-1">
                      {deal.sourceSite}
                    </p>
                    <p className="px-[5px] bg-blue-500 rounded text-sm text-white mb-1">
                      {deal.salesSite}
                    </p>
                  </div>
                  <h2 className="text-xl font-bold">{deal.title}</h2>
                  <p className="text-lg text-gray-700">
                    가격: {deal.price} {deal.currency}
                  </p>
                </div>
              </div>
            </a>
          ))}

          {/* {currentDeals.map((deal) => (
            <a
              key={deal.id}
              href={deal.dealLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex p-4 bg-gray-50 rounded shadow mb-4 cursor-pointer hover:bg-gray-100" >
                <div className="w-1/3 sm:w-32">
                  <img
                    src={deal.thumbnail}
                    alt="썸네일"
                    className="w-full h-auto rounded object-cover"
                  />
                </div>
                <div className="flex-1 pl-4">
                  <div className="flex space-x-1 items-center">
                    <p className="px-[5px] bg-red-500 rounded text-sm text-white mb-1">{deal.hotDealSite}</p>
                    <p className="px-[5px] bg-blue-500 rounded text-sm text-white mb-1">{deal.dealSite}</p>
                  </div>
                  <h2 className="text-xl font-bold">{deal.title}</h2>
                  <h2 className="text-xl font-bold">{deal.id}</h2>
                  <p className="text-lg text-gray-700">가격: {deal.price}</p>
                  <p className="text-sm text-gray-700">작성자</p>
                  
                  <p className="text-sm text-gray-600"></p>
                </div>
              </div>
            </a>
          ))} */}

          {/* 페이지네이션 */}
          <div className="flex justify-center items-center space-x-2 mt-4">
            {/* 처음 버튼 */}
            {currentPage !== 1 && (
              <button
                onClick={() => setCurrentPage(1)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                처음
              </button>
            )}
            
            {/* < 버튼 */}
            {currentPage > 10 && (
              <button
                onClick={() => setCurrentPage(groupStart - 1)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                 &lt;
              </button>
            )}

            {/* 페이지 목록 */}
            {Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => i + groupStart).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {page}
              </button>
            ))}
            
            {/* > 버튼 */}
            {groupEnd < totalPages && (
              <button
                onClick={() => setCurrentPage(groupEnd + 1)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                 &gt;
              </button>
            )}
          </div>
        </main>
        
        {/* 오른쪽 영역 */}
        <div className="w-1/6 p-4">
          {/* 우측광고영역(고정O) div className만 지우면 고정X */}
          <div className="fixed top-1/3 transform -translate-y-1/2">
            {/* 로그인/글쓰기 버튼 */}
            {isLoggedIn ? (
              <div className="flex flex-col p-4 bg-gray-50 shadow rounded space-y-2">
                <p>내정보</p>
                <div>
                  <p>닉네임</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    type="button"
                    onClick={handleOpenKeywordModal}
                    className="px-4 py-2 w-[150px] bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    키워드 알림
                  </button>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="px-4 py-2 w-[150px] bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    로그아웃
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleOpenLoginModal}
                className="px-4 py-2 w-[180px] bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                HotPick Login
              </button>
            )}
          </div>
        </div>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} onSignIn={handleSignIn}/>
      <KeywordModal isOpen={isKeywordModalOpen} onClose={handleCloseKeywordModal}/>
    </div>
  );
}

export default Home;