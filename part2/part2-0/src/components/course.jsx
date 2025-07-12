const Header = ({course}) => <h2>{course}</h2>

const Total = (props) => <p><strong>total of {props.total} exercises</strong></p>

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
    <Total total={parts.reduce((sum, part) => sum + part.exercises, 0)}/>
  </div>
)

export default Course
