"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { fixErrorQuestions } from "@/data/questions/fix-error";

export default function FixErrorTrainer() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [code, setCode] = useState(fixErrorQuestions[0].brokenCode);
  const [loading, setLoading] = useState(false);

  async function checkErrorsHandler() {
    setLoading(true);
    try {
      const res = await fetch("/api/check-errors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      setFixed(data.errors.length === 0);
      setRevealed(true);
    } catch (err) {
      console.error("Check failed", err);
      setFixed(false);
      setRevealed(true);
    } finally {
      setLoading(false);
    }
  }

  const next = () => {
    const nextIndex = (index + 1) % fixErrorQuestions.length;
    setIndex(nextIndex);
    setCode(fixErrorQuestions[nextIndex].brokenCode);
    setRevealed(false);
    setFixed(false);
  };

  const question = fixErrorQuestions[index];

  return (
    <main className="min-h-screen py-10 px-6 flex flex-col items-center gap-6 max-w-4xl mx-auto bg-gradient-to-b from-zinc-950 to-black text-white">
      <div className="text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">
          🧩 Fix the Type Error
        </h1>
        <p className="text-muted-foreground text-base">
          Try to fix the TypeScript error manually below.
        </p>
      </div>

      <label htmlFor="code-editor" className="sr-only">
        Code editor
      </label>

      <textarea
        id="code-editor"
        className="w-full h-72 font-mono text-base rounded-lg p-4 border bg-zinc-900 text-white border-zinc-700 shadow-md focus:ring-2 focus:ring-blue-500 transition-all"
        spellCheck={false}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <div className="w-full flex flex-col items-center gap-4">
        {!revealed ? (
          <Button
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            onClick={checkErrorsHandler}
            disabled={loading}
          >
            {loading ? "Checking..." : "Check Solution"}
          </Button>
        ) : fixed ? (
          <div className="text-green-600 font-semibold text-center">
            ✅ No TypeScript errors — Well done!
          </div>
        ) : (
          <div className="text-red-600 font-semibold text-center">
            ❌ Still contains errors. Try again.
          </div>
        )}

        {revealed && (
          <div className="w-full bg-muted dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg p-4 text-sm text-muted-foreground">
            <strong className="text-foreground">💡 Explanation:</strong>
            <p className="mt-2 whitespace-pre-line">{question.explanation}</p>
          </div>
        )}

        {revealed && (
          <Button variant="outline" className="mt-2" onClick={next}>
            Next Question
          </Button>
        )}
      </div>
    </main>
  );
}
