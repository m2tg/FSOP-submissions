const Header = ({name}) => {
    return(
      <h1>{name}</h1>
    )
}
  
const Part = ({part}) => {
    return(
      <p>{part.name} {part.exercises}</p>
    )
}
  
const Content = ({parts}) => {
    // console.log(props)
    return(
      <>
        {parts.map((part)=> 
          <Part key={part.id} part={part} />
        )}
      </>
    )
}
  
const Total = ({parts}) => {
    return (
      <h4>Total no of excercises: {parts.reduce((sum, part ) => sum+part.exercises, 0)}</h4>
    )
}
  
const Course = ({course}) => {
    return(
      <div>
        <Header name={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
}

export default Course
