import React, { useRef } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import PlayIcon from './icons/PlayIcon';

const videos = [
  { title: "Toàn cảnh Techfest 2026 và hệ sinh thái đổi mới sáng tạo", duration: "12:14", color: "bg-blue-400" },
  { title: "Hội thảo quốc tế về vai trò của KH&CN trong chuyển đổi số", duration: "2:07", color: "bg-red-400" },
  { title: "Diễn đàn Trí tuệ nhân tạo (AI) quốc gia: Thách thức & Cơ hội", duration: "45:22", color: "bg-purple-400" },
  { title: "Doanh nghiệp KHCN: Từ chính sách đến thực tiễn", duration: "8:51", color: "bg-green-400" },
  { title: "Gặp gỡ các nhà khoa học trẻ tiêu biểu năm 2026", duration: "15:03", color: "bg-yellow-400" },
];

// Fix: Explicitly type VideoCard as a React.FC to ensure TypeScript
// correctly interprets it as a React component and handles special props like `key`,
// resolving the type assignment error when spreading props in the map function.
interface VideoCardProps {
  title: string;
  duration: string;
  color: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, duration, color }) => (
  <div className="flex-shrink-0 w-80 mr-6 snap-start">
    <div className={`relative aspect-video rounded-lg ${color} group cursor-pointer overflow-hidden`}>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transform transition-all group-hover:scale-110">
          <PlayIcon className="h-8 w-8" />
        </div>
      </div>
      <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded">
        {duration}
      </span>
    </div>
    <h3 className="text-white font-semibold mt-3">{title}</h3>
  </div>
);

const MultimediaSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -344 : 344; // w-80 (320px) + mr-6 (24px)
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-most-navy py-20">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="font-sans text-4xl font-extrabold text-white">Multimedia</h2>
                    <div className="flex space-x-2">
                        <button onClick={() => scroll('left')} className="bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors">
                            <ChevronLeftIcon className="h-6 w-6" />
                        </button>
                        <button onClick={() => scroll('right')} className="bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors">
                            <ChevronRightIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
                <div ref={scrollRef} className="flex overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                    {videos.map((video, index) => (
                        <VideoCard key={index} {...video} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MultimediaSection;