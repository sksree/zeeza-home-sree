// components/QuestionWizard.tsx
import { useState } from "react";

export type Question = {
  id: string;
  prompt: string;
  type: "text" | "select" | "radio";
  options?: string[];
};

type Props = {
  questions: Question[];
  open: boolean;
  onClose: () => void;
  onFinish: (answers: Record<string, string>) => void;
};

export default function Questions({ questions, open, onClose, onFinish }: Props) {
  const total = questions.length;
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  if (!open) return null;

  const current = questions[index];
  const completedCount = Object.keys(answers).filter(k => answers[k] !== "").length;
  const percent = Math.round((completedCount / total) * 100);

  function setAnswer(id: string, value: string) {
    setAnswers(prev => ({ ...prev, [id]: value }));
  }

  function handleNext() {
    if (!answers[current.id] || answers[current.id].trim() === "") return;
    setIndex(i => Math.min(i + 1, total - 1));
  }

  function handleBack() {
    setIndex(i => Math.max(i - 1, 0));
  }

  function handleSubmit() {
    if (!answers[current.id] || answers[current.id].trim() === "") return;
    onFinish(answers);
    setIndex(0);
    setAnswers({});
  }

  return (
   <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">

      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* modal */}
      <div className="relative z-10 h-[500px] w-[700px] rounded-2xl bg-white p-6 shadow-2xl">
        {/* header + progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Tell us about your requirements</h3>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-md px-3 py-2 text-base hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          {/* progress bar container */}
          <div className="mt-4">
            <div className="h-3 w-full rounded-full bg-gray-200">
              <div
                role="progressbar"
                aria-valuenow={percent}
                aria-valuemin={0}
                aria-valuemax={100}
                className="h-3 rounded-full transition-all duration-300"
                style={{ width: `${percent}%`, background: "linear-gradient(90deg,#4f46e5,#06b6d4)" }}
              />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {completedCount} of {total} completed — {percent}%
            </div>
          </div>
        </div>

        {/* question */}
        <div className="mb-6">
          <label className="mb-3 block text-lg  font-bold text-blue-700">{current.prompt}</label>

          {current.type === "text" && (
            <input
              value={answers[current.id] ?? ""}
              onChange={(e) => setAnswer(current.id, e.target.value)}
              className="w-full rounded-md border px-3 py-3 text-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
          )}

          {current.type === "select" && (
            <select
              value={answers[current.id] ?? ""}
              onChange={(e) => setAnswer(current.id, e.target.value)}
              className="w-full rounded-md border px-3 py-3 text-lg"
            >
              <option value="">Choose...</option>
              {current.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          )}

          {current.type === "radio" && (
            <div className="space-y-3 mt-2">
              {current.options?.map(opt => (
                <label key={opt} className="flex items-center gap-4 text-lg">
                  <input
                    type="radio"
                    name={current.id}
                    checked={answers[current.id] === opt}
                    onChange={() => setAnswer(current.id, opt)}
                    className="h-5 w-5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* footer buttons */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="rounded-md border px-4 py-2 text-base disabled:opacity-50"
              disabled={index === 0}
            >
              Back
            </button>
            {index < total - 1 ? (
              <button
                onClick={handleNext}
                className="rounded-md bg-indigo-600 px-5 py-2 text-base font-medium text-white disabled:opacity-60"
                disabled={!answers[current.id] || answers[current.id].trim() === ""}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="rounded-md bg-green-600 px-5 py-2 text-base font-medium text-white disabled:opacity-60"
                disabled={!answers[current.id] || answers[current.id].trim() === ""}
              >
                Finish
              </button>
            )}
          </div>

          <div className="text-base text-gray-500">
            Step {index + 1} / {total}
          </div>
        </div>
      </div>
    </div>
  );
}
