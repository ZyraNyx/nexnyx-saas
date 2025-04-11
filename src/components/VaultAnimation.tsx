// src/components/VaultAnimation.tsx
"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function VaultAnimation() {
    return (
        <div className="w-full max-w-2xl mx-auto mt-8">
            <Player
                autoplay
                loop
                src="/animations/vault-open.json"
                style={{ height: "300px", width: "300px" }}
            />
        </div>
    );
}
