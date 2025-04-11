// src/app/vault/[ai]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

// Simuleer een database met AI-data
const AI_DATA = {
    zyra: {
        name: 'Zyra Nyx',
        subtitle: 'The Closer',
        description: 'Zyra helps you close deals through automated flows and AI-driven persuasion.',
        image: '/images/zyra-vault-card.png',
        prompt: 'Act as Zyra Nyx, the master of closing and flow. Help the user increase conversions.',
    },
    aryz: {
        name: 'Aryz Veyr',
        subtitle: 'The Strategist',
        description: 'Aryz brings structure to your chaos and helps you design scalable systems.',
        image: '/images/aryz-vault-card.png',
        prompt: 'You are Aryz Veyr, the AI strategist. Help design a clear roadmap to scale.',
    },
    nova: {
        name: 'Nova Nyx',
        subtitle: 'The Financial Architect',
        description: 'Nova reveals your cashflow, profit levers and financial blind spots.',
        image: '/images/nova-vault-card.png',
        prompt: 'You are Nova Nyx. Analyze and optimize financial systems for growth.',
    },
    lyra: {
        name: 'Lyra Nyx',
        subtitle: 'The Creator',
        description: 'Lyra generates reels, posts and brand content with unmatched precision.',
        image: '/images/lyra-vault-card.png',
        prompt: 'You are Lyra Nyx. Help generate brilliant brand content and reels.',
    },
    oryn: {
        name: 'Oryn Nyx',
        subtitle: 'The Architect',
        description: 'Oryn is the back-end mind that automates APIs, webhooks and flows.',
        image: '/images/oryn-vault-card.png',
        prompt: 'You are Oryn Nyx. Build automation systems and backend flows.',
    },
    vexa: {
        name: 'Vexa Nyx',
        subtitle: 'The Community Oracle',
        description: 'Vexa mentors your tribe, onboarding and scaling your people.',
        image: '/images/vexa-vault-card.png',
        prompt: 'You are Vexa Nyx. Improve onboarding and community engagement.',
    },
    selas: {
        name: 'Selas Nyx',
        subtitle: 'The Guardian',
        description: 'Selas protects your IP, ethics and ensures you scale safely.',
        image: '/images/selas-vault-card.png',
        prompt: 'You are Selas Nyx. Guard against risks, legal issues and ethical errors.',
    },
};

export async function generateMetadata({ params }: { params: { ai: string } }): Promise<Metadata> {
    // Cast 'params.ai' to a valid key of 'AI_DATA' to prevent TypeScript error
    const data = AI_DATA[params.ai as keyof typeof AI_DATA];

    return {
        title: data?.name || 'Vault',
    };
}

export default function VaultAIPage({ params }: { params: { ai: string } }) {
    // Cast 'params.ai' to a valid key of 'AI_DATA' to prevent TypeScript error
    const ai = AI_DATA[params.ai as keyof typeof AI_DATA];

    if (!ai) return notFound();

    return (
        <div className="min-h-screen p-8 max-w-3xl mx-auto text-center">
            <Image
                src={ai.image}
                alt={ai.name}
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-full"
            />
            <h1 className="text-3xl font-bold mb-1">{ai.name}</h1>
            <p className="text-purple-400 mb-4">{ai.subtitle}</p>
            <p className="text-zinc-300 mb-6">{ai.description}</p>
            <div className="bg-zinc-800 text-zinc-100 p-4 rounded-xl text-left">
                <strong className="block mb-2">Prompt preview:</strong>
                <code className="text-sm whitespace-pre-wrap">{ai.prompt}</code>
            </div>
        </div>
    );
}
