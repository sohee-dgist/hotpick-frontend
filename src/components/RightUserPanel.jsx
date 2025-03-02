import React from 'react';
import { Button } from 'antd';

const RightUserPanel = ({ 
  isLoggedIn, 
  handleOpenLoginModal, 
  handleOpenKeywordModal, 
  handleSignOut 
}) => {
  return (
    <div className="w-1/6 p-4">
      <div className="fixed top-1/3 transform -translate-y-1/2">
        {isLoggedIn ? (
          <div className="flex flex-col p-4 bg-gray-50 shadow rounded space-y-2">
            <p>내정보</p>
            <div>
              <p>닉네임</p>
            </div>
            <div className="flex flex-col space-y-2">
              <Button
                type="button"
                onClick={handleOpenKeywordModal}
                className="px-4 py-2 w-[150px] bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                키워드 알림
              </Button>
              <Button
                type="button"
                onClick={handleSignOut}
                className="px-4 py-2 w-[150px] bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                로그아웃
              </Button>
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