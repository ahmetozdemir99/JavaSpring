import { useState } from "react";
import classes from "./Forum.module.css";
import { Link } from "react-router-dom";
export default function Forum() {
  const questions = [
    {
      user: "emre",
      question: "Soru 1",
      topic: "Beslenme",
      pet: "Dog",
      answers: ["adsad", "daadsd"],
    },
    { user: "ali", question: "Soru 2", topic: "Aşı", pet: "Bird", answers: [] },
    {
      user: "mehmet",
      question: "Soru 3",
      topic: "Beslenme",
      pet: "Dog",
      answers: ["adsads"],
    },
  ];
  const [currentQuestions, setCurrentQuestions] = useState(questions);
  const [displayQuestions, setDisplayQuestions] = useState(questions);
  const [currentTopic, setTopic] = useState("Beslenme");
  const [currentPet, setPet] = useState("Cat");
  const [answer, setAnswer] = useState("");
  function topicHandler(e) {
    setTopic(e.target.value);
  }
  function petHandler(e) {
    setPet(e.target.value);
  }
  function filterHandler() {
    console.log(currentPet);
    console.log(currentTopic);
    console.log(currentQuestions);
    const filteredQuestions = currentQuestions.filter((question) => {
      return question.topic === currentTopic && question.pet === currentPet;
    });
    setDisplayQuestions(filteredQuestions);
  }
  function answerHandler(index) {
    const updatedQuestions = [...currentQuestions];
    updatedQuestions[index].answers.push(answer);
    setCurrentQuestions(updatedQuestions);
    setAnswer();
  }
  function answerChangeHandler(e) {
    setAnswer(e.target.value);
  }
  return (
    <div className={classes.mainContainer}>
      <Link className={classes.addQuestionButton} to="/addQuestion">
        Add A Question
      </Link>
      <div className={classes.container}>
        <div className={classes.divContainer}>
          <label className={classes.label}>Add A Title</label>
          <select onChange={topicHandler}>
            <option>Diet</option>
            <option>Vaccination</option>
            <option>Behaviour</option>
            <option>Vet Recommendations</option>
          </select>
        </div>
        <div className={classes.divContainer}>
          <label className={classes.label}>Kind</label>
          <select onChange={petHandler}>
            <option>Cat</option>
            <option>Dog</option>
            <option>Bird</option>
          </select>
        </div>

        <button className={classes.applyFilterButton} onClick={filterHandler}>
          Apply Filters
        </button>
        <ul className={classes.ul} type="none">
          {displayQuestions.map((item, index) => (
            <li className={classes.li} key={index}>
              {item.user} {item.question} {item.topic} {item.pet}
              <label>Answers</label>
              {item.answers?.length > 0 &&
                item.answers.map((answer, index) => (
                  <p key={index}>{answer}</p>
                ))}
              <label>Enter your message:</label>
              <textarea
                onChange={answerChangeHandler}
                id={`text-${index}`}
                key={`text-${index}`}
                rows="4"
                cols="50"
                className={classes.inputDetails}
              ></textarea>
              <button
                className={classes.applyFilterButton}
                onClick={() => answerHandler(index)}
              >
                Send
              </button>
            </li>
          ))}
          {displayQuestions.length == 0 && <h1>No Questions Found</h1>}
        </ul>
      </div>
    </div>
  );
}
