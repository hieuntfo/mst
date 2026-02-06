import React from 'react';

const mainStory = {
    category: "Sự kiện nổi bật",
    title: "Hội nghị Diên Hồng: Lắng nghe ý kiến chuyên gia về phát triển AI quốc gia",
    description: "Các chuyên gia hàng đầu trong và ngoài nước đã cùng thảo luận về chiến lược, thách thức và cơ hội để Việt Nam trở thành một trung tâm AI trong khu vực.",
    imageColor: "bg-slate-300"
};

const ministerQuote = {
    quote: "Khoa học công nghệ và đổi mới sáng tạo là động lực chính cho tăng trưởng bền vững.",
    name: "Huỳnh Thành Đạt",
    title: "Bộ trưởng Bộ KH&CN",
    imageColor: "bg-slate-400"
};

const secondaryStories = [
    {
        category: "Hoạt động Lãnh đạo",
        title: "Thứ trưởng Nguyễn Hoàng Giang làm việc với đoàn chuyên gia WB",
        imageColor: "bg-slate-200"
    },
    {
        category: "Hợp tác quốc tế",
        title: "Tăng cường hợp tác KH&CN và đổi mới sáng tạo Việt Nam - Hoa Kỳ",
        imageColor: "bg-slate-200"
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
      {/* ZONE B: HERO SECTION - RESTRUCTURED */}
      
      {/* Top Row: Main Story + Minister's Quote */}
      <div className="flex flex-col lg:flex-row gap-8 pb-8 border-b border-gray-200">
        {/* Left (60%) - Main Story */}
        <div className="w-full lg:w-3/5 group cursor-pointer">
            <div className={`w-full aspect-[5/3] rounded-lg mb-4 ${mainStory.imageColor}`} aria-label="Main story image placeholder"></div>
            <div>
                <span className="text-sm font-bold text-most-red uppercase">{mainStory.category}</span>
                <h1 className="font-sans text-4xl font-extrabold text-most-navy my-2 leading-tight group-hover:text-most-red transition-colors">
                    {mainStory.title}
                </h1>
                <p className="text-gray-600">
                    {mainStory.description}
                </p>
            </div>
        </div>

        {/* Right (40%) - Minister's Quote */}
        <div className="w-full lg:w-2/5">
            <div className="bg-most-secondary-bg/70 p-8 rounded-lg h-full flex flex-col justify-center items-center text-center">
                 <div className={`w-32 h-32 rounded-full mb-6 ${ministerQuote.imageColor} border-4 border-white shadow-lg`} aria-label="Minister's portrait placeholder"></div>
                 <blockquote className="font-sans text-2xl font-semibold text-most-navy mb-4">
                     "{ministerQuote.quote}"
                 </blockquote>
                 <p className="font-semibold text-gray-800">{ministerQuote.name}</p>
                 <p className="text-sm text-gray-600">{ministerQuote.title}</p>
            </div>
        </div>
      </div>

      {/* Bottom Row: 3 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
        {/* Secondary Stories */}
        {secondaryStories.map((story, index) => (
            <a href="#" key={index} className="group">
                <div className={`w-full h-40 rounded-lg mb-3 ${story.imageColor}`} aria-label="Secondary story image placeholder"></div>
                <span className="text-xs font-bold text-most-red uppercase">{story.category}</span>
                <h3 className="font-bold text-most-navy leading-tight group-hover:text-red-800 transition-colors mt-1">
                    {story.title}
                </h3>
            </a>
        ))}

        {/* Announcements */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200/80">
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

    </section>
  );
};

export default HeroSection;