import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SimpleNavbar from '../components/SimpleNavbar';
import SimpleFooter from '../components/SimpleFooter';

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqItems = [
    {
      question: "如何预约制作蜡烛？",
      answer: "您可以通过我们的官方网站或直接联系客服进行预约。我们提供一对一的教学服务，确保您能获得最佳的制作体验。"
    },
    {
      question: "制作蜡烛需要多长时间？",
      answer: "基础蜡烛制作通常需要1-2小时，具体时间取决于您选择的蜡烛类型和复杂程度。我们建议预留2-3小时的时间，以确保有充足的时间完成作品。"
    },
    {
      question: "可以定制特殊形状的蜡烛吗？",
      answer: "是的，我们提供定制服务。您可以提前与我们沟通您的需求，我们会根据您的要求设计并制作独特的蜡烛。"
    },
    {
      question: "蜡烛制作需要准备什么？",
      answer: "您只需要带上好心情来就可以了！我们会提供所有必要的材料和工具，包括蜡材、模具、香精、染料等。"
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  const contentVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
        opacity: { duration: 0.2 }
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] },
        opacity: { duration: 0.1 }
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
        <title>常见问题 - 吉吉烛坊</title>
        <meta name="description" content="吉吉烛坊常见问题解答" />
      </Head>

      <SimpleNavbar />

      <main className="flex flex-1">
        {/* 左侧大图 */}
        <motion.div 
          className="w-1/2 relative flex items-center justify-center"
          variants={itemVariants}
        >
          <Image
            src="/faq.jpg"
            alt="蜡烛制作展示"
            width={520}
            height={520}
            style={{ objectFit: 'cover' }}
            className="opacity-90"
          />
        </motion.div>

        {/* 右侧问题列表 */}
        <motion.div 
          className="w-1/2 p-12 flex flex-col justify-center"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl font-light mb-12 text-shadow-glow"
            variants={itemVariants}
          >
            常见问题
          </motion.h1>
          
          <motion.div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="border-b border-white/20 rounded-lg overflow-hidden"
                variants={itemVariants}
              >
                <motion.div
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExpand(index)}
                >
                  <h2 className="text-xl font-medium">{item.question}</h2>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.div>
                </motion.div>

                <AnimatePresence initial={false}>
                  {expandedIndex === index && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={contentVariants}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-300">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>

      
    </motion.div>
  );
}
