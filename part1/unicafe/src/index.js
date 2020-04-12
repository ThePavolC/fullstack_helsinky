import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, clickHandler }) => (
  <button onClick={clickHandler}>{text}</button>
);

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>
      {value}
      {text === "positive" && "%"}
    </td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all && (good - bad) / all;
  const positive = all && (good / all) * 100.0;

  const stats = (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
  );

  const noStats = (
    <>
      <p>No feedback given</p>
    </>
  );

  return (
    <>
      <h1>statistics</h1>
      {all ? stats : noStats}
    </>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        text="good"
        clickHandler={() => {
          setGood(good + 1);
        }}
      />
      <Button
        text="neutral"
        clickHandler={() => {
          setNeutral(neutral + 1);
        }}
      />
      <Button
        text="bad"
        clickHandler={() => {
          setBad(bad + 1);
        }}
      />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
