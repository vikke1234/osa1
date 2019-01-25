import React, {useState} from 'react'
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
  const content = props.p.map(value => <Part p={value} />)
  return content
}

const Total = props => {
  let tot = 0
  props.p.map(value => (tot += value.exercises))
  return (
    <div>
      <p>yhteensä {tot} tehtävää</p>
    </div>
  )
}

const Part = props => {
  return (
    <div>
      {props.p.name} {props.p.exercises}
    </div>
  )
}

const Course = props => {
  return (
    <div>
      <Header header={props.course.name} />
      <Content p={props.course.parts} />
      <Total p={props.course.parts} />
    </div>
  )
}

const App = (props) => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }
  let [counter, set_counter] = useState(0)
  return (
    <div>
      <Course course={course} />
      <p>{counter}</p>
      <button onClick={() => set_counter(counter + 1)}>plus</button>
      <button onClick={() => set_counter(0)}>zero</button>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
