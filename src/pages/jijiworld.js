import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import SimpleNavbar from '../components/SimpleNavbar';

export default function JijiWorld() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const centerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const sideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col bg-dark text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Head>
        <title>吉吉世界 - 吉吉烛坊</title>
        <meta name="description" content="吉吉烛坊的世界" />
      </Head>

      <SimpleNavbar />

      <main className="flex mx-36 mt-24">
        {/* 左侧文字 */}
        <motion.div 
          className="w-1/3 flex items-center justify-center"
          variants={sideVariants}
        >
          <div className="w-3/4 text-right">
            <p className="text-2xl font-light leading-relaxed">
              在这里，每一支蜡烛都承载着一个故事，
              每一缕香气都诉说着一段回忆。
              我们用心制作，用爱传递，
              让每一刻都充满温暖与美好。
            </p>
          </div>
        </motion.div>

        {/* 中间部分 */}
        <motion.div 
          className="w-1/3 flex flex-col items-center justify-end relative bottom-[-18rem]"
          variants={centerVariants}
        >
          {/* 上方文字 */}
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-bold">关 于 吉 吉 烛 坊</h2>
          </div>

          {/* 中间图片 */}
          <div className="relative mb-8">
            <Image
              src="/jijiworld.jpg"
              alt="吉吉世界"
              width={300}
              height={300}
            />
          </div>
        </motion.div>

        {/* 右侧文字 */}
        <motion.div 
          className="w-1/3 flex items-center justify-center"
          variants={sideVariants}
        >
          <div className="w-3/4">
            <p className="text-2xl font-light leading-relaxed">
              吉吉烛坊，一个充满创意与温暖的空间。
              在这里，您可以亲手制作属于自己的蜡烛，
              感受创作的乐趣，体验手作的温度。
            </p>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
