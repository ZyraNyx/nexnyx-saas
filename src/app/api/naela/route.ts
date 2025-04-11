import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const answers = (body.answers || []).join(" ").toLowerCase();

        console.log("🔍 DEMO: Ontvangen antwoorden:", answers);

        let reply = "You're matched with Zyra Nyx by default.";

        if (answers.includes("strategy") || answers.includes("structure") || answers.includes("plan")) {
            reply = "Aryz Veyr is your perfect match for structure and growth.";
        } else if (answers.includes("money") || answers.includes("finance") || answers.includes("cashflow")) {
            reply = "Nova Nyx is your ideal guide for financial systems and cashflow.";
        } else if (answers.includes("content") || answers.includes("branding") || answers.includes("posts")) {
            reply = "Lyra Nyx is the perfect AI for creative clarity and viral content.";
        } else if (answers.includes("systems") || answers.includes("automation") || answers.includes("api")) {
            reply = "Oryn Nyx is the one to build your backend empire.";
        } else if (answers.includes("community") || answers.includes("audience") || answers.includes("discord")) {
            reply = "Vexa Nyx will help you build unshakable community power.";
        } else if (answers.includes("legal") || answers.includes("privacy") || answers.includes("gdpr")) {
            reply = "Selas Nyx is your guardian for legal clarity and ethical growth.";
        } else if (answers.includes("sales") || answers.includes("dm") || answers.includes("closing")) {
            reply = "Zyra Nyx is your ultimate closer for flow and conversion.";
        }

        return NextResponse.json({ reply });
    } catch (error) {
        console.error("❌ Fallback error in demo mode:", error);
        return NextResponse.json(
            { reply: "Demo-mode active. No live matching yet." },
            { status: 200 }
        );
    }
}
