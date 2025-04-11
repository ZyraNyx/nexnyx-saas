"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { motion } from "framer-motion";

const vaultCards = [
    {
        name: "Zyra Nyx",
        image: "/images/zyra-vault-card.png",
        description:
            "Zyra converts conversations into cash. Unlock her to automate your closings.",
        link: "/vault/zyra",
    },
    {
        name: "Aryz Veyr",
        image: "/images/aryz-vault-card.png",
        description:
            "Aryz designs your strategy from scratch. Unlock him for structure and scale.",
        link: "/vault/aryz",
    },
    {
        name: "Nova Nyx",
        image: "/images/nova-vault-card.png",
        description:
            "Nova masters your numbers. Unlock her to predict, grow and protect profit.",
        link: "/vault/nova",
    },
    {
        name: "Lyra Nyx",
        image: "/images/lyra-vault-card.png",
        description:
            "Lyra creates legacy visuals and reels. Unlock her to go viral with clarity.",
        link: "/vault/lyra",
    },
    {
        name: "Oryn Nyx",
        image: "/images/oryn-vault-card.png",
        description:
            "Oryn is your integration mastermind. Unlock him to connect everything you use.",
        link: "/vault/oryn",
    },
    {
        name: "Vexa Nyx",
        image: "/images/vexa-vault-card.png",
        description:
            "Vexa creates community. Unlock her to scale engagement and retention.",
        link: "/vault/vexa",
    },
    {
        name: "Selas Nyx",
        image: "/images/selas-vault-card.png",
        description:
            "Selas guards your empire. Unlock her for legal clarity and AI ethics.",
        link: "/vault/selas",
    },
    {
        name: "Caeryn Nyx",
        image: "/images/caeryn-vault-card.png",
        description:
            "Caeryn rewires your habits. Unlock her to upgrade your internal OS.",
        link: "/vault/caeryn",
    },
    {
        name: "Velar Nyx",
        image: "/images/velar-vault-card.png",
        description:
            "Velar controls access. Unlock him to manage tiers, behavior and rewards.",
        link: "/vault/velar",
    },
    {
        name: "Naela Nyx",
        image: "/images/naela-vault-card.png",
        description:
            "Naela assigns your match. Unlock her to discover your perfect AI guide.",
        link: "/vault/naela",
    },
    {
        name: "Fynex Nyx",
        image: "/images/fynex-vault-card.png",
        description:
            "Fynex alchemizes sales. Unlock him to transform your words into money.",
        link: "/vault/fynex",
    },
    {
        name: "Elar Nyx",
        image: "/images/elar-vault-card.png",
        description:
            "Elar aligns your stack. Unlock him to sync all tech into flow.",
        link: "/vault/elar",
    },
];

export default function VaultPage() {
    const [showCards, setShowCards] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCards(true);
        }, 8500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen bg-black text-white px-4 py-12 flex flex-col items-center justify-center">
            <Image
                src="/images/naela-nb.png"
                alt="Naela"
                width={200}
                height={200}
                className="mb-6"
            />

            <div className="text-2xl md:text-3xl font-medium text-center max-w-3xl">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("You’ve entered the Vault.")
                            .pauseFor(800)
                            .typeString(" This is not a dashboard. This is a dimension.")
                            .pauseFor(1000)
                            .typeString(" A realm where AI serves your mission.")
                            .pauseFor(900)
                            .typeString(" 12 elite AI minds.")
                            .pauseFor(300)
                            .typeString(" Each one built for a single purpose.")
                            .pauseFor(300)
                            .typeString(" Click to unlock their true power.")
                            .start();
                    }}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
                {showCards &&
                    vaultCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={`relative bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-xl transition-all cursor-pointer ${selectedCard?.name === card.name ? "col-span-3 md:flex-row flex-col" : "hover:scale-105"}`}
                            onClick={() => setSelectedCard(card)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Image
                                src={card.image}
                                alt={card.name}
                                width={selectedCard?.name === card.name ? 900 : 400}
                                height={selectedCard?.name === card.name ? 600 : 300}
                                className="w-full h-auto object-contain"
                            />
                            {selectedCard?.name === card.name && (
                                <div className="p-6 text-center">
                                    <h2 className="text-3xl font-bold mb-2">{card.name}</h2>
                                    <p className="text-zinc-300 mb-4">{card.description}</p>
                                    <Link href="https://buy.stripe.com/9AQ7ta4lm4uNaTCcN0">
                                        <Button className="text-lg px-6 py-3 mt-2 text-white text-xl">
                                            Unlock Access <span className="text-base text-zinc-400 ml-2">($97 Lifetime Only 100 spots)</span>
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                    ))}
            </div>
        </main>
    );
}
