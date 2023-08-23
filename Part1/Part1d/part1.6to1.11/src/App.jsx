import { useState } from 'react'

const Heading = props => <div><h1>{props.value}</h1></div>
const Display = props => <div>{props.text} : {props.value}</div>
const Button = props => <button onClick={props.handleClick}>{props.text}</button>
const Average = props => {
    const good = props.goodValue;
    const bad = props.badValue;
    const neutral = props.neutralValue;
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
    return (
        <div>Average : {calculateAvg()}</div>
    )

}
const Positive = props => {
    const good = props.goodValue;
    const total = props.total;
    const calculatePositive = () => {
        if (total === 0)
            return 0;
        return (good / total);
    }
    return (
        <div>Positive : {calculatePositive()} %</div>
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
            <Display text = "Good" value={good}/>
            <Display text = "Neutral" value={neutral}/>
            <Display text = "Bad" value={bad}/>
            <Display text = "Total" value={good + bad + neutral}/>
            <Average goodValue = {good} badValue = {bad} neutralValue = {neutral}/>
            <Positive goodValue = {good} total ={good + bad + neutral}/>
        </div>
    )
}

export default App