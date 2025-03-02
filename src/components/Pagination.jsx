import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, groupSize = 10 }) => {
  const currentGroup = Math.floor(currentPage / groupSize);
  const groupStart = currentGroup * groupSize;
  const groupEnd = Math.min(groupStart + groupSize - 1, totalPages - 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {currentPage > groupSize && (
        <button
          onClick={() => onPageChange(1)}
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          처음
        </button>
      )}
      {currentGroup > 0 && (
        <button
          onClick={() => onPageChange(groupStart - 1)}
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          &lt;
        </button>
      )}
      {Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => i + groupStart).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded ${
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {page+1}
        </button>
      ))}
      {groupEnd < totalPages -1 && (
        <button
          onClick={() => onPageChange(groupEnd + 1)}
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;