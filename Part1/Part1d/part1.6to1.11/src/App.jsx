import { useState } from 'react'

const Heading = props => <div><h1>{props.value}</h1></div>
const Display = props => <tbody><tr><td>{props.text}</td><td>{props.value}</td></tr></tbody>
const Button = props => <button onClick={props.handleClick}>{props.text}</button>

const Statistics = props => {
    const good = props.good;
    const bad = props.bad;
    const neutral = props.neutral;
    const weights ={
        good: 1,
        bad: -1,
        neutral : 0
    }
    const calculateAvg = () => {
        if (good === 0 && bad ===0 && neutral === 0)
            return 0;
        return ((good * weights.good + bad * weights.bad + neutral * weights.neutral)/(good+bad+neutral))
    }
    const calculatePositive = () => {
        if (good === 0 && bad ===0 && neutral === 0)
            return 0;
        return (good * 100/ (good+bad+neutral));
    }
    if (good === 0 && bad ===0 && neutral === 0) {
        return (<div><Heading value="Statistics"/>
            <div>"No feedback given"</div></div>);
    }
    return (
        <div> <Heading value="Statistics"/>
            <table>
            <Display text = "Good" value={good}/>
            <Display text = "Neutral" value={neutral}/>
            <Display text = "Bad" value={bad}/>
            <Display text = "Total" value={good + bad + neutral}/>
            <Display text = "Average" value = {calculateAvg()}/>
            <Display text = "Positive" value ={calculatePositive()}/>
            </table>
        </div>
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
            <Statistics good = {good} bad = {bad} neutral ={neutral}/>
        </div>
    )
}

export default App