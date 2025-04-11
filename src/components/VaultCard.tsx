"use client";
import Image from "next/image";

interface VaultCardProps {
    name: string;
    subtitle: string;
    imgSrc: string;
    phrase: string;
}

export default function VaultCard({ name, subtitle, imgSrc, phrase }: VaultCardProps) {
    return (
        <div className="mt-10 flex flex-col items-center justify-center text-center">
            <div className="relative w-[300px] h-[450px] sm:w-[360px] sm:h-[520px] md:w-[420px] md:h-[600px] rounded-2xl shadow-xl overflow-hidden border border-purple-700 bg-zinc-900">
                <Image
                    src={imgSrc}
                    alt={name}
                    fill
                    className="object-cover opacity-80 transition duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{name}</h2>
                    <p className="text-sm sm:text-base text-purple-400">{subtitle}</p>
                    <p className="mt-3 text-sm text-zinc-300 italic">“{phrase}”</p>
                </div>
            </div>
        </div>
    );
}
