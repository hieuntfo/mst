import React, { useRef } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import PlayIcon from './icons/PlayIcon';

const videoData = [
  { id: 1, title: "Toàn cảnh Techfest 2026 và hệ sinh thái đổi mới sáng tạo", duration: "12:14", color: "bg-blue-400" },
  { id: 2, title: "Hội thảo quốc tế về vai trò của KH&CN trong chuyển đổi số", duration: "2:07", color: "bg-red-400" },
  { id: 3, title: "Diễn đàn Trí tuệ nhân tạo (AI) quốc gia: Thách thức & Cơ hội", duration: "45:22", color: "bg-purple-400" },
  { id: 4, title: "Doanh nghiệp KHCN: Từ chính sách đến thực tiễn", duration: "8:51", color: "bg-green-400" },
  { id: 5, title: "Gặp gỡ các nhà khoa học trẻ tiêu biểu năm 2026", duration: "15:03", color: "bg-yellow-400" },
];

interface VideoCardProps {
  video: typeof videoData[0];
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => (
  <div className={'flex-shrink-0 w-80 md:w-96 mr-6 snap-start'}>
    <div className={`relative aspect-video rounded-lg ${video.color} group cursor-pointer overflow-hidden shadow-lg`}>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transform transition-all group-hover:scale-110">
          <PlayIcon className={"h-10 w-10"} />
        </div>
      </div>
      <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded">
        {video.duration}
      </span>
    </div>
    <h3 className={`text-white font-semibold mt-3 text-lg`}>{video.title}</h3>
  </div>
);

const MultimediaSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -408 : 408; // w-96 (384px) + mr-6 (24px)
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto">
                <div className="relative bg-most-navy rounded-2xl p-8 md:p-12 overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
                            <div>
                                <h2 className="font-sans text-4xl font-extrabold text-white">Video Nổi Bật <span className="opacity-60">&rsaquo;</span></h2>
                                <p className="text-gray-300 mt-2 max-w-xl">Cập nhật các sự kiện, hội thảo và thành tựu mới nhất của Bộ Khoa học và Công nghệ qua các video tường thuật.</p>
                            </div>
                            <div className="flex-shrink-0 flex space-x-2 mt-4 md:mt-0">
                                <button onClick={() => scroll('left')} className="bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm">
                                    <ChevronLeftIcon className="h-6 w-6" />
                                </button>
                                <button onClick={() => scroll('right')} className="bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm">
                                    <ChevronRightIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </div>

                        <div ref={scrollRef} className="flex overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory -mx-8 md:-mx-12 px-8 md:px-12" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                            {videoData.map((video) => (
                                <VideoCard key={video.id} video={video} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MultimediaSection;