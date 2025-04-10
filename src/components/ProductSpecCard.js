import Image from "next/image";
import { useState } from "react";

export default function ProductSpecCard({
    name,
    image,
    specs,
    }) {
const [hovered, setHovered] = useState(false);

return (
    <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative bg-white rounded-t-full overflow-hidden w-[500px] h-[800px] transition-all duration-500 cursor-pointer mb-20"
        >
        {/* 背景图层（始终显示） */}
        <Image
            src={image}
            alt={name}
            fill
            className={`object-contain transition-all duration-500 ${hovered ? "blur-sm opacity-40" : "blur-0 opacity-100"}`}
        />

        <div className="absolute inset-0 bg-white bg-opacity-30 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 space-y-8">
            <ul
            className={`transition-opacity duration-500 ${
                hovered ? "opacity-100" : "opacity-0"
            } text-black space-y-4 text-center`}
            >
                <li className="text-3xl font-bold mb-6">{name}</li>
                {specs.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                ))}
            </ul>
        </div>
    </div>
    );
}
