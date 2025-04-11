"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const aiMembers = [
  { name: "Zyra Nyx", image: "/images/zyra-nyx.jpg" },
  { name: "Aryz Veyr", image: "/images/aryz-nyx.jpg" },
  { name: "Nova Nyx", image: "/images/nova-nyx.jpg" },
  { name: "Lyra Nyx", image: "/images/lyra-nyx.jpg" },
  { name: "Oryn Nyx", image: "/images/oryn-nyx.jpg" },
  { name: "Vexa Nyx", image: "/images/vexa-nyx.jpg" },
  { name: "Selas Nyx", image: "/images/selas-nyx.jpg" },
  { name: "Caeryn Nyx", image: "/images/caeryn-nyx.jpg" },
  { name: "Velar Nyx", image: "/images/velar-nyx.jpg" },
  { name: "Naela Nyx", image: "/images/naela-nyx.jpg" },
  { name: "Fynex Nyx", image: "/images/fynex-nyx.jpg" },
  { name: "Elar Nyx", image: "/images/elar-nyx.jpg" },
];

export default function Homepage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12 space-y-6">
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/nexnyx-logo.png"
          alt="NexNyx Logo"
          width={220}
          height={220}
          className="drop-shadow-lg animate-pulse"
        />
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to NexNyx
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-center max-w-3xl text-zinc-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Discover 12 elite AI minds that will transform your business — forever.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {aiMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.05 }}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={120}
              height={120}
              className="rounded-xl shadow-lg"
            />
            <p className="mt-2 text-sm text-zinc-400">{member.name}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-2xl md:text-3xl font-semibold text-center text-white mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <Typewriter
          options={{ delay: 75 }}
          onInit={(typewriter) => {
            typewriter.typeString("Next Level. Next Nyx.").start();
          }}
        />
      </motion.div>

      <motion.div
        className="mt-10 flex flex-col items-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <Link href="/vault">
          <Button className="text-lg px-8 py-4 rounded-2xl shadow-md">
            Enter the Vault
          </Button>
        </Link>

        <Link href="/login">
          <Button variant="outline" className="text-md px-6 py-3 border-zinc-600">
            Enter Your Vault
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
