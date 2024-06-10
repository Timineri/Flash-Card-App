import "./index.css";
import questions from "./data";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleclick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => {
        return (
          <div
            key={question.id}
            className={question.id === selectedId ? "selected" : ""}
            onClick={() => {
              handleclick(question.id);
            }}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        );
      })}
    </div>
  );
}
