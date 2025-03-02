import React from 'react';

const LeftAds = ({ adUrl, adImage }) => {
  return (
    <div className="w-1/6 p-4">
      <h3 className="text-xl font-bold mb-4">Function / Ads</h3>
      <div className="fixed top-1/2 transform -translate-y-1/2">
        <a href={adUrl} target="_blank" rel="noopener noreferrer">
          <img src={adImage} alt="광고이미지" className="w-64" />
        </a>
      </div>
    </div>
  );
};

export default LeftAds;