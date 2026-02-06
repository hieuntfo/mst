import React from 'react';

interface Topic {
  title: string;
  description: string;
  color: string;
  links: { text: string; href: string }[];
}

const topics: Topic[] = [
  {
    title: "Khoa học & Công nghệ",
    description: "Các chương trình, đề tài, dự án cấp quốc gia.",
    color: "bg-blue-400",
    links: [{ text: "Tin tức", href: "#" }, { text: "Số liệu", href: "#" }]
  },
  {
    title: "Đổi mới sáng tạo",
    description: "Hỗ trợ hệ sinh thái khởi nghiệp, Techfest, chỉ số GII.",
    color: "bg-orange-400",
    links: [{ text: "Techfest", href: "#" }, { text: "Chỉ số GII", href: "#" }]
  },
  {
    title: "Chuyển đổi số",
    description: "Kiến tạo chính phủ số, kinh tế số và xã hội số.",
    color: "bg-sky-500",
    links: [{ text: "Văn bản", href: "#" }, { text: "Kết quả", href: "#" }]
  },
  {
    title: "Tiêu chuẩn - Đo lường - Chất lượng",
    description: "Xây dựng hàng rào kỹ thuật, bảo vệ người tiêu dùng.",
    color: "bg-slate-500",
    links: [{ text: "TCVN", href: "#" }, { text: "Kiểm định", href: "#" }]
  }
];

const StrategicTopics = () => {
  return (
    <section className="bg-most-secondary-bg py-20">
      <div className="container mx-auto px-4">
        {/* ZONE C: STRATEGIC TOPICS */}
        <div className="text-center mb-12">
          <h2 className="font-sans text-4xl font-extrabold text-most-navy">Trọng tâm Chiến lược</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Các lĩnh vực ưu tiên, mũi nhọn trong phát triển khoa học và công nghệ quốc gia, thúc đẩy Việt Nam hội nhập và phát triển.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic) => (
            <div key={topic.title} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group border-b-4 border-transparent hover:border-most-red hover:shadow-2xl hover:shadow-most-navy/10">
              <div className={`w-full h-48 transition-transform duration-500 group-hover:scale-105 ${topic.color}`}></div>
              <div className="p-6">
                <h3 className="font-sans text-xl font-bold text-most-navy mb-2">{topic.title}</h3>
                <p className="text-gray-600 mb-4 h-12">{topic.description}</p>
                <div className="flex items-center space-x-2 pt-2">
                  {topic.links.map(link => (
                    <a key={link.text} href={link.href} className="bg-most-secondary-bg text-most-navy text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-most-navy hover:text-white transition-colors">
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