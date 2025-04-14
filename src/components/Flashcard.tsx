export function Flashcard({
  topic,
  question,
  answer,
  showAnswer,
}: {
  topic: string;
  question: string;
  answer: string;
  showAnswer: boolean;
}) {
  return (
    <div className="w-full max-w-3xl border border-gray-300 dark:border-zinc-700 rounded-xl shadow-md bg-white dark:bg-zinc-900 transition-all">
      <div className="p-6 space-y-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          {topic}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white leading-snug">
          {question}
        </h2>

        {showAnswer && (
          <div className="pt-4 mt-2 border-t border-gray-200 dark:border-zinc-700">
            <p className="text-green-600 dark:text-green-400 text-base leading-relaxed whitespace-pre-line">
              {answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
