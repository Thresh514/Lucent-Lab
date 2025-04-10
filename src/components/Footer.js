import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                delay: 2.5, // 等主图和标语动画完成后再显示
                duration: 0.8
            }
        }
    };

    const linkVariants = {
        hover: { 
            scale: 1.1,
            color: "#60a5fa", // text-blue-400
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.footer 
            className="absolute bottom-0 left-0 w-full py-6 bg-dark mt-auto"
            initial="hidden"
            animate="visible"
            variants={footerVariants}
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap justify-center text-white space-x-24">
                    <motion.div whileHover="hover" variants={linkVariants}>
                        <Link href="/faq" className="transition-colors duration-300">
                            FAQ
                        </Link>
                    </motion.div>
                    <p>|</p>
                    <motion.div whileHover="hover" variants={linkVariants}>
                        <Link href="/jijiworld" className="transition-colors duration-300">
                            吉吉世界
                        </Link>
                    </motion.div>
                    <p>|</p>
                    <motion.div whileHover="hover" variants={linkVariants}>
                        <Link href="/contact" className="transition-colors duration-300">
                            联系方式
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    );
}

