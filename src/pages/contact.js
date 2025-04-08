"use client";

import Image from "next/image";
import Head from "next/head";
import SimpleNavbar from "../components/SimpleNavbar";
import MyMap from "../components/GoogleMap";

export default function Contactus() {
  return (
    <div className="min-h-screen overflow-hidden bg-dark text-white">
      <Head>
        <title>contact - 吉吉烛坊</title>
        <meta name="description" content="contact us" />
      </Head>

      <SimpleNavbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-screen mt-40">
            <div className="text-xl flex flex-col items-center justify-center space-y-8">
              <div className="flex flex-row items-center justify-center">
                <Image
                  src="/wechat.svg"
                  alt="wechat"
                  width={100}
                  height={100}
                  className="mr-8"
                />
                <p>wechat...</p>
                </div>
              <div className="flex flex-row items-center justify-center">
                <Image
                  src="/email.svg"
                  alt="email"
                  width={100}
                  height={100}
                  className="mr-8"
                />
                <p>hetong...</p>
              </div>
              
              <div className="flex flex-row items-center justify-center">
                <Image
                  src="/ins.svg"
                  alt="ins"
                  width={90}
                  height={90}
                  className="mr-8"
                />
                <p>GiGi...</p>
              </div>

              <div className="flex flex-row items-center justify-center">
                <Image
                  src="/xiaohongshu.svg"
                  alt="xiaohongshu"
                  width={90}
                  height={90}
                  className="mr-8"
                />
                <p>吉吉...</p>
              </div>
            </div>

            <div className="flex items-center justify-center pr-16">
            <Image
              src="/contactus.jpg"
              alt="phonenumber"
              width={600}
              height={600}
              className=""
            />
            </div>

            <div className="text-lg p-6 fort-lighter space-y-12 flex flex-col items-start justify-center"> 
              <p >营业时间：9:00 - 18:00</p>
              <p >地址：40 William St, Wellesley, MA 02481</p>
              <MyMap />
            </div>


        </div>
      </div>
  );
}
