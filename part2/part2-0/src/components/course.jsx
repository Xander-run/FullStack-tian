const Header = ({course}) => <h2>{course}</h2>

const Content = ({parts}) => (
  <div>
    {parts.map(part => <Part key={part.id} part={part}></Part>)}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Course = ({name, parts}) => (
  <div>
    <Header course={name}></Header>
    <Content parts={parts}></Content>
  </div>
)

export default Course
