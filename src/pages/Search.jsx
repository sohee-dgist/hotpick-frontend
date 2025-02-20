import { Button, Checkbox, Input } from 'antd';
import React, { useState } from 'react';

function Search() {
  const [isProductCheckbox, setIsProductCheckbox] = useState(false);
  const [isPriceCheckbox, setIsPriceCheckbox] = useState(false);

  const handleProductCheckboxChange = (e) => {
    setIsProductCheckbox(e.target.checked);
  };
  const handlePriceCheckboxChange = (e) => {
    setIsPriceCheckbox(e.target.checked);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div>
          <Checkbox className="pr-1" checked={isProductCheckbox} onChange={handleProductCheckboxChange}/>상품명
          <Checkbox className="pl-2 pr-1" checked={isPriceCheckbox} onChange={handlePriceCheckboxChange}/>가격별
          {isProductCheckbox && (
            <div>
              <Input
                type="text" 
                id="product"
                placeholder="상품명을 입력해주세요."
                className="mt-2 block w-full border border-gray-300 rounded p-2"
              />
            </div>
          )}
          {isPriceCheckbox && (
            <div className="flex space-x-4">
              <div className="mt-2 w-full">
                Min Price
                <Input
                  type="number"
                  id="minPrice"
                  placeholder="1000"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  />
                </div>
              <div className="mt-2 w-full">
                Max Price
                <Input
                  type="number"
                  id="minPrice"
                  placeholder="1000"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  />
              </div>
            </div>
          )}
          {(isProductCheckbox || isPriceCheckbox) && (
            <Button className="mt-2 px-4 py-2 rounded">
              Search
            </Button>
          )}

          
        
      </div>
    </div>
  );
}

export default Search;