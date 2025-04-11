// src/app/vault/lyra/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function LyraPage() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input) return;
        setLoading(true);
        try {
            const res = await fetch("/api/lyra", {
                method: "POST",
                body: JSON.stringify({ input }),
            });
            const data = await res.json();
            setResponse(data.reply);
        } catch (e) {
            setResponse("Er ging iets mis. Probeer het opnieuw.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
            <Image
                src="/images/lyra-nyx.jpg"
                alt="Lyra Nyx"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg mb-6"
            />
            <h1 className="text-4xl font-bold">Lyra Nyx</h1>
            <p className="text-purple-400 mb-4">The Creator</p>
            <p className="text-zinc-400 max-w-xl text-center mb-6">
                Lyra generates reels, posts and brand content with unmatched precision.
            </p>

            <div className="w-full max-w-xl">
                <textarea
                    className="w-full p-3 rounded bg-zinc-800 border border-zinc-600 text-white mb-4"
                    rows={4}
                    placeholder="Type your request for Lyra..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={handleSend}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded w-full mb-4"
                >
                    {loading ? "Generating..." : "Ask Lyra"}
                </button>
                {response && (
                    <div className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl whitespace-pre-line">
                        {response}
                    </div>
                )}
            </div>
        </div>
    );
}
