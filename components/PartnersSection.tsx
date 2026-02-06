import React, { useState } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const ministryUnits = [
  { name: 'Cục Tân số vô tuyến điện', logoColor: 'bg-red-100' },
  { name: 'Ủy ban Tiêu chuẩn Đo lường', logoColor: 'bg-yellow-100' },
  { name: 'Cục An toàn bức xạ và hạt nhân', logoColor: 'bg-blue-100' },
  { name: 'Cục Công nghiệp công nghệ thông tin', logoColor: 'bg-indigo-100' },
  { name: 'Trường Cao đẳng Thông tin', logoColor: 'bg-sky-100' },
  { name: 'Quỹ phát triển khoa học', logoColor: 'bg-green-100' },
  { name: 'Viện Công nghệ phần mềm', logoColor: 'bg-purple-100' },
  { name: 'Trung tâm Internet Việt Nam', logoColor: 'bg-pink-100' },
];

const partners = [
  { name: 'Mobifone', logoColor: 'bg-blue-200' },
  { name: 'VNPT Technology', logoColor: 'bg-sky-200' },
  { name: 'VTC', logoColor: 'bg-indigo-200' },
  { name: 'Viettel', logoColor: 'bg-emerald-200' },
  { name: 'Đại học Bách Khoa, TP HCM', logoColor: 'bg-amber-200' },
  { name: 'Vietnam Post', logoColor: 'bg-yellow-200' },
  { name: 'FPT Corporation', logoColor: 'bg-orange-200' },
  { name: 'VinGroup', logoColor: 'bg-slate-200' },
];

const LogoCarousel = ({ title, items }: { title: string, items: { name: string, logoColor: string }[] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-sans text-2xl font-bold text-most-red">{title}</h3>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setCurrentPage(i)} className={`w-2.5 h-2.5 rounded-full ${currentPage === i ? 'bg-most-red' : 'bg-gray-300'} transition-colors`}></button>
            ))}
          </div>
          <div className="flex space-x-2">
            <button onClick={handlePrev} className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button onClick={handleNext} className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors">
                <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 xl:gap-6">
        {/* Using a key on the grid div to force re-render on page change for a simple fade effect */}
        {visibleItems.map((item) => (
           <div key={item.name} className="animate-[fadeIn_0.5s_ease-in-out]">
             <a href="#" className="block p-4 border border-gray-200 bg-white rounded-lg text-center hover:shadow-lg hover:border-most-red transition-all h-full flex flex-col items-center justify-center">
                <div className={`w-20 h-12 rounded ${item.logoColor} mb-3`} aria-label={`${item.name} logo placeholder`}></div>
                <p className="text-sm font-semibold text-gray-700">{item.name}</p>
             </a>
           </div>
        ))}
        {/* Placeholder for animation key */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
};


const PartnersSection = () => {
    return (
        <section className="bg-most-secondary-bg">
            <div className="container mx-auto">
                <LogoCarousel title="Cổng thông tin điện tử các đơn vị thuộc Bộ" items={ministryUnits} />
                <div className="border-t border-gray-200"></div>
                <LogoCarousel title="Doanh nghiệp đồng hành" items={partners} />
            </div>
        </section>
    );
};

export default PartnersSection;