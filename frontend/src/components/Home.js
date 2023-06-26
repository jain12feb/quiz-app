import React from "react";
import { Link } from "react-router-dom";

function Home() {
  // const [questions, setQuestions] = useState([]);

  // const allQuestions = async () => {
  //   const { data } = await axios.get("/questions");

  //   setQuestions(data.questions);
  //   return data;
  // };

  // // Accepts the array and key
  // const groupBy = (array, key) => {
  //   // Return the end result
  //   return array.reduce((result, currentValue) => {
  //     // If an array already present for key, push it to the array. Else create an array and push the object
  //     (result[currentValue[key]] = result[currentValue[key]] || []).push(
  //       currentValue
  //     );
  //     // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
  //     return result;
  //   }, {}); // empty object is the initial value for result object
  // };

  // const type = groupBy(questions, "level");

  // console.log("Type", type);

  // useEffect(() => {
  //   allQuestions();
  // }, []);

  return (
    <div className="home">
      <div className="intro-box">
        <div className="intro-texts">
          <h1 className="intro-title">QUIZ APP</h1>
          <p className="intro-description">Choose the quiz you want to solve</p>
        </div>
        <div className="intro-icon">
          <i className="bi bi-question-circle"></i>
        </div>
      </div>

      <div className="level-boxes">
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">Javascript</h2>
            <span>Easy</span>
          </div>
          <Link className="level-link" to={`/quiz/easy`}>
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">Javascript</h2>
            <span>Moderate</span>
          </div>
          <Link className="level-link" to={`/quiz/moderate`}>
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        {/* <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">A2</h2>
            <span>Level</span>
          </div>
          <Link className="level-link" to="/quiz/A2">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">B1</h2>
            <span>Level</span>
          </div>
          <Link className="level-link" to="/quiz/B1">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">B2</h2>
            <span>Level</span>
          </div>
          <Link className="level-link" to="/quiz/B2">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">C1</h2>
            <span>Level</span>
          </div>
          <Link className="level-link" to="/quiz/C1">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">C2</h2>
            <span>Level</span>
          </div>
          <Link className="level-link" to="/quiz/C2">
            <span>Start Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
