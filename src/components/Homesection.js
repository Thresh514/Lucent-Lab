import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // 创建动画控制器
  const candleControls = useAnimation();
  const sloganControls = useAnimation();
  const buttonControls = useAnimation();
  
  // 定义动画序列
  useEffect(() => {
    const sequence = async () => {
      // 第一步：蜡烛旋转入场
      await candleControls.start({
        rotate: 360,
        scale: 1,
        opacity: 1,
        transition: { 
          duration: 1.2, 
          ease: "easeOut" 
        }
      });
      
      // 启动蜡烛弹跳动画
      candleControls.start({
        y: [0, -15, 0],
        transition: { 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 2,
          ease: "easeInOut"
        }
      });
      
      // 第二步：标语淡入
      await sloganControls.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.8, 
          ease: "easeOut" 
        }
      });
      
      // 第三步：按钮淡入
      await buttonControls.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.8, 
          ease: "easeOut" 
        }
      });
    };
    
    sequence();
  }, [candleControls, sloganControls, buttonControls]);

  return (
    <div className="min-h-screen flex flex-col items-center relative bg-dark text-white">
      {/* 主要内容区 */}
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto mt-24">
        {/* 中央蜡烛图片区域 */}
        
          <motion.div 
            className="relative w-[400px] h-[400px]"
            
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={candleControls}
          >
            {/* 蜡烛图片 - 这里用了一个占位符，您需要替换为真实图片 */}
            <Link href="/product" className="w-full h-full flex items-center justify-center bg-white rounded-full overflow-hidden cursor-pointer">
              <Image src="/wht5.jpg" alt="蜡烛" width={400} height={400} />
            </Link>
          </motion.div>
        
        
        {/* 中央标语 */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={sloganControls}
        >
          <h2 className="text-lg font-semibold tracking-wider text-white">
            "Not just a CANDLE"
          </h2>
        </motion.div>
        
        {/* 立即预约按钮 */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={buttonControls}
        >
          <Link 
            href="/reserve"
            className="text-white hover:text-shadow-glow hover:text-yellow-200 p-6 text-3xl tracking-widest transition-colors duration-300"
          >
            立 即 预 约
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 