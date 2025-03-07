import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-5xl font-extrabold text-gray-800">
        HotPick
      </h1>
      <p className="mt-4 text-base text-gray-700">
        HotPick은 사용자가 관심 있는 제품과 목표 가격을 등록하면, 다양한 커뮤니티에서 실시간으로 핫딜 정보를 수집하고, 조건에 맞는 게시물이 발견되면 알림을 보내주는 서비스입니다.
      </p>
      <Link to="/">
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default About;