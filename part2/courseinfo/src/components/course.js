import React from "react";

const Header = ({ course }) => <h1>{course}</h1>;

const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const sum = parts
    .map((part) => part.exercises)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  return <strong>Total of {sum} exercises</strong>;
};

const Course = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
);

export default Course;
