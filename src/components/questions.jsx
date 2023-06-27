import questions from "../data/questions";
import Answers from "./answers";

const Questions = () => {
  return (
    <div>
      {questions.map((question, index) => {
        return (
          <div key={question.id}>
            <p className="m-5 flex justify-center font-sans text-xl text-white">
              {question.question}
            </p>
            <Answers answers={question.answers} />
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
