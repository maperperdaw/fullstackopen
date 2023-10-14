import Part from "./Part"
import Total from "./Total"

const Content = () => {
  const contentCourse = [
    {
      title: 'Fundamentals of React',
      hours: 10
    },
    {
      title: 'Using props to pass data',
      hours: 7
    },
    {
      title: 'State of a component',
      hours: 14
    }
  ];

  return (
    <>
      {contentCourse.map(({title, hours}) => <Part title={title} exercise={hours}/> )}
      
      <Total amountOfExercises={contentCourse.map((elem) => elem.hours)}/> 
    </>
  );
}

export default Content;