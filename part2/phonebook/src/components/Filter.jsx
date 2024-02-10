
const Filter = ({stateVar, stateFunc}) => {
    
    return (
        <div>
            Search for person: <input value={stateVar} onChange={stateFunc}/>
        </div>
)
}

export default Filter