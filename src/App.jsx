import "./index.css";
import questions from "./data";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  return (
    <div className="flashcards">
      {questions.map((question) => {
        return <div key={question.id}>{question.question}</div>;
      })}
    </div>
  );
}
