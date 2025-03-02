import React from 'react';

const HotDealCard = ({ deal }) => {
  return (
    <a
      key={deal.id}
      href={deal.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-4"
    >
      <div className="flex p-4 bg-gray-50 rounded shadow mb-4 cursor-pointer hover:bg-gray-100">
        {/* 왼쪽 썸네일 영역 */}
        <div className="w-1/3 sm:w-32">
          <img
            src={deal.thumbnailUrl}
            alt="썸네일"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        {/* 오른쪽 상세 정보 영역 */}
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
          <p>
            ID: {deal.id}
          </p>
        </div>
      </div>
    </a>
  );
};

export default HotDealCard;