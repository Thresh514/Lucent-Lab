import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import SimpleNavbar from '../components/SimpleNavbar';

export default function ReserveSuccess() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Head>
        <title>预约成功 - 吉吉烛坊</title>
        <meta name="description" content="预约成功确认页面" />
      </Head>

      <SimpleNavbar />

      <main className="flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-6xl mb-8">🎉</div>
          <h1 className="text-4xl font-light mb-8">预约成功！</h1>
          <p className="text-xl text-gray-400 mb-4">
            我们已经收到您的预约信息
          </p>
          <p className="text-xl text-gray-400 mb-8">
            确认邮件已发送至您的邮箱，请注意查收
          </p>
          
          <div className="space-x-4">
            <Link 
              href="/"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              返回首页
            </Link>
            <Link 
              href="/product"
              className="inline-block px-8 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
            >
              查看更多产品
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
