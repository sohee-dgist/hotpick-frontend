import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HotDeals() {
  const [categories, setCategories] = useState([]);
  const [hotDeals, setHotDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotDealData = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const [catRes, dealsRes] = await Promise.all([
          axios.get(`${baseUrl}/api/categories`),
          axios.get(`${baseUrl}/api/hot-deals?page=0&size=10`)
        ]);
        setCategories(catRes.data.data);
        setHotDeals(dealsRes.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchHotDealData();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류 발생: {error.message}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">카테고리</h2>
      <ul className="mb-8">
        {categories.map(category => (
          <li key={category.id} className="mb-2">
            <strong>{category.displayName}</strong> ({category.name}) - 경로: {category.path}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-4">핫딜</h2>
      <ul>
        {hotDeals.map(deal => (
          <li key={deal.id} className="mb-4 border-b pb-2">
            <h3 className="text-xl font-bold">{deal.title}</h3>
            <p className="text-lg">가격: {deal.price} {deal.currency}</p>
            <p className="text-sm text-gray-600">출처: {deal.sourceSite}</p>
            <a 
              href={deal.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              자세히 보기
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotDeals;