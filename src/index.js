import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Header = props => {
  return (
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Content = props => {
  return (
    <div>
      <Part p = {props.p1} e = {props.e1} />
      <Part p = {props.p2} e = {props.e2} />
      <Part p = {props.p3} e = {props.e3} />
    </div>
  )
}

const Total = props => {
  return (
    <div>
      <p>yhteensä {props.e1 + props.e2 + props.e3} tehtävää</p>
    </div>
  )
}

const Part = props => {
  return (
    <p>
      {props.p} {props.e}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14
  return (
    <div>
      <Header header={course} />
      <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} p3 = {part3} e3 = {exercises3} />
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
