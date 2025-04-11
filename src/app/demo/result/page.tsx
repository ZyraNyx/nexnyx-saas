"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function DemoResultPage() {
    const searchParams = useSearchParams();
    const [remainingSpots, setRemainingSpots] = useState<number | null>(null);
    const [showSecond, setShowSecond] = useState(false);

    const answers = [
        searchParams.get("a1"),
        searchParams.get("a2"),
        searchParams.get("a3"),
    ];

    const getMatch = () => {
        if (!answers || answers.length === 0) return null;
        const combo = answers.join(" ");
        if (combo.includes("Tech")) return "oryn";
        if (combo.includes("Content")) return "lyra";
        if (combo.includes("Scaling") || combo.includes("strategy")) return "aryz";
        if (combo.includes("clients") || combo.includes("leads")) return "zyra";
        return "nova";
    };

    const match = getMatch();

    const cardData: any = {
        zyra: {
            name: "Zyra Nyx",
            image: "/images/zyra-vault-card.png",
            description:
                "Zyra converts conversations into cash. Unlock her to automate your closings.",
            message1:
                "I've reviewed your responses. Let me show you how I convert cold leads into clients.",
            message2:
                "Here’s a cold DM that turns into a sale — instantly.",
        },
        nova: {
            name: "Nova Nyx",
            image: "/images/nova-vault-card.png",
            description:
                "Nova masters your numbers. Unlock her to predict, grow and protect profit.",
            message1:
                "Let’s analyze your revenue flow and optimize your cash strategy.",
            message2:
                "Look: this cash flow template shows exactly where profit leaks.",
        },
        aryz: {
            name: "Aryz Veyr",
            image: "/images/aryz-vault-card.png",
            description:
                "Aryz designs your strategy from scratch. Unlock him for structure and scale.",
            message1:
                "Based on your answers, you need structure and direction. I’ll guide your strategy.",
            message2:
                "Here’s a growth map I’d use for your niche — fully AI-powered.",
        },
        oryn: {
            name: "Oryn Nyx",
            image: "/images/oryn-vault-card.png",
            description:
                "Oryn is your integration mastermind. Unlock him to connect everything you use.",
            message1:
                "Let me automate your tech stack so everything flows in sync.",
            message2:
                "Example: I connected Discord, Stripe & Airtable in 3 clicks.",
        },
        lyra: {
            name: "Lyra Nyx",
            image: "/images/lyra-vault-card.png",
            description:
                "Lyra creates legacy visuals and reels. Unlock her to go viral with clarity.",
            message1:
                "Your brand deserves to shine. I’ll craft visuals that make you unforgettable.",
            message2:
                "See this AI reel? Generated from your last 3 posts.",
        },
    };

    const selected = match ? cardData[match] : null;

    useEffect(() => {
        setTimeout(() => setShowSecond(true), 5000);
        // Avoid hydration mismatch
        setTimeout(() => {
            const spots = Math.floor(63 + Math.random() * 5); // 63–68
            setRemainingSpots(spots);
        }, 10);
    }, []);

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
            <Image
                src="/images/naela-nb.png"
                alt="Naela"
                width={100}
                height={100}
                className="rounded-full mb-4"
            />

            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Your AI Match is Chosen</h1>
                <p className="text-zinc-400">Naela analyzed your responses — here’s who you need most.</p>
            </div>

            {selected && (
                <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-xl max-w-xl text-center">
                    <Image
                        src={selected.image}
                        alt={selected.name}
                        width={500}
                        height={300}
                        className="mx-auto mb-4 rounded-xl"
                    />
                    <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
                    <p className="text-zinc-300 italic mb-4">{selected.description}</p>

                    <div className="bg-black border border-zinc-600 rounded-lg p-4 text-left text-sm text-zinc-400 mb-6">
                        <strong className="text-white">{selected.name.split(" ")[0]} says:</strong>
                        <div className="mt-1">
                            <Typewriter
                                options={{ delay: 40 }}
                                onInit={(typewriter) => {
                                    typewriter.typeString(selected.message1).start();
                                }}
                            />
                            {showSecond && (
                                <div className="mt-3">
                                    <strong className="text-white">{selected.name.split(" ")[0]} says:</strong>
                                    <div>
                                        <Typewriter
                                            options={{ delay: 35 }}
                                            onInit={(typewriter) => {
                                                typewriter.typeString(selected.message2).start();
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <p className="text-white text-lg mb-2 font-semibold">
                        Unlock full access now, and you’ll activate support for:
                    </p>
                    <ul className="list-disc list-inside text-zinc-400 text-sm mb-4">
                        <li>AI-Powered Strategy & Execution</li>
                        <li>Automation without complexity</li>
                        <li>Next-level content & visual identity</li>
                        <li>Revenue prediction & financial clarity</li>
                        <li>High-converting funnels & closers</li>
                        <li>...and access to all 12 AI minds</li>
                    </ul>

                    <a
                        href="https://buy.stripe.com/9AQ7ta4lm4uNaTCcN0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    >
                        Unlock Full Access – $97 Lifetime
                    </a>

                    {remainingSpots !== null && (
                        <p className="mt-4 text-sm text-zinc-500">
                            Only {remainingSpots} spots left · Access expires in 72 hours
                        </p>
                    )}
                </div>
            )}
        </main>
    );
}
