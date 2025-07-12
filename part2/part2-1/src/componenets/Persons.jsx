const Persons = (props) => {
  if (props.nameQeury === '') {
    return (
      <ul>
        {
          props.persons.map(
            person => <li key={person.id}>{person.name} {person.number}</li>
          )
        }
      </ul>
    )
  } else {
    return (
      <ul>
        {
          props.persons.filter(
            person => person.name.includes(props.nameQeury)
          ).map(
            person => <li key={person.id}>{person.name} {person.number}</li>
          )
        }
      </ul>
    )
  }
}

export default Persons
