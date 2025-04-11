"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DemoQuestionsPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({ a1: "", a2: "", a3: "" });

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            const { a1, a2, a3 } = answers;
            router.push(`/demo/result?a1=${a1}&a2=${a2}&a3=${a3}`);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAnswers({ ...answers, [name]: value });
    };

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
            <Image
                src="/images/naela-nb.png"
                alt="Naela"
                width={100}
                height={100}
                className="rounded-full mb-6"
            />

            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-xl max-w-xl w-full text-center">
                <h1 className="text-2xl font-bold mb-4">Let's begin your demo</h1>
                <p className="text-zinc-400 mb-6">Answer a few quick questions to find your match.</p>

                <form onSubmit={handleNext} className="space-y-6">
                    {step === 1 && (
                        <div>
                            <label className="block mb-2 text-left">What’s your biggest challenge?</label>
                            <div className="space-y-2 text-left">
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="a1"
                                        value="clients"
                                        checked={answers.a1 === "clients"}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Getting more clients
                                </label>
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="a1"
                                        value="scaling"
                                        checked={answers.a1 === "scaling"}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Scaling my systems
                                </label>
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="a1"
                                        value="content"
                                        checked={answers.a1 === "content"}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Creating consistent content
                                </label>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <label className="block mb-2 text-left">What type of support do you want?</label>
                            <div className="space-y-2 text-left">
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="a2"
                                        value="strategy"
                                        checked={answers.a2 === "strategy"}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Strategy & Structure
                                </label>
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="a2"
                                        value="automation"
                                        checked={answers.a2 === "automation"}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Automation & Systems
                                </label>
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="a2"
                                        value="branding"
                                        checked={answers.a2 === "branding"}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Visuals & Branding
                                </label>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <label className="block mb-2 text-left">Where do you want AI to help first?</label>
                            <div className="space-y-2 text-left">
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="a3"
                                        value="Tech"
                                        checked={answers.a3 === "Tech"}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    My tools & stack
                                </label>
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="a3"
                                        value="Content"
                                        checked={answers.a3 === "Content"}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    My social presence
                                </label>
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="a3"
                                        value="leads"
                                        checked={answers.a3 === "leads"}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Lead generation
                                </label>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-white text-black py-3 px-6 rounded-xl font-semibold hover:scale-105 transition"
                    >
                        {step < 3 ? "Next" : "Get Your Match"}
                    </button>
                </form>
            </div>
        </main>
    );
}
