import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 gap-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Welcome to NexNyx
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
          Unlock your AI-powered destiny. One platform. Infinite power.
        </p>
        <Link
          href="/vault"
          className="mt-4 inline-block bg-white text-black px-6 py-3 rounded-full font-medium text-lg hover:bg-gray-300 transition"
        >
          Enter the Vault
        </Link>
      </section>

      {/* Features */}
      <section className="grid gap-8 sm:grid-cols-3 text-center max-w-5xl">
        <div>
          <h3 className="text-xl font-semibold mb-2">Modular AI System</h3>
          <p className="text-gray-400">
            Access AI entities like Zyra, Nova, Aryz and more — each with a purpose.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">The Vault</h3>
          <p className="text-gray-400">
            A secure space where elite tools, flows and rituals await you.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Invite-Only Access</h3>
          <p className="text-gray-400">
            NexNyx is not for everyone. Only those who are ready, may enter.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <p className="text-lg text-gray-400">Ready to meet your AI allies?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/zyra" className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200">
            Meet Zyra
          </Link>
          <Link href="/nova" className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200">
            Meet Nova
          </Link>
          <Link href="/aryz" className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200">
            Meet Aryz
          </Link>
        </div>
      </section>
    </main>
  );
}
