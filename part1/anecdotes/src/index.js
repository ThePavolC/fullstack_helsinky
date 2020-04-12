import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>{text}</button>
);

const Section = ({ heading, anecdote, votes }) => (
  <>
    <h1>{heading}</h1>
    <div>{anecdote}</div>
    <div>has {votes} votes</div>
  </>
);

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);

  const initialArray = Array(anecdotes.length).fill(0);
  const [votes, setVoteState] = useState(initialArray);

  const nextButtonClickHandler = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const voteButtonClickHandler = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVoteState(copyVotes);
  };

  const mostVotesPosition = votes.indexOf(Math.max(...votes));

  return (
    <>
      <Section
        heading="Anecdote of the day"
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
      />
      <Button clickHandler={voteButtonClickHandler} text={"vote"} />
      <Button clickHandler={nextButtonClickHandler} text={"next anecdote"} />
      <Section
        heading="Anecodte with most votest"
        anecdote={anecdotes[mostVotesPosition]}
        votes={votes[mostVotesPosition]}
      />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
