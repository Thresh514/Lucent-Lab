"use client";

import React from 'react';
import ProductSpecCard from '../components/ProductSpecCard';
import SimpleNavbar from '../components/SimpleNavbar';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Product() {
  const products = [
    {
      name: "冰山",
      image: "/wht2.jpg",
      specs: ["尺寸：10cm", "材质：天然石", "制作时长：3天", "备注：可定制雕刻"]
    },
    {
      name: "水晶",
      image: "/wht3.jpg",
      specs: ["尺寸：8cm", "颜色：透明", "制作时长：5天", "注意：避免暴晒"]
    },
    {
      name: "水山",
      image: "/wht4.jpg",
      specs: ["尺寸：12cm", "工艺：激光雕刻", "适合搭配灯光", "备注：含包装盒"]
    },
    // 可以继续添加更多产品...
    {
      name: "水山",
      image: "/wht4.jpg",
      specs: ["尺寸：12cm", "工艺：激光雕刻", "适合搭配灯光", "备注：含包装盒"]
    },
    {
      name: "水山",
      image: "/wht4.jpg",
      specs: ["尺寸：12cm", "工艺：激光雕刻", "适合搭配灯光", "备注：含包装盒"]
    },
    {
      name: "水山",
      image: "/wht4.jpg",
      specs: ["尺寸：12cm", "工艺：激光雕刻", "适合搭配灯光", "备注：含包装盒"]
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Head>
        <title>Product - 吉吉烛坊</title>
        <meta name="description" content="吉吉烛坊产品展示" />
      </Head>

      <SimpleNavbar />

      <div className="container mx-auto px-4 py-12">
        {/* 标题：从左往右滑入 */}
        <motion.h2
          className="text-2xl font-light tracking-widest mb-16 text-start"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          "请选择您的专属蜡烛系列......"
        </motion.h2>

        {/* 卡片网格容器 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex justify-center"
            >
              <ProductSpecCard
                name={product.name}
                image={product.image}
                specs={product.specs}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
