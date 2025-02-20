import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-center items-center">
        <Link to="/">
          <button className="text-2xl font-bold mr-4">
            HotPick
          </button>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/about" className="text-gray-700 hover:text-gray-1000 font-semibold">
                키워드 알림을 빨리 받아보세요!
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;