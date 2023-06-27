import questions from "../data/questions";
import Answers from "./answers";

console.log(questions);

const Questions = () => {
  return (
    <div>
      {questions.map((question, index) => {
        return (
          <div key={index}>
            <p>{question.question}</p>
            <Answers answers={question.answers} />
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
