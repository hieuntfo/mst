import React from 'react';
import SearchIcon from './icons/SearchIcon';

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
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      {/* ZONE A: GLOBAL NAVIGATION */}
      
      {/* Top Bar */}
      <div className="bg-most-secondary-bg text-most-navy text-xs border-b border-gray-200">
        <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
          <a href="#" className="font-semibold hover:text-most-red transition-colors">CỔNG THÔNG TIN ĐIỆN TỬ CHÍNH PHỦ</a>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <button className="font-bold text-most-navy">VN</button>
              <span>/</span>
              <button className="text-gray-400 hover:text-most-navy transition-colors">EN</button>
            </div>
            <a href="#" className="font-medium hover:text-most-red transition-colors hidden sm:block">Dành cho Cán bộ</a>
          </div>
        </div>
      </div>

      {/* Main Menu & Search */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <div className="w-[150px] h-14 bg-slate-200 mr-4 flex-shrink-0" aria-label="MOST Logo Placeholder"></div>
            <div className="hidden lg:flex items-center">
              <h1 className="text-most-navy text-lg font-extrabold leading-tight">
                BỘ KHOA HỌC VÀ CÔNG NGHỆ<br/>
                <span className="text-sm font-semibold tracking-wider opacity-80">MINISTRY OF SCIENCE AND TECHNOLOGY</span>
              </h1>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <a key={item} href="#" className="font-sans font-semibold text-most-navy px-4 py-2 rounded-md hover:bg-most-secondary-bg transition-colors">
                {item.toUpperCase()}
              </a>
            ))}
          </nav>
          <div className="lg:hidden">
             <button className="text-most-navy p-2 rounded-md hover:bg-most-secondary-bg">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
             </button>
          </div>
        </div>
        
        <div className="pb-4 flex items-center justify-center">
          <div className="relative w-full max-w-3xl">
            <input
              type="text"
              placeholder="Tìm kiếm thông tin, văn bản, thủ tục, lĩnh vực khoa học và công nghệ..."
              className="w-full pl-5 pr-14 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-most-red focus:border-transparent transition-shadow"
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center px-4 bg-most-red text-white rounded-full m-1.5 hover:bg-red-700 transition-colors">
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;