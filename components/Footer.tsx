import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-most-navy text-white border-t-4 border-most-red">
      {/* ZONE F: FOOTER */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 xl:gap-6">
          {/* Column 1: Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4" aria-label="MOST Logo Placeholder"></div>
                <h3 className="font-sans text-lg font-bold uppercase">Bộ Khoa học và Công nghệ</h3>
             </div>
            <p className="text-sm text-gray-300">
              Cơ quan chủ quản: Bộ Khoa học và Công nghệ (MST).
              <br/>
              Chịu trách nhiệm nội dung: Trung tâm Công nghệ thông tin.
            </p>
          </div>
          {/* Column 2: Contact */}
          <div>
            <h4 className="font-sans font-bold mb-4 uppercase tracking-wider text-gray-400 text-sm">Thông tin liên hệ</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start"><span className="w-5 text-center mr-2 opacity-70">📍</span><span>113 Trần Duy Hưng, Cầu Giấy, Hà Nội.</span></li>
              <li className="flex items-start"><span className="w-5 text-center mr-2 opacity-70">📞</span><span>(024) 3943 9412</span></li>
              <li className="flex items-start"><span className="w-5 text-center mr-2 opacity-70">✉️</span><span>banbientap@most.gov.vn</span></li>
            </ul>
          </div>
          {/* Column 3: Links */}
          <div>
            <h4 className="font-sans font-bold mb-4 uppercase tracking-wider text-gray-400 text-sm">Thư viện liên kết</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline">Chính phủ điện tử</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline">Cơ sở dữ liệu quốc gia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline">Văn phòng Quốc hội</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline">Đảng Cộng sản Việt Nam</a></li>
            </ul>
          </div>
          {/* Column 4: Social */}
          <div>
            <h4 className="font-sans font-bold mb-4 uppercase tracking-wider text-gray-400 text-sm">Theo dõi trên</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transform hover:scale-110 transition-transform">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transform hover:scale-110 transition-transform">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/20">
        <div className="container mx-auto py-4 text-center text-sm text-gray-400">
          Bản quyền thuộc về Bộ Khoa học và Công nghệ &copy; 2026.
        </div>
      </div>
    </footer>
  );
};

export default Footer;