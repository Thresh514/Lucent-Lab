import Link from 'next/link';

export default function Footer() {

    return (
        <footer className="absolute bottom-0 left-0 w-full py-6 border-t border-gray-300 bg-black mt-auto">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap justify-center text-white space-x-24">
                    <Link href="#faq" className="hover:text-blue-400 transition-colors duration-300">
                        FAQ
                    </Link>
                    <p>|</p>
                    <Link href="#contact" className="hover:text-blue-400 transition-colors duration-300">
                        联系方式
                    </Link>
                    <p>|</p>
                    <Link href="#jijiworld" className="hover:text-blue-400 transition-colors duration-300">
                        吉吉世界
                    </Link>
                    <p>|</p>
                    <Link href="#gallery" className="text-yellow-300 hover:scale-[110%] transition-all duration-300">
                        作品集
                    </Link>
                </div>
            </div>
        </footer>
    );
}

