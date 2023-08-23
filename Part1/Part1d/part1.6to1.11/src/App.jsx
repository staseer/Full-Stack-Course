import { useState } from 'react'

const Heading = props => <div><h1>{props.value}</h1></div>
const Display = props => <div>{props.value}</div>
const Button = props => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Heading value = "Give Feedback"/>
            <Button handleClick = {() => setGood(good+1)} text = "Good"/>
            <Button handleClick = {() => setNeutral(neutral+1)} text = "Neutral"/>
            <Button handleClick = {() => setBad(bad+1)} text = "Bad"/>
            <Heading value="Statistics"/>
            <Display value={good}/>
            <Display value={neutral}/>
            <Display value={bad}/>
        </div>
    )
}

export default App