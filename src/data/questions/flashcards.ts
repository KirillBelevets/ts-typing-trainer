import { Flashcard } from "@/lib/types";

export const flashcards: Flashcard[] = [
  {
    id: "1",
    type: "flashcard",
    topic: "Utility Types",
    question: "What does `Partial<T>` do in TypeScript?",
    answer:
      "It makes all properties in T optional. Equivalent to `{ [K in keyof T]?: T[K] }`.",
  },
  {
    id: "2",
    type: "flashcard",
    topic: "Advanced Types",
    question: "What is `infer` used for in conditional types?",
    answer:
      "`infer` lets you introduce a new type variable to be inferred from a type. Used like: `T extends Promise<infer U> ? U : never`.",
  },
];
