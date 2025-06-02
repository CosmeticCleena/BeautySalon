import React, { useState } from 'react';
import { Eye, MessageSquare, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {newsItems} from '../../data/newData.js';

const NewsCard = ({ item }) => {
    const navigate = useNavigate();
  return (
    <div className="overflow-hidden group bg-white transition-all duration-300 hover:shadow-md flex flex-col cursor-pointer hover:sm:scale-105" onClick={() => navigate(`/news/${item.id}`)}>
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>
      <div className="p-3 sm:p-4 pb-5 sm:pb-6 flex flex-col flex-grow">
        <div className="text-xs text-[#D1AE62] font-medium mb-1 sm:mb-2">{item.category}</div>
        <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-none group-hover:text-[#D1AE62] transition-colors">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
          {item.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500 mt-auto">
          <div className="flex gap-1 items-center">
            <Eye size={12} className="sm:w-4 sm:h-4" />
            <span>{item.views} viewed</span>
          </div>
          <div className="flex gap-1 items-center">
            <MessageSquare size={12} className="sm:w-4 sm:h-4" />
            <span>{item.comments} comments</span>
          </div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden">
            <img 
              src={item.author.image} 
              alt="Author" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = window.innerWidth < 640 ? 3 : 5; // Show fewer pages on mobile
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      let endPage = startPage + maxPagesToShow - 1;
      
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center space-x-1 sm:space-x-2 mt-6 sm:mt-10">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${
          currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:text-gray-900'
        }`}
      >
        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Prev
      </button>
      
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm ${
            currentPage === number 
              ? 'bg-[#D1AE62] text-white' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {number}
        </button>
      ))}
      
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${
          currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:text-gray-900'
        }`}
      >
        Next <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
      </button>
    </div>
  );
};

const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);
  
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:max-w-[60%] mx-auto py-24 sm:py-24 md:py-16 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8">
      <h1 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-bold text-center mb-8 text-[#D1AE62]">Tin tức & Sự kiện</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {currentItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default NewsList;