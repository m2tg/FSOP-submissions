import { useState } from "react";

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticsLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics =  ({good, neutral, bad}) => {
  
  const total = good + bad + neutral
  
  if (total !==0) {
    return(
      <div>
        <h1>Statistics</h1>
        <StatisticsLine text='Good' value={good} />
        <StatisticsLine text='Neutral' value={neutral} />
        <StatisticsLine text='Bad' value={bad} />
        <StatisticsLine text='Total' value={total} />
        <StatisticsLine text='Average' value={good-bad/total} />
        <StatisticsLine text='Positive' value={`${good*100/total}%`} />
      </div>
    )
    }
    return (
      <p>No stats yet. Please give feedback.</p>
    )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick = {() => setGood(good+1)} text='Good'/>
      <Button handleClick = {() => setNeutral(neutral+1)} text='Neutral'/>
      <Button handleClick = {() => setBad(bad+1)} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App