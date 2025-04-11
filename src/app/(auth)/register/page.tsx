'use client'; // Zorg ervoor dat dit bovenaan staat voor een Client Component

import { useState, useEffect } from 'react';

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tokenFromUrl = urlParams.get('token');  // Verkrijg de token uit de URL

        if (tokenFromUrl) {
            setToken(tokenFromUrl);
        }
    }, []);

    const handleRegister = async () => {
        if (!token) {
            setError("Invalid or missing token.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const res = await fetch('http://localhost:5001/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, token }),
            });

            const data = await res.json();

            if (res.ok) {
                window.location.href = '/dashboard';  // Redirect naar dashboard na succesvolle registratie
            } else {
                setError(data.message || "Registration failed");
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
            <h1>Register</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                style={{ padding: "0.5rem", width: "250px", marginBottom: "1rem" }}
            />
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                style={{ padding: "0.5rem", width: "250px", marginBottom: "1rem" }}
            />
            <br />
            <button onClick={handleRegister} disabled={loading || !email || !password}>
                {loading ? "Registering..." : "Create Account"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
