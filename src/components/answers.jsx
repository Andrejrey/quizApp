const Answers = ({ answers }) => {
  return (
    <div>
      <button className="bg-orange-300 m-2">{answers[0]}</button>
      <button className="bg-orange-300 m-2">{answers[1]}</button>
      <button className="bg-orange-300 m-2">{answers[2]}</button>
      <button className="bg-orange-300 m-2">{answers[3]}</button>
    </div>
  );
};

export default Answers;
