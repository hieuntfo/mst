import React from 'react';
import StarIcon from './icons/StarIcon';

const honoredTeam = {
  name: "Trung tâm Công nghệ thông tin",
  achievement: "Hoàn thành xuất sắc nhiệm vụ chuyển đổi số và nâng cấp Cổng thông tin điện tử Bộ trong Quý 3, vượt tiến độ và đảm bảo chất lượng, an ninh thông tin.",
  imageColor: "bg-gradient-to-br from-yellow-200 to-orange-300",
};

const HonorsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-sans text-4xl font-extrabold text-most-navy">Vinh danh Tập thể trong tháng</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Ghi nhận và tuyên dương những đóng góp xuất sắc của các đơn vị, góp phần vào thành công chung của Bộ Khoa học và Công nghệ.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-most-secondary-bg rounded-xl shadow-lg overflow-hidden md:flex">
          <div className={`md:w-1/3 ${honoredTeam.imageColor} flex items-center justify-center p-8`}>
             <div className="w-full aspect-square bg-white/50 rounded-lg flex items-center justify-center" aria-label="Team photo placeholder">
                <StarIcon className="w-24 h-24 text-white drop-shadow-lg" />
             </div>
          </div>
          <div className="p-8 md:w-2/3 flex flex-col justify-center">
            <div className="uppercase tracking-wide text-sm text-most-red font-semibold">Tập thể xuất sắc Quý 3/2026</div>
            <h3 className="font-sans text-3xl font-bold text-most-navy mt-1">{honoredTeam.name}</h3>
            <p className="mt-4 text-gray-700">{honoredTeam.achievement}</p>
            <div className="mt-6">
              <a href="#" className="bg-most-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-most-red transition-colors transform hover:scale-105 inline-block">
                Xem chi tiết
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HonorsSection;