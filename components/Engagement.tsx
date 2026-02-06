import React from 'react';
import VideoPlaceholder from './VideoPlaceholder';
import DigitalChart from './DigitalChart';

const dataVizData = [
  { name: 'Quý 1', 'Đề tài duyệt': 120, 'Bài báo QT': 200 },
  { name: 'Quý 2', 'Đề tài duyệt': 150, 'Bài báo QT': 240 },
  { name: 'Quý 3', 'Đề tài duyệt': 130, 'Bài báo QT': 210 },
  { name: 'Quý 4', 'Đề tài duyệt': 180, 'Bài báo QT': 300 },
];

const Engagement = () => {
  return (
    <section className="bg-most-secondary-bg py-20">
      <div className="container mx-auto">
        {/* ZONE E: ENGAGEMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 xl:gap-6 items-center">
          {/* Data Visualization */}
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-most-navy mb-2">Mỗi tuần một con số</h2>
            <p className="text-gray-600 mb-6">Minh bạch hóa kết quả hoạt động khoa học công nghệ.</p>
            <DigitalChart data={dataVizData} />
          </div>
          
          {/* Featured Video */}
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-most-navy mb-2">Video nổi bật</h2>
            <p className="text-gray-600 mb-6">Cập nhật các sự kiện, hội thảo và thành tựu mới nhất qua các video tường thuật.</p>
            <VideoPlaceholder 
              thumbnailColor="bg-gray-700"
              title="Hội thảo quốc tế về Trí tuệ nhân tạo 2026"
              description="Toàn cảnh sự kiện và các bài tham luận chính."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagement;