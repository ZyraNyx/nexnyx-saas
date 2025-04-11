"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function DemoStartPage() {
    const router = useRouter();
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowText(true), 6500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="relative w-full h-screen bg-black text-white flex items-center justify-center">
            {/* Achtergrondvideo of afbeelding */}
            <video
                className="absolute w-full h-full object-cover z-0"
                autoPlay
                muted
                playsInline
            >
                <source src="/videos/naela-smile.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay content */}
            <div className="relative z-10 bg-black/80 p-6 rounded-2xl max-w-2xl text-center border border-zinc-700 backdrop-blur">
                <Image
                    src="/images/nexnyx-logo.png"
                    alt="NexNyx Logo"
                    width={100}
                    height={100}
                    className="mx-auto mb-6 animate-pulse"
                />

                <div className="text-2xl md:text-3xl font-medium">
                    <Typewriter
                        options={{ delay: 45 }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Welcome to your NexNyx demo.")
                                .pauseFor(800)
                                .typeString(" Before we begin, please register to receive your AI match.")
                                .start();
                        }}
                    />
                </div>

                {showText && (
                    <button
                        onClick={() => router.push("/register")}
                        className="mt-8 px-6 py-3 bg-white text-black rounded-xl text-lg font-semibold hover:scale-105 transition shadow-lg"
                    >
                        Register & Begin Demo
                    </button>
                )}
            </div>
        </main>
    );
}
