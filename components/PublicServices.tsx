import React from 'react';
import SearchIcon from './icons/SearchIcon';

const services = [
  { text: "Đăng ký sở hữu trí tuệ", icon: "🧠" },
  { text: "Đăng ký đề tài, dự án KH&CN", icon: "🔬" },
  { text: "Công nhận Doanh nghiệp KHCN", icon: "🏢" },
  { text: "Thủ tục cấp phép an toàn bức xạ", icon: "☢️" },
  { text: "Hỗ trợ Đổi mới sáng tạo", icon: "💡" }
];

const PublicServices = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* ZONE D: PUBLIC SERVICES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Online Public Services */}
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-most-navy mb-2">Dịch vụ công trực tuyến</h2>
            <p className="text-gray-600 mb-6">Thực hiện các thủ tục hành chính nhanh chóng, minh bạch và hiệu quả.</p>
            <div className="space-y-3">
              {services.map((service, index) => (
                <a key={index} href="#" className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-most-red hover:shadow-lg transition-all transform hover:scale-105 group">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{service.icon}</span>
                    <span className="font-semibold text-gray-800">{service.text}</span>
                  </div>
                  <span className="text-most-red font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-4 group-hover:translate-x-0">→</span>
                </a>
              ))}
            </div>
          </div>
          {/* Right: Document Search */}
          <div className="bg-most-navy text-white p-8 rounded-lg shadow-2xl">
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