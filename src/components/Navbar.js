import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-dark w-full px-2 pt-6 pb-8">
            <div className="">
                <div className="flex justify-center items-center">
                    <div className="p-4">
                        <Link href="/" className="px-8 py-4 text-shadow-glow rounded-sm bg-transparent text-white text-4xl font-bold tracking-widest">
                            吉 吉 烛 坊
                        </Link>
                    </div>
                    
                    <div className="absolute right-12 top-10 text-xl font-lighter">
                        <Link href="/gallery" className="text-yellow-300 transition-all duration-300">
                            作品集
                        </Link>
                    </div>
                    
                    {/* 移动端菜单按钮 */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 dark:text-gray-300 focus:outline-none"
                        >
                            {isMenuOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
                
                {/* 移动端菜单 */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-2">
                        <div className="flex flex-col space-y-4">
                            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                                首页
                            </Link>
                            <div className="text-center border-2 border-blue-400 dark:border-blue-600 rounded-full px-4 py-1">
                                <span className="text-lg font-medium text-blue-500 dark:text-blue-400">『 香香烛坊 』</span>
                                <span className="text-sm ml-2 text-gray-500 dark:text-gray-400">点亮灵感</span>
                            </div>
                            
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
