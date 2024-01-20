const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <>
      <p>Part: {props.part.parts[0].name} No of Excercises: {props.part.parts[0].exercises}</p>
      <p>Part: {props.part.parts[1].name} No of Excercises: {props.part.parts[1].exercises}</p>
      <p>Part: {props.part.parts[2].name} No of Excercises: {props.part.parts[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Total number of excercises: {props.ex.parts[0].exercises + props.ex.parts[1].exercises + props.ex.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course} />
      <Total ex={course}/>
    </div>
  )
}

export default App