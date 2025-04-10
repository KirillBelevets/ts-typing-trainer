"use client";

import { useState } from "react";
import { flashcards } from "@/data/questions/flashcards";
import { Flashcard } from "@/components/Flashcard";
import { Button } from "@/components/ui/button";

export default function FlashcardTrainer() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const current = flashcards[index];

  const next = () => {
    setShowAnswer(false);
    setIndex((i) => (i + 1) % flashcards.length);
  };

  return (
    <main className="p-6 flex flex-col items-center gap-6">
      <Flashcard
        topic={current.topic}
        question={current.question}
        answer={current.answer}
        showAnswer={showAnswer}
      />
      <div className="flex gap-4">
        {!showAnswer && (
          <Button onClick={() => setShowAnswer(true)}>Reveal Answer</Button>
        )}
        {showAnswer && <Button onClick={next}>Next Question</Button>}
      </div>
    </main>
  );
}
