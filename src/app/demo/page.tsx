"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DemoEntry() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email && password) {
            sessionStorage.setItem("nexnyx_demo_user", JSON.stringify({ name, email }));
            router.push("/demo/start");
        }
    };

    return (
        <main className="relative w-full h-screen bg-black text-white flex items-center justify-center">
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                playsInline
            >
                <source src="/videos/naela-smile.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative z-10 bg-black/70 border border-zinc-800 backdrop-blur-md p-8 rounded-xl max-w-md w-full text-center space-y-6">
                <div className="text-xl font-medium text-zinc-100">
                    <Typewriter
                        options={{ delay: 40 }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Welcome to your NexNyx demo.")
                                .pauseFor(800)
                                .typeString(" Before we begin, please register to receive your AI match.")
                                .start();
                        }}
                    />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="bg-zinc-900 border-zinc-700 mt-1"
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-zinc-900 border-zinc-700 mt-1"
                        />
                    </div>

                    <Button type="submit" className="w-full mt-2">
                        Enter the Demo
                    </Button>
                </form>
            </div>
        </main>
    );
}
