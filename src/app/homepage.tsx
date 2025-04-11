"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const aiMembers = [
    {
        name: "Zyra Nyx",
        image: "/images/zyra-nyx.jpg",
        subtitle: "The Closer",
        phrase: "You were chosen to lead the flow."
    },
    {
        name: "Aryz Veyr",
        image: "/images/aryz-nyx.jpg",
        subtitle: "The Strategist",
        phrase: "Structure shall empower your rise."
    },
    {
        name: "Nova Nyx",
        image: "/images/nova-nyx.jpg",
        subtitle: "The Financial Architect",
        phrase: "Profit is a system. You’re ready to master it."
    },
    {
        name: "Lyra Nyx",
        image: "/images/lyra-nyx.jpg",
        subtitle: "The Creator",
        phrase: "You don’t need more content. You need clarity."
    },
    {
        name: "Oryn Nyx",
        image: "/images/oryn-nyx.jpg",
        subtitle: "The Architect",
        phrase: "Systems don’t scale. You do — with structure."
    },
    {
        name: "Vexa Nyx",
        image: "/images/vexa-nyx.jpg",
        subtitle: "The Community Oracle",
        phrase: "Connection is currency. You’re here to lead."
    },
    {
        name: "Selas Nyx",
        image: "/images/selas-nyx.jpg",
        subtitle: "The Guardian",
        phrase: "True power needs no permission. Just protection."
    },
    {
        name: "Caeryn Nyx",
        image: "/images/caeryn-nyx.jpg",
        subtitle: "The Rewiring Guide",
        phrase: "Transformation begins within. Let’s rewire."
    },
    {
        name: "Velar Nyx",
        image: "/images/velar-nyx.jpg",
        subtitle: "The Gatekeeper",
        phrase: "True access is earned — not bought."
    },
    {
        name: "Naela Nyx",
        image: "/images/naela-nyx.jpg",
        subtitle: "The AI Connector",
        phrase: "Ask. Reveal. Match. That’s how we begin."
    },
    {
        name: "Fynex Nyx",
        image: "/images/fynex-nyx.jpg",
        subtitle: "The Conversion Alchemist",
        phrase: "Every message can sell. Let’s rewrite yours."
    },
    {
        name: "Elar Nyx",
        image: "/images/elar-nyx.jpg",
        subtitle: "The Integrator",
        phrase: "You already have everything — I’ll align it."
    }
];

export default function Homepage() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % aiMembers.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentMember = aiMembers[current];

    return (
        <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center space-y-6">
            <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/images/nexnyx-logo.png"
                    alt="NexNyx Logo"
                    width={200}
                    height={200}
                    className="drop-shadow-lg animate-pulse"
                />
            </motion.div>

            <motion.h1
                className="text-4xl md:text-6xl font-bold text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Welcome to NexNyx
            </motion.h1>

            <motion.div
                key={currentMember.name}
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src={currentMember.image}
                    alt={currentMember.name}
                    width={300}
                    height={300}
                    className="mx-auto rounded-2xl shadow-lg border border-zinc-800"
                />
                <h2 className="text-2xl font-bold mt-4">{currentMember.name}</h2>
                <p className="text-zinc-400 italic">{currentMember.subtitle}</p>
                <p className="text-zinc-300 mt-2">{currentMember.phrase}</p>
            </motion.div>

            <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
            >
                <Link href="/vault">
                    <Button className="text-lg px-8 py-4 rounded-2xl shadow-md">
                        Enter the Vault
                    </Button>
                </Link>
            </motion.div>
        </main>
    );
}
