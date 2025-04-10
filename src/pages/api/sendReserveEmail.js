import nodemailer from 'nodemailer';

// 创建邮件传输器
const transporter = nodemailer.createTransport({
  service: 'gmail',  // 使用gmail服务
  auth: {
    user: process.env.EMAIL_USER,     // 发件邮箱
    pass: process.env.EMAIL_PASS      // 邮箱应用专用密码
  }
});

// 商家邮箱
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL;

export default async function handler(req, res) {
  // 设置响应头
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: '只允许POST请求' });
  }

  try {
    const {
      name,
      people,
      product,
      date,
      startTime,
      endTime,
      phone,
      wechat,
      email,
      notes
    } = req.body;

    // 验证必要的字段
    if (!name || !email || !date || !startTime || !endTime || !phone || !product || !people) {
      return res.status(400).json({ success: false, message: '缺少必要信息' });
    }

    // 发送给商家的邮件（包含所有信息）
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: BUSINESS_EMAIL,
        subject: `新预约通知 - ${name}`,
        html: `
          <h2>新预约详情</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;">预约人</td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">总人数</td><td style="padding: 8px; border: 1px solid #ddd;">${people}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">制作产品</td><td style="padding: 8px; border: 1px solid #ddd;">${product}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">预约日期</td><td style="padding: 8px; border: 1px solid #ddd;">${date}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">预约时间</td><td style="padding: 8px; border: 1px solid #ddd;">${startTime} - ${endTime}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">电话号码</td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">微信号</td><td style="padding: 8px; border: 1px solid #ddd;">${wechat || '无'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">邮箱</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">特别叮嘱</td><td style="padding: 8px; border: 1px solid #ddd;">${notes || '无'}</td></tr>
          </table>
        `
      });

      // 发送给客户的邮件（只包含部分信息）
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: '吉吉烛坊 - 预约确认',
        html: `
          <h2>亲爱的${name}，您的预约已收到！</h2>
          <p>以下是您的预约详情：</p>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;">预约人</td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">制作产品</td><td style="padding: 8px; border: 1px solid #ddd;">${product}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">预约日期</td><td style="padding: 8px; border: 1px solid #ddd;">${date}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">预约时间</td><td style="padding: 8px; border: 1px solid #ddd;">${startTime} - ${endTime}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;">特别叮嘱</td><td style="padding: 8px; border: 1px solid #ddd;">${notes || '无'}</td></tr>
          </table>
          <p style="margin-top: 20px;">我们会尽快与您联系确认具体细节。如有任何问题，请随时联系我们。</p>
          <p>期待与您相见！</p>
          <div style="margin-top: 40px; padding: 20px; background-color: #f8f8f8; border-radius: 8px;">
            <h3 style="color: #333; margin-bottom: 12px;">店铺信息</h3>
            <p style="color: #666; margin: 8px 0;">营业时间：9:00 - 18:00</p>
            <p style="color: #666; margin: 8px 0;">
              地址：40 William St, Wellesley, MA 02481
              <a href="https://www.google.com/maps/dir/?api=1&destination=42.318388,-71.231981" 
                 target="_blank" 
                 style="display: inline-block; margin-left: 10px; color: #4A90E2; text-decoration: none;">
                <span style="border-bottom: 1px solid #4A90E2;">导航到这里 📍</span>
              </a>
            </p>
          </div>
        `
      });

      return res.status(200).json({ success: true, message: '预约邮件发送成功' });
    } catch (emailError) {
      console.error('邮件发送失败:', emailError);
      return res.status(500).json({ success: false, message: '邮件发送失败，请稍后重试' });
    }
  } catch (error) {
    console.error('处理请求失败:', error);
    return res.status(500).json({ success: false, message: '服务器错误，请稍后重试' });
  }
} 