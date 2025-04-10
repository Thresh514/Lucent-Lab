import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import SimpleNavbar from '../components/SimpleNavbar';

export default function Reserve() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
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
        <title>预约 - 吉吉烛坊</title>
        <meta name="description" content="预约吉吉烛坊的制作时间" />
      </Head>

      <SimpleNavbar />

      <main className="flex mt-24 max-w-7xl mx-auto space-x-24">
        {/* 左侧表单区域 - 4/5 */}
        <div className="w-2/3 flex">
          <form className="space-y-6">
            <div className="flex items-center">
              <label className="text-xl w-24">预约人：</label>
              <input
                type="text"
                className="flex-1 p-2 bg-gray-900"
                placeholder="请填写您的姓名"
              />
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">总人数：</label>
              <div className="flex-1 flex items-center">
                <input
                  type="number"
                  className="flex-1 p-2 bg-gray-900"
                  placeholder="如果大于一人，和小伙伴一起填一份就够！"
                />
              </div>
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">制作产品：</label>
              <input
                type="text"
                className="flex-1 p-2 bg-gray-900"
                placeholder="只能选一种哦"
              />
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">日期时间：</label>
              <div className="flex-1 flex items-center gap-4">
                <input
                  type="date"
                  className="w-1/3 p-2 bg-gray-900"
                  placeholder="请选择日期"
                />
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="time"
                    className="flex-1 p-2 bg-gray-900"
                  />
                  <span className="text-2xl">到</span>
                  <input
                    type="time"
                    className="flex-1 p-2 bg-gray-900"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">电话号码：</label>
              <input
                type="tel"
                className="flex-1 p-2 bg-gray-900"
                placeholder="请填写您的电话号码"
              />
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">微信号：</label>
              <input
                type="text"
                className="flex-1 p-2 bg-gray-900"
                placeholder="请填写您的微信号"
              />
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">邮件：</label>
              <input
                type="email"
                className="flex-1 p-2 bg-gray-900"
                placeholder="请填写您的邮箱"
              />
            </div>

            <div className="flex">
              <label className="text-xl w-24 mt-2">特别叮嘱：</label>
              <textarea
                className="flex-1 p-2 bg-gray-900 h-24"
                placeholder="填写您的特殊要求或需要注意的事项"
              />
            </div>

            <div className="flex items-center">
              <div className="w-24"></div>
              <button
                type="button"
                    className="w-32 h-12 bg-blue-600 text-white rounded-md text-xl hover:bg-blue-700 transition-colors"
              >
                提 交
              </button>
            </div>
          </form>
        </div>

        {/* 右侧信息区域 - 1/5 */}
        <div className="w-1/3 flex flex-col">
          {/* 上半部分 - 图片 */}
          <div className="h-1/2 flex items-start justify-start">
            <Image
              src="/jijiworld.jpg"
              alt="吉吉烛坊吉祥物"
              width={250}
              height={250}
            />
          </div>

          {/* 下半部分 - 说明文字 */}
          <div className="h-1/2 flex flex-col ml-4 justify-center text-gray-400">
            <p className="mb-4">请填写您的预约信息，</p>
            <p className="mb-4">任何问题请见</p>
            <p className="mb-4">"联系方式"</p>
            <p>联系我们：❤️</p>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
