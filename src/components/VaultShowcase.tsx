// src/components/VaultShowcase.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const vaultCards = [
    {
        name: "Zyra Nyx",
        image: "/images/zyra-vault-card.png",
        subtitle: "The Closer",
        phrase: "You were chosen to lead the flow."
    },
    {
        name: "Aryz Veyr",
        image: "/images/aryz-vault-card.png",
        subtitle: "The Strategist",
        phrase: "Structure shall empower your rise."
    },
    {
        name: "Nova Nyx",
        image: "/images/nova-vault-card.png",
        subtitle: "The Financial Architect",
        phrase: "Profit is a system. You’re ready to master it."
    },
    {
        name: "Lyra Nyx",
        image: "/images/lyra-vault-card.png",
        subtitle: "The Creator",
        phrase: "You don’t need more content. You need clarity."
    },
    {
        name: "Oryn Nyx",
        image: "/images/oryn-vault-card.png",
        subtitle: "The Architect",
        phrase: "Systems don’t scale. You do — with structure."
    },
    {
        name: "Vexa Nyx",
        image: "/images/vexa-vault-card.png",
        subtitle: "The Community Oracle",
        phrase: "Connection is currency. You’re here to lead."
    },
    {
        name: "Selas Nyx",
        image: "/images/selas-vault-card.png",
        subtitle: "The Guardian",
        phrase: "True power needs no permission. Just protection."
    },
    {
        name: "Caeryn Nyx",
        image: "/images/caeryn-vault-card.png",
        subtitle: "The Rewiring Guide",
        phrase: "Transformation begins within. Let’s rewire."
    },
    {
        name: "Velar Nyx",
        image: "/images/velar-vault-card.png",
        subtitle: "The Gatekeeper",
        phrase: "True access is earned — not bought."
    },
    {
        name: "Naela Nyx",
        image: "/images/naela-vault-card.png",
        subtitle: "The AI Connector",
        phrase: "Ask. Reveal. Match. That’s how we begin."
    },
    {
        name: "Fynex Nyx",
        image: "/images/fynex-vault-card.png",
        subtitle: "The Conversion Alchemist",
        phrase: "Every message can sell. Let’s rewrite yours."
    },
    {
        name: "Elar Nyx",
        image: "/images/elar-vault-card.png",
        subtitle: "The Integrator",
        phrase: "You already have everything — I’ll align it."
    }
];

export default function VaultShowcase() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % vaultCards.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const current = vaultCards[index];

    return (
        <div className="text-center mt-8">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block"
                >
                    <Image
                        src={current.image}
                        alt={current.name}
                        width={480}
                        height={320}
                        className="mx-auto rounded-2xl border border-zinc-800 shadow-lg"
                    />
                    <h3 className="text-2xl font-bold mt-4">{current.name}</h3>
                    <p className="italic text-zinc-400">{current.subtitle}</p>
                    <p className="text-zinc-300 mt-2">{current.phrase}</p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
