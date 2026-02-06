import React from 'react';

interface Topic {
  title: string;
  description: string;
  icon: string; 
  links: { text: string; href: string }[];
}

const topics: Topic[] = [
  {
    title: "Khoa học & Công nghệ",
    description: "Các chương trình, đề tài, dự án cấp quốc gia.",
    icon: "🔬",
    links: [{ text: "Tin tức", href: "#" }, { text: "Số liệu", href: "#" }]
  },
  {
    title: "Đổi mới sáng tạo",
    description: "Hỗ trợ hệ sinh thái khởi nghiệp, Techfest, chỉ số GII.",
    icon: "💡",
    links: [{ text: "Techfest", href: "#" }, { text: "Chỉ số GII", href: "#" }]
  },
  {
    title: "Chuyển đổi số",
    description: "Kiến tạo chính phủ số, kinh tế số và xã hội số.",
    icon: "🌐",
    links: [{ text: "Văn bản", href: "#" }, { text: "Kết quả", href: "#" }]
  },
  {
    title: "Tiêu chuẩn - Đo lường - Chất lượng",
    description: "Xây dựng hàng rào kỹ thuật, bảo vệ người tiêu dùng.",
    icon: "⚖️",
    links: [{ text: "TCVN", href: "#" }, { text: "Kiểm định", href: "#" }]
  }
];

const StrategicTopics = () => {
  return (
    <section className="bg-most-secondary-bg py-20">
      <div className="container mx-auto">
        {/* ZONE C: STRATEGIC TOPICS */}
        <div className="text-center mb-12">
          <h2 className="font-sans text-4xl font-extrabold text-most-navy">Trọng tâm Chiến lược</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Các lĩnh vực ưu tiên, mũi nhọn trong phát triển khoa học và công nghệ quốc gia, thúc đẩy Việt Nam hội nhập và phát triển.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 xl:gap-6">
          {topics.map((topic) => (
            <div key={topic.title} className="bg-white rounded-lg overflow-hidden transition-all duration-300 group border border-gray-200 hover:shadow-xl transform hover:-translate-y-2 hover:border-most-red/50">
              <div className="p-6">
                <div className="text-5xl mb-4">{topic.icon}</div>
                <h3 className="font-sans text-xl font-bold text-most-navy mb-2">{topic.title}</h3>
                <p className="text-gray-600 mb-4 h-12">{topic.description}</p>
                <div className="flex items-center space-x-2 pt-2">
                  {topic.links.map(link => (
                    <a key={link.text} href={link.href} className="bg-gray-100 text-most-navy text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-most-red hover:text-white transition-colors">
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicTopics;