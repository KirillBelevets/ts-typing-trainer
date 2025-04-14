"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { guessOutputQuestions } from "@/data/questions/guess-output";
import { Button } from "@/components/ui/button";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function GuessOutput() {
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);

  const current = guessOutputQuestions[index];
  const [code, setCode] = useState(current.code);

  const isCorrect =
    userAnswer.trim().toLowerCase() === current.expectedOutput.toLowerCase();

  const next = () => {
    const nextIndex = (index + 1) % guessOutputQuestions.length;
    setIndex(nextIndex);
    setUserAnswer("");
    setRevealed(false);
    setCode(guessOutputQuestions[nextIndex].code);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 dark:from-zinc-950 dark:to-black text-zinc-800 dark:text-white">
      <main className="py-12 px-4 flex flex-col items-center gap-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            🧠 Guess the Output
          </h1>
          <p className="text-muted-foreground text-sm">
            Type what you think the output is and reveal the answer!
          </p>
        </div>

        <div className="w-full h-72 rounded-md overflow-hidden border dark:border-zinc-700 shadow-md">
          <MonacoEditor
            value={code}
            onChange={(v) => setCode(v || "")}
            height="100%"
            language="typescript"
            theme="vs-dark"
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              padding: { top: 10 },
              scrollbar: { vertical: "auto" },
            }}
          />
        </div>

        <input
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="border rounded-md px-4 py-2 w-full max-w-md text-sm bg-white dark:bg-zinc-800 dark:text-white dark:border-zinc-700 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="e.g. number | undefined"
        />

        {!revealed ? (
          <Button
            className="w-full sm:w-auto"
            onClick={() => setRevealed(true)}
            variant="outline"
          >
            Reveal Answer
          </Button>
        ) : (
          <div className="w-full flex flex-col items-center gap-4 text-sm">
            <div className={isCorrect ? "text-green-500" : "text-red-500"}>
              {isCorrect ? (
                "✅ Correct!"
              ) : (
                <>
                  ❌ Incorrect. You answered:{" "}
                  <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                    {userAnswer}
                  </code>
                </>
              )}
            </div>

            <div className="text-blue-500">
              ✅ Correct Output:{" "}
              <code className="bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded">
                {current.expectedOutput}
              </code>
            </div>

            <div className="w-full bg-muted dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg p-4 text-muted-foreground">
              <strong className="text-foreground block mb-1">
                💡 Explanation:
              </strong>
              <p>{current.explanation}</p>
            </div>

            <Button variant="outline" onClick={next}>
              Next Question
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
