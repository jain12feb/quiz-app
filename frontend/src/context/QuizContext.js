import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const QuizContext = createContext();

function Provider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quesLevel, setQuesLevel] = useState("");
  const [questionData, setQuestionData] = useState([]);

  const fetchQuestions = async (level) => {
    const { data } = await axios.get(`/questions/${level}`);

    setQuestionData(data);
    return data.questions;
  };

  useEffect(() => {
    fetchQuestions(quesLevel);
  }, [quesLevel, setQuesLevel]);

  const sharedValuesAndMethods = {
    questionData,
    currentQuestion,
    setCurrentQuestion,
    setQuesLevel,
    quesLevel,
  };

  return (
    <QuizContext.Provider value={sharedValuesAndMethods}>
      {children}
    </QuizContext.Provider>
  );
}

const useQuizContext = () => useContext(QuizContext);
export { Provider, useQuizContext };
export default QuizContext;
