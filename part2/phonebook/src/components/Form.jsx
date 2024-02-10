const Form = ({nameStateVar, nameStateFunc, numStateVar, numStateFunc, addPersonHandler}) => {
    return (
        <form>
        <div>
          name: <input value={nameStateVar} 
          onChange={nameStateFunc} 
        />
        </div>
        <div>
          number: <input value={numStateVar} 
          onChange={numStateFunc} 
        />
        </div>
        <div>
          <button type="submit" onClick={addPersonHandler}>add</button>
        </div>
      </form>
    )
}

export default Form