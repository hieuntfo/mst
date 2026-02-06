import React from 'react';
import SearchIcon from './icons/SearchIcon';

const services = [
  { text: "Đăng ký sở hữu trí tuệ", icon: "🧠" },
  { text: "Đăng ký đề tài, dự án KH&CN", icon: "🔬" },
  { text: "Công nhận Doanh nghiệp KHCN", icon: "🏢" },
  { text: "Thủ tục cấp phép an toàn bức xạ", icon: "☢️" },
  { text: "Hỗ trợ Đổi mới sáng tạo", icon: "💡" },
  { text: "Tra cứu TCVN", icon: "📚" }
];

const PublicServices = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        {/* ZONE D: PUBLIC SERVICES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 xl:gap-6 items-start">
          {/* Left: Online Public Services */}
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-most-navy mb-2">Dịch vụ công trực tuyến</h2>
            <p className="text-gray-600 mb-6">Thực hiện các thủ tục hành chính nhanh chóng, minh bạch và hiệu quả.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <a key={index} href="#" className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-100 hover:border-most-red hover:shadow-lg transition-all transform hover:scale-[1.03] group">
                  <span className="text-2xl mr-4">{service.icon}</span>
                  <span className="font-semibold text-gray-800">{service.text}</span>
                  <span className="ml-auto text-most-red font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300">→</span>
                </a>
              ))}
            </div>
          </div>
          {/* Right: Document Search */}
          <div className="bg-most-navy text-white p-8 rounded-lg shadow-2xl mt-8 lg:mt-0">
            <h2 className="font-sans text-3xl font-extrabold mb-2">Tra cứu Văn bản & Thủ tục</h2>
            <p className="text-gray-300 mb-6">Tìm kiếm trong cơ sở dữ liệu văn bản quy phạm pháp luật quốc gia.</p>
            <div className="space-y-4">
              <select className="w-full p-3 rounded-md bg-blue-900/50 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-most-yellow appearance-none">
                <option>-- Chọn Lĩnh vực --</option>
                <option>Sở hữu trí tuệ</option>
                <option>Tiêu chuẩn đo lường</option>
                <option>Năng lượng nguyên tử</option>
              </select>
              <select className="w-full p-3 rounded-md bg-blue-900/50 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-most-yellow appearance-none">
                <option>-- Chọn Loại văn bản --</option>
                <option>Nghị định</option>
                <option>Thông tư</option>
                <option>Quyết định</option>
              </select>
              <button className="w-full bg-most-red text-white font-bold py-3 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-red-700 transition-colors transform hover:scale-105">
                <SearchIcon className="h-5 w-5" />
                <span>TRA CỨU NGAY</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicServices;