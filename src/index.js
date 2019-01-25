import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>
}
const Statistics = props => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  let total = good + neutral + bad
  if (total === 0) {
    return (
      <div>
        <p>no feedback has been given, press the buttons to give feedback</p>
      </div>
    )
  }

  let average = (good - bad) / total
  let positive = good / total

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>good: </td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral: </td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad: </td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>total: </td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>average: </td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive: </td>
            <td>{positive * 100}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
const App = props => {
  let [good, set_good] = useState(0)
  let [neutral, set_neutral] = useState(0)
  let [bad, set_bad] = useState(0)

  return (
    <div>
      <h1>feedback</h1>
      <div>
        <Button handleClick={() => set_good(good + 1)} text="good" />
        <Button handleClick={() => set_neutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => set_bad(bad + 1)} text="bad" />
      </div>

      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
