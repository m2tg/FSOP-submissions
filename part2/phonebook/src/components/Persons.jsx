
const Persons = ({filterdArray}) => {
    return(
        <div>
            {filterdArray.map((person) => <p key={person.name}>{person.name}  {person.number}</p>)}
        </div>
    )
}

export default Persons