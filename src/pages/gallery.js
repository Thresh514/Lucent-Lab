import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SimpleNavbar from '../components/SimpleNavbar';
import SimpleFooter from '../components/SimpleFooter';

export default function Gallery() {
  // 两行作品数据，每个作品包含ID、标题、颜色和内容
const topRowWorks = [
    { id: 1, title: 'ABC...', color: 'bg-pink-500', content: '作品1详细内容...', revealedImgPath: '/door.jpg', imgPath: '/wht1.jpg' },
    { id: 2, title: 'BCD...', color: 'bg-orange-500', content: '作品2详细内容...', revealedImgPath: '/door.jpg', imgPath: '/wht2.jpg' },
    { id: 3, title: 'EFG...', color: 'bg-cyan-500', content: '作品3详细内容...', revealedImgPath: '/door.jpg', imgPath: '/wht3.jpg'},
    { id: 4, title: 'ABC...', color: 'bg-pink-500', content: '作品4详细内容...', revealedImgPath: '/door.jpg', imgPath: '/wht4.jpg'},
    { id: 5, title: 'BCD...', color: 'bg-orange-500', content: '作品5详细内容...', revealedImgPath: '/door.jpg', imgPath: '/wht5.jpg'},
];

const bottomRowWorks = [
    { id: 6, title: 'NOP...', color: 'bg-amber-700', content: '作品6详细内容...', revealedImgPath: '/door.jpg', imgPath: '/wht6.jpg' },
    { id: 7, title: 'KLM...', color: 'bg-yellow-500', content: '作品7详细内容...', revealedImgPath: '/door.jpg', imgPath: '/wht7.jpg'},
    { id: 8, title: 'HIJ...', color: 'bg-green-500', content: '作品8详细内容...', revealedImgPath: '/door.jpg', imgPath: '/wht8.jpg'},
    { id: 9, title: 'ABC...', color: 'bg-pink-500', content: '作品9详细内容...', revealedImgPath: '/door.jpg', imgPath: '/wht9.jpg'},
    { id: 10, title: 'BCD...', color: 'bg-orange-500', content: '作品10详细内容...', revealedImgPath: '/door.jpg', imgPath: '/wht10.jpg'},
];

  // 记录哪些作品被点击并显示
  const [revealedWorks, setRevealedWorks] = useState({});

  // 点击作品时显示内容
  const toggleReveal = (id) => {
    setRevealedWorks(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 顶部标题动画变体
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // 左侧入场作品动画 - 从左往右依次淡入
  const leftWorkVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({ 
      opacity: 1, 
      transition: { 
        duration: 2.0,
        delay: i * 0.3,  // 保持原来的索引顺序
        ease: "easeOut"
      } 
    })
  };

  // 右侧入场作品动画 - 从右往左依次淡入
  const rightWorkVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({ 
      opacity: 1, 
      transition: { 
        duration: 2.0,
        delay: (4 - i) * 0.3,  // 反转索引顺序，使最右边的先出现
        ease: "easeOut"
      } 
    })
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark text-white overflow-hidden">
      <Head>
        <title>作品集 - 吉吉烛坊</title>
        <meta name="description" content="吉吉烛坊作品集展示" />
      </Head>

      <SimpleNavbar />

      <main className="flex flex-col max-w-6xl mx-auto w-full">
        {/* 标题部分 */}
        <motion.div 
          className="text-center mb-4"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <p className="text-3xl text-start text-white font-light tracking-wider mt-8 mb-12">"请打开任意一扇门，探索......" </p>
        </motion.div>
        {/* 第一行作品 - 从左往右渐显 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {topRowWorks.map((work, index) => (
            <motion.div
              key={work.id}
              custom={index}
              variants={leftWorkVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="overflow-hidden h-64 relative cursor-pointer"
                onClick={() => toggleReveal(work.id)}
              >
                {/* 作品内容区域 */}
                <div className="w-full h-full relative">
                  {/* 初始图片 - 始终显示 */}
                  <div className="absolute inset-0 w-full h-full">
                    <div className="relative w-full h-full">
                      <Image 
                        src={work.imgPath} 
                        alt={work.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>

                {/* 遮罩层 - 点击后消失，显示revealedImgPath */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center z-20"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: revealedWorks[work.id] ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: revealedWorks[work.id] ? 'none' : 'auto' }}
                >
                  {/* 遮罩层图片 */}
                  <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50">
                    <div className="relative w-full h-full">
                      <Image 
                        src={work.revealedImgPath} 
                        alt={work.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              <p className="text-center mt-2 text-sm">{work.title}</p>
            </motion.div>
          ))}
        </div>

        {/* 第二行作品 - 从右往左渐显 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {bottomRowWorks.map((work, index) => (
            <motion.div
              key={work.id}
              custom={index}
              variants={rightWorkVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="overflow-hidden h-64 relative cursor-pointer"
                onClick={() => toggleReveal(work.id)}
              >
                {/* 作品内容区域 */}
                <div className="w-full h-full relative">
                  {/* 初始图片 - 始终显示 */}
                  <div className="absolute inset-0 w-full h-full">
                    <div className="relative w-full h-full">
                      <Image 
                        src={work.imgPath} 
                        alt={work.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>

                {/* 遮罩层 - 点击后消失，显示revealedImgPath */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center z-20"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: revealedWorks[work.id] ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ pointerEvents: revealedWorks[work.id] ? 'none' : 'auto' }}
                >
                    {/* 遮罩层图片 */}
                    <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50">
                      <div className="relative w-full h-full">
                        <Image 
                          src={work.revealedImgPath} 
                          alt={work.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                </motion.div>
                </div>
              <p className="text-center mt-2 text-sm">{work.title}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <SimpleFooter />
    </div>
  );
}
