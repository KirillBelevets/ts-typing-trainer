export type QuestionType = "flashcard" | "guess-output" | "fix-error";

export interface Flashcard {
  id: string;
  type: "flashcard";
  question: string;
  answer: string;
  topic: string;
}

export interface GuessOutputQuestion {
  id: string;
  type: "guess-output";
  topic: string;
  code: string;
  expectedOutput: string;
  explanation: string;
}

export interface FixErrorQuestion {
  id: string;
  type: "fix-error";
  topic: string;
  brokenCode: string;
  explanation: string;
}
