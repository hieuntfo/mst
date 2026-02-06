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
            
            {/* NEW ILLUSTRATION PLACEHOLDER */}
            <div className="relative w-full aspect-video max-h-[300px] bg-slate-100 rounded-lg mb-8 overflow-hidden group">
              <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-most-navy/10 rounded-full transition-transform duration-700 ease-out group-hover:scale-150"></div>
              <div className="absolute top-6 left-6 w-3/5 h-10 bg-slate-200 rounded transition-transform duration-500 ease-in-out group-hover:translate-x-2"></div>
              <div className="absolute top-20 left-6 w-2/5 h-6 bg-slate-200 rounded transition-transform duration-500 ease-in-out delay-100 group-hover:translate-x-1"></div>
              <div className="absolute top-20 right-6 w-1/4 h-6 bg-most-red/70 rounded transition-transform duration-500 ease-in-out delay-200 group-hover:-translate-x-1"></div>
              <div className="absolute bottom-6 left-6 w-4/5 h-20 bg-white rounded-lg shadow-md border border-slate-200 p-3 transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:border-slate-300">
                  <div className="w-1/2 h-3 bg-slate-200 rounded mb-2"></div>
                  <div className="w-full h-2 bg-slate-200 rounded mt-1"></div>
                  <div className="w-3/4 h-2 bg-slate-200 rounded mt-1"></div>
              </div>
            </div>

            <div className="space-y-3">
              {services.map((service, index) => (
                <a key={index} href="#" className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-100 hover:border-most-red hover:shadow-lg transition-all transform hover:scale-[1.03] group">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{service.icon}</span>
                    <span className="font-semibold text-gray-800">{service.text}</span>
                  </div>
                  <span className="text-most-red font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-4 group-hover:translate-x-0 duration-300">→</span>
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