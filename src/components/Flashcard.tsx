import { Card, CardContent } from "./ui/card";

type Props = {
  question: string;
  answer: string;
  topic: string;
  showAnswer: boolean;
};

export const Flashcard = ({ question, answer, topic, showAnswer }: Props) => {
  return (
    <Card className="max-w-xl w-full">
      <CardContent className="p-6">
        <h2 className="text-sm text-muted-foreground mb-2">{topic}</h2>
        <p className="text-xl font-semibold">{question}</p>
        {showAnswer && (
          <div className="mt-4 border-t pt-4 text-green-600">
            <p>{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
