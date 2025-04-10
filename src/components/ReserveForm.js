import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

export default function ReserveForm() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = {
      name: '姓名',
      people: '人数',
      product: '制作产品',
      date: '日期',
      startTime: '开始时间',
      endTime: '结束时间',
      phone: '电话',
      email: '邮箱'
    };

    const missingFields = [];
    for (const [field, label] of Object.entries(requiredFields)) {
      if (!formData[field]) {
        missingFields.push(label);
      }
    }

    if (missingFields.length > 0) {
      toast.error(`请填写以下必填项：${missingFields.join('、')}`);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    const toastId = toast.loading('正在提交预约...');

    try {
      const response = await fetch('/api/sendReserveEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch (error) {
        throw new Error('服务器响应格式错误');
      }

      if (!response.ok) {
        throw new Error(data.message || '提交失败，请稍后重试');
      }

      toast.success('预约提交成功！我们会尽快与您联系', {
        id: toastId,
        duration: 5000
      });

      // 重置表单
      setFormData({
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

    } catch (error) {
      toast.error(error.message || '提交失败，请稍后重试', {
        id: toastId,
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      {/* 表单字段 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">姓名 *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">人数 *</label>
          <input
            type="number"
            name="people"
            value={formData.people}
            onChange={handleChange}
            min="1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">制作产品 *</label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          >
            <option value="">请选择</option>
            <option value="香薰蜡烛">香薰蜡烛</option>
            <option value="大豆蜡烛">大豆蜡烛</option>
            <option value="水晶蜡烛">水晶蜡烛</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">日期 *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">开始时间 *</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">结束时间 *</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">电话 *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">微信</label>
          <input
            type="text"
            name="wechat"
            value={formData.wechat}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">邮箱 *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">特别叮嘱</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-4 rounded-md text-white font-medium ${
          isSubmitting ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
        }`}
      >
        {isSubmitting ? '提交中...' : '提交预约'}
      </motion.button>
    </motion.form>
  );
} 