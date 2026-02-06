import React from 'react';
import DigitalChart from './DigitalChart';

const dataVizData = [
  { name: 'Quý 1', 'Đề tài duyệt': 120, 'Bài báo QT': 200 },
  { name: 'Quý 2', 'Đề tài duyệt': 150, 'Bài báo QT': 240 },
  { name: 'Quý 3', 'Đề tài duyệt': 130, 'Bài báo QT': 210 },
  { name: 'Quý 4', 'Đề tài duyệt': 180, 'Bài báo QT': 300 },
];

const annualEvents = [
  {
    title: 'Techfest Vietnam 2026',
    description: 'Ngày hội khởi nghiệp đổi mới sáng tạo quốc gia.',
    icon: '🚀'
  },
  {
    title: 'Giải thưởng Chất lượng Quốc gia',
    description: 'Tôn vinh các tổ chức, doanh nghiệp có thành tích xuất sắc.',
    icon: '🏆'
  },
  {
    title: 'Hội nghị Diên Hồng',
    description: 'Đối thoại chính sách cấp cao về khoa học, công nghệ.',
    icon: '🏛️'
  }
];

const Engagement = () => {
  return (
    <section className="bg-most-secondary-bg py-20">
      <div className="container mx-auto">
        {/* ZONE E: ENGAGEMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 xl:gap-8 items-start">
          {/* Data Visualization */}
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-most-navy mb-2">Mỗi tuần một con số</h2>
            <p className="text-gray-600 mb-6">Minh bạch hóa kết quả hoạt động khoa học công nghệ.</p>
            <DigitalChart data={dataVizData} />
          </div>
          
          {/* Annual Events Banners */}
          <div>
            <h2 className="font-sans text-3xl font-extrabold text-most-navy mb-2">Sự kiện thường niên</h2>
            <p className="text-gray-600 mb-6">Khám phá các sự kiện khoa học và công nghệ nổi bật được tổ chức hàng năm.</p>
            <div className="space-y-4">
              {annualEvents.map((event, index) => (
                <a key={index} href="#" className="group flex items-center p-4 rounded-lg bg-white transition-all transform border-2 border-gray-200 hover:border-most-red/80 hover:shadow-lg">
                  <div className="text-3xl mr-4 bg-gray-100 p-2 rounded-md shadow-sm">{event.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                  <div className="ml-auto text-2xl font-light text-most-red opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">→</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engagement;