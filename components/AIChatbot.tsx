import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

// Fix: Adhering to the Gemini API guidelines.
// The API key is now sourced directly from process.env.API_KEY.
// The MOCK_API_KEY and related client-side warnings have been removed.
// The prompt has been structured to use `systemInstruction` for better clarity and performance.
const getBotResponse = async (prompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Bạn là trợ lý ảo của Bộ Khoa học và Công nghệ Việt Nam. Trả lời các câu hỏi một cách trang trọng, chính xác và mang tính kiến tạo."
      }
    });
    return response.text ?? "Xin lỗi, tôi không thể xử lý yêu cầu này.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Đã xảy ra lỗi khi kết nối đến dịch vụ AI. Vui lòng thử lại sau.";
  }
};


const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Chào bạn, tôi là trợ lý ảo của Bộ KH&CN. Tôi có thể giúp gì cho bạn về các chính sách, thủ tục?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const botResponseText = await getBotResponse(userMessage.text);
    const botMessage: Message = { sender: 'bot', text: botResponseText };
    
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-most-red text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform z-50 animate-pulse-slow"
        aria-label="Open AI Chatbot"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-1.293 1.293a1 1 0 001.414 1.414L6 12.414V15a1 1 0 001 1h6a1 1 0 001-1v-2.586l2.293 2.293a1 1 0 001.414-1.414L14 11.586V8a6 6 0 00-6-6zM5 8a5 5 0 0110 0v1H5V8z" />
          <path d="M9 16a1 1 0 011-1h0a1 1 0 011 1v1a1 1 0 01-2 0v-1z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm h-3/4 max-h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-most-navy text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-sans font-bold text-lg">Trợ lý AI - Bộ KH&CN</h3>
            <button onClick={toggleChat} className="text-white text-2xl hover:text-gray-300">&times;</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-most-red text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                  <div className="rounded-lg px-4 py-2 bg-gray-200 text-gray-500">
                      <span className="animate-pulse">Đang suy nghĩ...</span>
                  </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white rounded-b-xl">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1 border rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-most-red"
                disabled={isLoading}
              />
              <button onClick={handleSend} className="bg-most-red text-white px-5 rounded-r-full hover:bg-red-700 transition-colors" disabled={isLoading}>
                Gửi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;