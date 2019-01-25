import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const create_array = (n) => {
  return new Array(n + 1).join('0').split('').map(parseFloat)
}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(create_array(anecdotes.length))
  const [max, setMax] = useState(0)
  const [max_index, setMax_index] = useState(0)
  
  const get_random = () => Math.floor(Math.random() * anecdotes.length)
  const get_anecdote = () => {
    setSelected(get_random())
  }

  const handle_votes = () => {
    const copy = {...votes} 
    copy[selected]++
    console.log('copy[selected]: ', copy[selected], ', max: ', max, ', selected: ', selected)
    if (max < copy[selected]) {
      setMax(copy[selected])
      setMax_index(selected)
    }
    setVotes(copy)
  }

  return (
    <div>
      <h1>anecdote of the day</h1> 
      {props.anecdotes[selected]}
      <br />
      has {votes[selected]} votes <br />
      <button onClick = {() => handle_votes()}>vote</button>
      <button onClick = {() => get_anecdote()}>next</button>

      <h1>anecdote with the most votes</h1>
      {props.anecdotes[max_index]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)