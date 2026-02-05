import React from 'react';

interface NewsItem {
  category: string;
  title: string;
  color: string;
}

const leadershipNews: NewsItem[] = [
    {
        category: "Sự kiện nổi bật",
        title: "Hội nghị Diên Hồng: Lắng nghe ý kiến chuyên gia về phát triển AI quốc gia",
        color: "bg-slate-200"
    },
    {
        category: "Hoạt động Lãnh đạo",
        title: "Thứ trưởng Nguyễn Hoàng Giang làm việc với đoàn chuyên gia WB",
        color: "bg-slate-200"
    },
    {
        category: "Hợp tác quốc tế",
        title: "Tăng cường hợp tác KH&CN và đổi mới sáng tạo Việt Nam - Hoa Kỳ",
        color: "bg-slate-200"
    },
];

const announcements = [
  "Thông báo tuyển dụng viên chức năm 2026",
  "Kết quả lựa chọn tổ chức đấu giá tài sản",
  "Góp ý dự thảo Thông tư về đo lường",
  "Hội nghị Khoa học trẻ toàn quốc",
];

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* ZONE B: HERO SECTION */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left (60%) - Minister's Message */}
        <div className="w-full lg:w-3/5">
            <div className="bg-most-navy text-white rounded-lg shadow-xl h-full flex flex-col md:flex-row overflow-hidden group">
                {/* Minister's Portrait */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <div 
                      className="w-full h-48 md:h-full bg-slate-600"
                      aria-label="Bộ trưởng Huỳnh Thành Đạt Portrait Placeholder"
                    ></div>
                </div>
                {/* Minister's Message */}
                <div className="w-full md:w-2/3 p-8 flex flex-col justify-center">
                    <h2 className="font-sans text-sm font-bold text-most-yellow mb-2 tracking-widest">THÔNG ĐIỆP CỦA BỘ TRƯỞNG</h2>
                    <blockquote className="font-sans text-2xl font-semibold mb-4 leading-snug">
                        "Khoa học công nghệ và đổi mới sáng tạo là động lực chính cho tăng trưởng bền vững."
                    </blockquote>
                    <p className="text-gray-300 mb-6 font-light">— Huỳnh Thành Đạt, Bộ trưởng Bộ KH&CN</p>
                    <a href="#" className="self-start bg-most-red text-white font-bold py-2 px-5 rounded-md hover:bg-red-700 transition-all transform group-hover:scale-105">
                        Xem toàn văn
                    </a>
                </div>
            </div>
        </div>

        {/* Right (40%) - News & Announcements */}
        <div className="w-full lg:w-2/5 flex flex-col gap-8">
            {/* Leadership News */}
            <div className="flex-1">
                <div className="space-y-4">
                    {leadershipNews.map((item, index) => (
                    <a href="#" key={index} className="flex items-center space-x-4 bg-white p-3 rounded-lg border border-gray-200 hover:shadow-lg hover:border-most-red transition-all transform hover:-translate-y-1 cursor-pointer group">
                        <div className={`w-24 h-16 rounded-md flex-shrink-0 ${item.color}`} aria-label="News image placeholder"></div>
                        <div>
                        <span className="text-xs font-bold text-most-red uppercase">{item.category}</span>
                        <h3 className="font-bold text-most-navy leading-tight group-hover:text-red-800 transition-colors">{item.title}</h3>
                        </div>
                    </a>
                    ))}
                </div>
            </div>

            {/* Announcements */}
            <div className="bg-most-secondary-bg p-4 rounded-lg border border-gray-200">
                <h3 className="font-sans text-lg font-bold text-most-navy pb-2 mb-3 border-b-2 border-most-red/50">Thông báo mới</h3>
                <ul className="space-y-2.5">
                    {announcements.map((item, index) => (
                    <li key={index}>
                        <a href="#" className="text-sm text-gray-800 hover:text-most-red transition-colors flex items-start group">
                        <svg className="w-4 h-4 mr-2 mt-0.5 text-most-red/70 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <span className="group-hover:underline">{item}</span>
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;