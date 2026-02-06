import React from 'react';
import SearchIcon from './icons/SearchIcon';
import FlagVnIcon from './icons/FlagVnIcon';
import FlagEnIcon from './icons/FlagEnIcon';

const Header = () => {
  const navItems = [
    "Giới thiệu",
    "Tin tức",
    "Văn bản QPPL",
    "Dịch vụ công",
    "Thống kê",
    "Multimedia",
  ];

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="relative">
        {/* ZONE A: GLOBAL NAVIGATION */}
        
        {/* Top Bar */}
        <div className="bg-most-navy text-white text-xs">
          <div className="container mx-auto py-1.5 flex justify-between items-center">
            <a href="#" className="font-semibold hover:text-gray-300 transition-colors">CỔNG THÔNG TIN ĐIỆN TỬ CHÍNH PHỦ</a>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 font-bold opacity-100">
                  <FlagVnIcon className="w-5 h-auto rounded-sm" />
                  <span>VN</span>
                </button>
                <span className="opacity-50">/</span>
                <button className="flex items-center space-x-1 opacity-70 hover:opacity-100 transition-opacity">
                  <FlagEnIcon className="w-5 h-auto rounded-sm" />
                  <span>EN</span>
                </button>
              </div>
              <a href="#" className="font-medium hover:text-gray-300 transition-colors hidden sm:block">Dành cho Cán bộ</a>
            </div>
          </div>
        </div>

        {/* Main Menu & Search */}
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="w-[150px] sm:w-auto h-14 bg-slate-200 rounded mr-4 flex-shrink-0" aria-label="MOST Logo Placeholder"></div>
              <div className="hidden xl:flex items-center">
                <h1 className="text-most-navy text-lg font-extrabold leading-tight">
                  BỘ KHOA HỌC VÀ CÔNG NGHỆ<br/>
                  <span className="text-sm font-semibold tracking-wider text-gray-500">MINISTRY OF SCIENCE AND TECHNOLOGY</span>
                </h1>
              </div>
            </div>
            <div className="flex items-center">
              <nav className="hidden lg:flex items-center space-x-2">
                {navItems.map((item) => (
                  <a key={item} href="#" className="font-sans font-semibold text-most-navy px-4 py-2 rounded-md hover:text-most-red transition-colors relative group">
                    {item.toUpperCase()}
                    <span className="absolute bottom-1 left-0 w-full h-0.5 bg-most-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                  </a>
                ))}
              </nav>
              <button className="ml-4 text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <SearchIcon className="h-5 w-5" />
              </button>
              <div className="lg:hidden ml-2">
                 <button className="text-most-navy p-2 rounded-md hover:bg-gray-100">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                 </button>
              </div>
            </div>
          </div>
        </div>
        {/* Highlight Border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200"></div>
      </div>
    </header>
  );
};

export default Header;