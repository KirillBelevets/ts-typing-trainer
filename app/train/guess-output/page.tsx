"use client";

import { useState } from "react";
import { guessOutputQuestions } from "@/data/questions/guess-output";
import { Button } from "@/components/ui/button";
import MonacoEditor from "@monaco-editor/react";

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
    <main className="p-6 flex flex-col items-center gap-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center">🧠 Guess the Output</h1>

      <div className="w-full h-64 border rounded-md overflow-hidden">
        <MonacoEditor
          value={code}
          onChange={(v) => setCode(v || "")}
          height="300px"
          language="typescript"
        />
      </div>

      <input
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className="border rounded p-2 w-full max-w-md"
        placeholder="What is the type of A?"
      />

      {!revealed ? (
        <Button onClick={() => setRevealed(true)}>Reveal Answer</Button>
      ) : (
        <div className="text-center space-y-2">
          <p className={isCorrect ? "text-green-600" : "text-red-600"}>
            {isCorrect
              ? "✅ Correct!"
              : `❌ Incorrect. You answered: "${userAnswer}"`}
          </p>
          <p className="text-blue-700">
            ✅ Correct output: <strong>{current.expectedOutput}</strong>
          </p>
          <p className="text-gray-700">{current.explanation}</p>
          <Button onClick={next} className="mt-4">
            Next
          </Button>
        </div>
      )}
    </main>
  );
}
