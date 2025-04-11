"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // Fake login logic for demo
        if (email === "test@nexnyx.com" && password === "vault123") {
            router.push("/vault");
        } else {
            setError("Invalid credentials. Try again or purchase access.");
        }
    };

    return (
        <main className="relative w-full h-screen flex items-center justify-center bg-black text-white overflow-hidden">
            <video
                className="absolute w-full h-full object-cover z-0"
                autoPlay
                muted
                playsInline
            >
                <source src="/videos/velar-login.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative z-10 bg-black/70 p-8 rounded-2xl max-w-md w-full border border-zinc-800 backdrop-blur-md text-center shadow-lg">
                <Image
                    src="/images/nexnyx-logo.png"
                    alt="NexNyx Logo"
                    width={100}
                    height={100}
                    className="mx-auto mb-4 animate-pulse drop-shadow-xl"
                />
                <h1 className="text-2xl font-bold mb-2">Enter Your Vault</h1>
                <p className="text-sm text-zinc-400 mb-6">
                    Access for verified users only.
                </p>

                <form onSubmit={handleLogin} className="space-y-4 text-left">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-zinc-900 border-zinc-700 mt-1"
                        />
                    </div>

                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-zinc-900 border-zinc-700 mt-1"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                    <Button type="submit" className="w-full mt-4 text-lg">
                        Access the Vault
                    </Button>
                </form>
            </div>
        </main>
    );
}
