"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VaultEntry() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/vault");
        }, 7000); // na 7 seconden automatisch door naar de Vault

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center">
            <video
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/videos/vault-opening.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
