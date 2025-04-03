import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center relative bg-black">
      {/* 主要内容区 */}
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
        {/* 中央蜡烛图片区域 */}
        <div className="relative mb-16 mt-8">
          <div 
            className="relative w-64 h-64"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 蜡烛图片 - 这里用了一个占位符，您需要替换为真实图片 */}
            <div className="w-full h-full flex items-center justify-center bg-black rounded-full overflow-hidden cursor-pointer">
              <div className="text-8xl">🕯️</div>
              
              {/* 悬停时显示的标语 */}
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full transition-all duration-300">
                  <p className="text-white text-2xl font-bold text-center px-4">
                    "Not just a CANDLE"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* 中央标语 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            "Not just a CANDLE"
          </h2>
        </div>
        
        {/* 立即预约按钮 */}
        <div className="text-center mb-12">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            立即预约
          </button>
          
        </div>
      </div>
    </div>
  );
} 