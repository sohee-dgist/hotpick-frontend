import React from 'react';
import { useSelector } from 'react-redux';

const RightUserPanel = ({ 
  isLoggedIn, 
  handleOpenLoginModal, 
  handleOpenWatchwordModal, 
  handleSignOut 
}) => {

  const userData = useSelector((state) => state.user.user);

  return (
    <div className="w-1/6 p-4">
      <div className="fixed top-1/3 transform -translate-y-1/2">
        {isLoggedIn ? (
          <div className="flex flex-col p-4 bg-gray-50 shadow rounded space-y-2">
            <p>내정보</p>
            <div>
              {/* 닉네임 받아서 넣기 */}
            </div>
            <div className="flex flex-col space-y-2">
              <button
                type="button"
                onClick={handleOpenWatchwordModal}
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
  );
};

export default RightUserPanel;