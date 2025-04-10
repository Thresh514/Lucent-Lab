"use client";

import React from 'react';
import ProductSpecCard from '../components/ProductSpecCard';
import SimpleNavbar from '../components/SimpleNavbar';
import Head from 'next/head';
import { motion } from 'framer-motion';
import SimpleFooter from '../components/SimpleFooter';

export default function Product() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Head>
        <title>Product - 吉吉烛坊</title>
        <meta name="description" content="contact us" />
      </Head>

      <SimpleNavbar />

      <div className="max-w-7xl mx-auto mt-12 px-4">
        {/* 标题：从左往右滑入 */}
        <motion.h2
          className="mb-24 text-2xl tracking-widest"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          "请选择您的专属蜡烛系列......"
        </motion.h2>

        {/* 卡片容器 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* 卡片1 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ProductSpecCard
              name="冰山"
              image="/wht2.jpg"
              specs={["尺寸：10cm", "材质：天然石", "制作时长：3天", "备注：可定制雕刻"]}
            />
          </motion.div>

          {/* 卡片2 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <ProductSpecCard
              name="水晶"
              image="/wht3.jpg"
              specs={["尺寸：8cm", "颜色：透明", "制作时长：5天", "注意：避免暴晒"]}
            />
          </motion.div>

          {/* 卡片3 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <ProductSpecCard
              name="水山"
              image="/wht4.jpg"
              specs={["尺寸：12cm", "工艺：激光雕刻", "适合搭配灯光", "备注：含包装盒"]}
            />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ProductSpecCard
              name="冰山"
              image="/wht2.jpg"
              specs={["尺寸：10cm", "材质：天然石", "制作时长：3天", "备注：可定制雕刻"]}
            />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ProductSpecCard
              name="冰山"
              image="/wht2.jpg"
              specs={["尺寸：10cm", "材质：天然石", "制作时长：3天", "备注：可定制雕刻"]}
            />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ProductSpecCard
              name="冰山"
              image="/wht2.jpg"
              specs={["尺寸：10cm", "材质：天然石", "制作时长：3天", "备注：可定制雕刻"]}
            />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ProductSpecCard
              name="冰山"
              image="/wht2.jpg"
              specs={["尺寸：10cm", "材质：天然石", "制作时长：3天", "备注：可定制雕刻"]}
            />
          </motion.div>
          
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ProductSpecCard
              name="冰山"
              image="/wht2.jpg"
              specs={["尺寸：10cm", "材质：天然石", "制作时长：3天", "备注：可定制雕刻"]}
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ProductSpecCard
              name="冰山"
              image="/wht2.jpg"
              specs={["尺寸：10cm", "材质：天然石", "制作时长：3天", "备注：可定制雕刻"]}
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ProductSpecCard
              name="冰山"
              image="/wht2.jpg"
              specs={["尺寸：10cm", "材质：天然石", "制作时长：3天", "备注：可定制雕刻"]}
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <ProductSpecCard
              name="冰山"
              image="/wht2.jpg"
              specs={["尺寸：10cm", "材质：天然石", "制作时长：3天", "备注：可定制雕刻"]}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
