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
        className="relative bg-white rounded-t-full overflow-hidden shadow-md w-full max-w-sm aspect-[3/5] transition-all duration-500 cursor-pointer"
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
            <h2 className="text-3xl text-black font-bold">{name}</h2>
            <ul
            className={`transition-opacity duration-500 ${
                hovered ? "opacity-100" : "opacity-0"
            } text-black space-y-4 text-center`}
            >
            {specs.map((item, idx) => (
                <li key={idx}>• {item}</li>
            ))}
            </ul>
        </div>
    </div>
    );
}
