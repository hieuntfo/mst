import React, { useState } from 'react';

const ministryUnits = [
  { 
    name: 'Cục Báo chí', 
    description: 'Quản lý nhà nước về hoạt động báo chí, thông tin điện tử.', 
    logoColor: 'bg-red-100' 
  },
  { 
    name: 'Cục Tần số Vô tuyến điện', 
    description: 'Quản lý và cấp phép sử dụng tần số vô tuyến điện quốc gia.', 
    logoColor: 'bg-yellow-100' 
  },
  { 
    name: 'Cục An toàn bức xạ và hạt nhân', 
    description: 'Đảm bảo an toàn, an ninh trong lĩnh vực năng lượng nguyên tử.', 
    logoColor: 'bg-blue-100' 
  },
  { 
    name: 'Cục Công nghiệp CNTT', 
    description: 'Thúc đẩy phát triển công nghiệp công nghệ thông tin và truyền thông.', 
    logoColor: 'bg-indigo-100' 
  },
  { 
    name: 'Trung tâm Internet Việt Nam', 
    description: 'Quản lý tài nguyên Internet quốc gia (tên miền, địa chỉ IP).', 
    logoColor: 'bg-pink-100' 
  },
  { 
    name: 'Quỹ phát triển khoa học', 
    description: 'Hỗ trợ tài chính cho các hoạt động nghiên cứu khoa học.', 
    logoColor: 'bg-green-100' 
  },
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

const InteractiveDirectory = () => {
  const [selectedUnit, setSelectedUnit] = useState(ministryUnits[0]);

  return (
    <div className="py-12">
      <h3 className="font-sans text-3xl font-extrabold text-most-navy text-center mb-8">Cổng thông tin điện tử các đơn vị thuộc Bộ</h3>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        {/* Left Column: List of Units */}
        <div className="md:w-1/3 border-r border-gray-200 pr-4">
          <ul className="space-y-1">
            {ministryUnits.map((unit) => (
              <li key={unit.name}>
                <button
                  onMouseEnter={() => setSelectedUnit(unit)}
                  className={`w-full text-left p-3 rounded-md transition-colors text-sm font-semibold ${selectedUnit.name === unit.name ? 'bg-most-red text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {unit.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Right Column: Details of Selected Unit */}
        <div className="md:w-2/3 flex flex-col justify-center items-center text-center p-4">
            <div className={`w-32 h-20 rounded-lg ${selectedUnit.logoColor} mb-4`} aria-label={`${selectedUnit.name} logo placeholder`}></div>
            <h4 className="text-xl font-bold text-most-navy">{selectedUnit.name}</h4>
            <p className="text-gray-600 mt-2 h-16">{selectedUnit.description}</p>
            <a href="#" className="mt-4 bg-most-navy text-white font-bold py-2 px-5 rounded-full hover:bg-most-red transition-colors text-sm">
              Truy cập
            </a>
        </div>
      </div>
    </div>
  );
};

const LogoWall = () => {
    return (
        <div className="py-12">
            <h3 className="font-sans text-3xl font-extrabold text-most-navy text-center mb-8">Doanh nghiệp đồng hành</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 md:gap-5 xl:gap-6">
                {partners.map(partner => (
                    <div key={partner.name} className="group relative">
                        <div className="aspect-video flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg group-hover:border-most-red/50">
                           <div className={`w-24 h-12 rounded ${partner.logoColor}`} aria-label={`${partner.name} logo placeholder`}></div>
                        </div>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-most-navy text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {partner.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const PartnersSection = () => {
    return (
        <section className="bg-most-secondary-bg">
            <div className="container mx-auto">
                <InteractiveDirectory />
                <div className="border-t border-gray-200 my-8"></div>
                <LogoWall />
            </div>
        </section>
    );
};

export default PartnersSection;