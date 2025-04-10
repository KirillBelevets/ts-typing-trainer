import { GuessOutputQuestion } from "@/lib/types";

export const guessOutputQuestions: GuessOutputQuestion[] = [
  {
    id: "1",
    type: "guess-output",
    topic: "Conditional Types",
    code: `type A = "hello" extends string ? true : false;`,
    expectedOutput: "true",
    explanation: `"hello" extends string — это true, значит тип A = true.`,
  },
  {
    id: "2",
    type: "guess-output",
    topic: "Infer",
    code: `type Unwrap<T> = T extends Promise<infer U> ? U : T;
type A = Unwrap<Promise<number>>;`,
    expectedOutput: "number",
    explanation: "`infer U` вытаскивает тип из Promise<T>, значит A = number.",
  },
];
