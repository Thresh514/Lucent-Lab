import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SimpleNavbar from '../components/SimpleNavbar';
import { useState } from 'react';

// Toast 组件
const Toast = ({ message }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
  >
    <div className="flex items-center space-x-2">
      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
      <span>{message}</span>
    </div>
  </motion.div>
);

export default function Reserve() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    people: '',
    product: '',
    date: '',
    startTime: '',
    endTime: '',
    phone: '',
    wechat: '',
    email: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // 表单验证
    const requiredFields = {
      name: '预约人',
      people: '总人数',
      product: '制作产品',
      date: '日期',
      startTime: '开始时间',
      endTime: '结束时间',
      phone: '电话号码',
      email: '邮箱'
    };

    const emptyFields = Object.entries(requiredFields)
      .filter(([field]) => !formData[field])
      .map(([, label]) => label);

    if (emptyFields.length > 0) {
      setSubmitStatus({
        type: 'error',
        message: `请填写以下必要信息：${emptyFields.join('、')}`
      });
      return;
    }

    setIsSubmitting(true);
    setShowToast(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/sendReserveEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('解析响应JSON时出错:', jsonError);
        throw new Error('服务器响应格式错误');
      }

      if (response.ok && data.success) {
        // 跳转到成功页面
        router.push('/reserveSuccess');
      } else {
        throw new Error(data.message || '提交失败，请稍后重试');
      }
    } catch (error) {
      setShowToast(false);
      setSubmitStatus({
        type: 'error',
        message: error.message || '发送失败，请稍后重试'
      });
      console.error('提交表单时出错:', error);
    } finally {
      setIsSubmitting(false);
      setShowToast(false);
    }
  };

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
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center">
              <label className="text-xl w-24">预约人<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 p-2 bg-gray-900"
                placeholder="请填写您的姓名"
              />
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">总人数<span className="text-red-500">*</span></label>
              <div className="flex-1 flex items-center">
                <input
                  type="number"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  className="flex-1 p-2 bg-gray-900"
                  placeholder="如果大于一人，和小伙伴一起填一份就够！"
                />
              </div>
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">制作产品<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="flex-1 p-2 bg-gray-900"
                placeholder="只能选一种哦"
              />
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">日期时间<span className="text-red-500">*</span></label>
              <div className="flex-1 flex items-center gap-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-1/3 p-2 bg-gray-900"
                />
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="flex-1 p-2 bg-gray-900"
                  />
                  <span className="text-2xl">到</span>
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className="flex-1 p-2 bg-gray-900"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">电话号码<span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 p-2 bg-gray-900"
                placeholder="请填写您的电话号码"
              />
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">微信号</label>
              <input
                type="text"
                name="wechat"
                value={formData.wechat}
                onChange={handleChange}
                className="flex-1 p-2 bg-gray-900"
                placeholder="选填"
              />
            </div>

            <div className="flex items-center">
              <label className="text-xl w-24">邮件<span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 p-2 bg-gray-900"
                placeholder="请填写您的邮箱"
              />
            </div>

            <div className="flex">
              <label className="text-xl w-24 mt-2">特别叮嘱</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="flex-1 p-2 bg-gray-900 h-24"
                placeholder="选填：填写您的特殊要求或需要注意的事项"
              />
            </div>

            {submitStatus.message && (
              <div className={`flex items-center ${submitStatus.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                <div className="w-24"></div>
                <p>{submitStatus.message}</p>
              </div>
            )}

            <div className="flex items-center">
              <div className="w-24"></div>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-32 h-12 bg-blue-600 text-white rounded-md text-xl hover:bg-blue-700 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? '提交中...' : '提 交'}
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

      {/* Toast消息 */}
      <AnimatePresence>
        {showToast && (
          <Toast message="正在发送预约信息，请勿关闭页面..." />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
