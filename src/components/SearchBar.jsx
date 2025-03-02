import React from 'react';
import { Input, Button } from 'antd';

const SearchBar = () => {
  return (
    <div className="flex justify-center pb-3">
      <div className="relative w-4/6">
        <Input
          type="text"
          id="product"
          placeholder="상품명을 입력해주세요."
          className="w-full border-2 border-blue-500 rounded-full p-4 pl-8 pr-24 focus:outline-none"
        />
        <Button
          type="ghost"
          className="absolute top-0 right-0 h-full px-4 text-white border-2 border-blue-500 bg-blue-500 rounded-r-full hover:bg-blue-600 hover:border-blue-600"
        >
          <p className="pr-2">
            검색
          </p>
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;