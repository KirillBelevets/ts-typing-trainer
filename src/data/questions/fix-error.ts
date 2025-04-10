import { FixErrorQuestion } from "@/lib/types";

export const fixErrorQuestions: FixErrorQuestion[] = [
  {
    id: "1",
    type: "fix-error",
    topic: "Generics",
    brokenCode: `function identity<T>(arg: T): T {
  return arg.length; // ❌ Property 'length' does not exist on type 'T'
}`,
    explanation: `Нужно ограничить T: \`<T extends { length: number }>\` для доступа к \`length\`.`,
  },
  {
    id: "2",
    type: "fix-error",
    topic: "Type Narrowing",
    brokenCode: `function double(x: number | string) {
  return x * 2; // ❌ Operator '*' cannot be applied to type 'string'
}`,
    explanation: `Нужно сделать проверку типа: \`if (typeof x === "number") return x * 2\` и иначе обрабатывать строку.`,
  },
];
