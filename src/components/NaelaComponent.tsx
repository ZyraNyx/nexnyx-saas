// NaelaComponent.tsx – inclusief router naar VaultPages
"use client";
import { useState } from "react";
import VaultCard from "./VaultCard";
import Link from "next/link";

const questions = [
    "What is your niche or industry?",
    "What is your main goal with AI?",
    "What’s the biggest obstacle you face right now?"
];

export default function NaelaComponent() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>(["", "", ""]);
    const [response, setResponse] = useState<string | null>(null);
    const [aiMatch, setAiMatch] = useState<string | null>(null);

    const handleNext = () => {
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            askNaela();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updated = [...answers];
        updated[step] = e.target.value;
        setAnswers(updated);
    };

    const askNaela = async () => {
        const res = await fetch("/api/naela", {
            method: "POST",
            body: JSON.stringify({ answers }),
        });
        const data = await res.json();
        setResponse(data.reply);

        const lower = data.reply.toLowerCase();
        if (lower.includes("zyra")) setAiMatch("zyra");
        else if (lower.includes("aryz")) setAiMatch("aryz");
        else if (lower.includes("nova")) setAiMatch("nova");
        else if (lower.includes("lyra")) setAiMatch("lyra");
        else if (lower.includes("oryn")) setAiMatch("oryn");
        else if (lower.includes("vexa")) setAiMatch("vexa");
        else if (lower.includes("selas")) setAiMatch("selas");
        else setAiMatch(null);
    };

    const renderVaultCard = () => {
        switch (aiMatch) {
            case "zyra":
                return (
                    <VaultCard
                        name="Zyra Nyx"
                        subtitle="The Closer"
                        imgSrc="/images/zyra-vault-card.png"
                        phrase="You were chosen to lead the flow."
                    />
                );
            case "aryz":
                return (
                    <VaultCard
                        name="Aryz Veyr"
                        subtitle="The Strategist"
                        imgSrc="/images/aryz-vault-card.png"
                        phrase="Structure shall empower your rise."
                    />
                );
            case "nova":
                return (
                    <VaultCard
                        name="Nova Nyx"
                        subtitle="The Financial Architect"
                        imgSrc="/images/nova-vault-card.png"
                        phrase="Profit is a system. You’re ready to master it."
                    />
                );
            case "lyra":
                return (
                    <VaultCard
                        name="Lyra Nyx"
                        subtitle="The Creator"
                        imgSrc="/images/lyra-vault-card.png"
                        phrase="You don’t need more content. You need clarity."
                    />
                );
            case "oryn":
                return (
                    <VaultCard
                        name="Oryn Nyx"
                        subtitle="The Architect"
                        imgSrc="/images/oryn-vault-card.png"
                        phrase="Systems don’t scale. You do — with structure."
                    />
                );
            case "vexa":
                return (
                    <VaultCard
                        name="Vexa Nyx"
                        subtitle="The Community Oracle"
                        imgSrc="/images/vexa-vault-card.png"
                        phrase="Connection is currency. You’re here to lead."
                    />
                );
            case "selas":
                return (
                    <VaultCard
                        name="Selas Nyx"
                        subtitle="The Guardian"
                        imgSrc="/images/selas-vault-card.png"
                        phrase="True power needs no permission. Just protection."
                    />
                );
            default:
                return null;
        }
    };

    const renderButtonLink = () => {
        return aiMatch ? (
            <Link href={`/vault/${aiMatch}`}>
                <button className="mt-6 px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 text-white">
                    Activate {aiMatch.toUpperCase()}
                </button>
            </Link>
        ) : null;
    };

    return (
        <div className="space-y-4 max-w-lg mx-auto text-center">
            {response ? (
                <div className="bg-zinc-900 p-6 rounded-xl">
                    <h2 className="text-xl font-bold mb-2">Naela recommends:</h2>
                    <p className="text-green-400 mb-6">{response}</p>
                    {renderVaultCard()}
                    {renderButtonLink()}
                </div>
            ) : (
                <div>
                    <p className="text-zinc-300 mb-2">{questions[step]}</p>
                    <input
                        type="text"
                        value={answers[step]}
                        onChange={handleChange}
                        className="p-2 rounded bg-zinc-800 border border-zinc-700 w-full"
                        placeholder="Your answer..."
                    />
                    <button
                        onClick={handleNext}
                        className="mt-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white"
                    >
                        {step < questions.length - 1 ? "Next" : "Get Recommendation"}
                    </button>
                </div>
            )}
        </div>
    );
}