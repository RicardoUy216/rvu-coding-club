import React, { useState } from "react";
import Question from "../Question/Question";
import Quiz from "../Quiz/Quiz";
function QuestionCard() {
  const [questions, setQuestions] = useState(Quiz);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  function handleQuestionAnswered(correct) {
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestion(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  }

  return (
    <main>
      <section className="card1">
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
      </section>
    </main>
  );
}

export default QuestionCard;
