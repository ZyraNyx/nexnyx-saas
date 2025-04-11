'use client'; // Zorg ervoor dat dit bovenaan staat voor een Client Component

import { useState } from "react";

export default function PayPage() {
    const [email, setEmail] = useState("");
    const [tier, setTier] = useState("Vault Tier 1");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handlePay = async () => {
        setLoading(true);
        setError("");

        try {
            // Verzend de betalingsgegevens naar de backend (Velar)
            const res = await fetch("http://localhost:5001/api/pay/success", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, tier }),
            });

            const data = await res.json();

            if (res.ok) {
                // Na succesvolle betaling, stuur de gebruiker door naar de registratiepagina met de token
                window.location.href = data.redirect;  // URL met de token in de query string
            } else {
                setError("Something went wrong.");
                console.error(data);
            }
        } catch (err) {
            setError("Server error.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "4rem", fontFamily: "sans-serif" }}>
            <h1>Unlock the Vault</h1>
            <p>Enter your email to proceed:</p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                style={{ padding: "0.5rem", width: "250px", marginBottom: "1rem" }}
            />
            <br />
            <button onClick={handlePay} disabled={loading || !email}>
                {loading ? "Processing..." : "Enter Vault"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
