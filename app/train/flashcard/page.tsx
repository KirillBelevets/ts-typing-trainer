"use client";

import { useEffect, useState } from "react";
import { flashcards } from "@/data/questions/flashcards";
import { Flashcard } from "@/components/Flashcard";
import { Button } from "@/components/ui/button";

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function FlashcardTrainer() {
  const [shuffled, setShuffled] = useState(flashcards);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShuffled(shuffle(flashcards));
  }, []);

  const next = () => {
    setShowAnswer(false);
    setIndex((i) => (i + 1) % shuffled.length);
  };

  const current = shuffled[index];

  return (
    <main className="min-h-screen py-12 px-4 flex flex-col items-center gap-8 bg-black text-green-400">
      <Flashcard
        topic={current.topic}
        question={current.question}
        answer={current.answer}
        showAnswer={showAnswer}
      />

      <div className="flex gap-4">
        {!showAnswer ? (
          <Button
            onClick={() => setShowAnswer(true)}
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-2 rounded shadow-neon transition focus:outline-none focus:ring-0 focus:border-none"
          >
            Reveal Answer
          </Button>
        ) : (
          <Button
            onClick={next}
            className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow-lg transition focus:outline-none focus:ring-0 focus:border-none"
          >
            Next Question
          </Button>
        )}
      </div>
    </main>
  );
}
