import React, { useState, useEffect } from "react";
import { useQuizContext } from "../context/QuizContext";
import { useNavigate, useParams } from "react-router-dom";

function Quiz() {
  const {
    questionData,
    currentQuestion,
    setCurrentQuestion,
    setQuesLevel,
    quesLevel,
  } = useQuizContext();

  const { level } = useParams();

  const [isNextButton, setIsNextButton] = useState(false);
  const [isResultButton, setIsResultButton] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [time, setTime] = useState(30);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [isResult, setIsResult] = useState(false);

  const selectAnswer = (index) => {
    if (currentQuestion === questionData.count - 1) {
      setIsNextButton(false);
      setIsResultButton(true);
    } else {
      setIsNextButton(true);
    }
    setSelectedIndex(index);
  };

  const nextQuestion = (index) => {
    if (currentQuestion >= questionData.count - 1) {
      addAnswer(index);
      setCurrentQuestion(0);
      setIsResult(true);
    } else {
      setTime(30);
      setIsNextButton(false);
      addAnswer(index);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedIndex();
    }
  };

  const addAnswer = (index) => {
    const selectedAnswer =
      index !== null
        ? questionData.questions[currentQuestion].answers[index]
        : {
            answer: "Süre Bitti",
            trueAnswer: false,
          };
    const newAnswers = [...selectedAnswers, selectedAnswer];
    setSelectedAnswers(newAnswers);
  };

  useEffect(() => {
    setQuesLevel(level);
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    time <= 5 ? setIsErrorMessage(true) : setIsErrorMessage(false);
    if (time < 0) {
      nextQuestion(null);
    }
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [level, time]);

  const navigate = useNavigate();

  if (isResult) {
    return navigate("/result", {
      state: {
        answers: selectedAnswers,
        questions: questionData.questions,
      },
    });
  }

  return (
    <div>
      <div className="progress-box">
        <div className="progress-top">
          <div className="progress-texts">
            <h2 className="progress-title">Quiz Progress</h2>
            <p className="progress-description">
              You are solving {quesLevel} Level words quiz
            </p>
          </div>
          <div className="progress-icon">
            <i className="bi bi-bar-chart"></i>
          </div>
        </div>
        <div className="progress-bottom">
          <div
            className="progress-circle"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              "--value": ((currentQuestion + 1) / questionData.count) * 100,
            }}
          >
            <span className="progress-big">{currentQuestion + 1}</span>
            <span className="progress-mini">/{questionData.count}</span>
          </div>
          <p className="progress-detail">
            You solve the {currentQuestion + 1}. question out of a total of{" "}
            {questionData.count} questions
          </p>
        </div>
      </div>
      <div className="question-box">
        <div className="question-text">
          <h2 className="question-title">Question: {currentQuestion + 1}</h2>
          <h3 className="question">
            {questionData.questions[currentQuestion].question}
          </h3>
        </div>
        <div
          className="progress-circle time"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ "--value": (time / 30) * 100 }}
        >
          <span className="time">{time}</span>
        </div>
      </div>

      <div className="answers-boxes">
        {questionData.questions[currentQuestion].answers.map(
          (answer, index) => {
            return (
              <label
                onClick={() => selectAnswer(index)}
                key={index}
                htmlFor={index}
                className={
                  selectedIndex === index
                    ? "answer-label selected"
                    : "answer-label"
                }
              >
                {answer.option}
                <input type="radio" name="answer" id={index} />
              </label>
            );
          }
        )}
      </div>

      {isNextButton ? (
        <div className="next">
          <button
            onClick={() => nextQuestion(selectedIndex)}
            type="button"
            className="next-btn"
          >
            Next Question
            <div className="icon">
              <i className="bi bi-arrow-right"></i>
            </div>
          </button>
        </div>
      ) : null}

      {isResultButton ? (
        <div className="next">
          <button
            onClick={() => nextQuestion(selectedIndex)}
            type="button"
            className="next-btn result-btn"
          >
            See Results
            <div className="icon">
              <i className="bi bi-bar-chart"></i>
            </div>
          </button>
        </div>
      ) : null}

      {isErrorMessage ? (
        <div className="message animation">
          <div className="icon">
            <i className="bi bi-exclamation-triangle"></i>
          </div>
          <span>You must hurry up!</span>
        </div>
      ) : null}
    </div>
  );
}

export default Quiz;
