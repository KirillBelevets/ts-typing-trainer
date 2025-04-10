import Link from "next/link";
import { Button } from "../src/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12 flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          TypeScript Typing Trainer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Sharpen your TypeScript knowledge one card at a time.
        </p>
      </div>

      <div className="grid gap-4 w-full max-w-xs">
        <Link href="/train/flashcard">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md transition">
            🃏 Flashcards Mode
          </Button>
        </Link>
        <Link href="/train/guess-output">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition">
            🧠 Guess the Output
          </Button>
        </Link>
        <Link href="/train/fix-error">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition">
            🧩 Fix the Type Error
          </Button>
        </Link>
      </div>
    </main>
  );
}
