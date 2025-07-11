import { useState } from 'react'

const Button = ({text, onclick}) => {
	return (
		<button onClick={onclick}>
			{text}
		</button>
	)
}

const StatisticLine = (props) => {
    return (<tr>
        <td>{props.text + " "}</td>
        <td>{props.data}</td>
    </tr>)
}

const Statistics = (props) => {
    if (!props.display) {
        return (<div>No feedback given</div>)
    } else {
        return (
            <table>
                <tbody>
                    {props.stats.map((stat, index) => (
                        <StatisticLine key={index} text={stat.text} data={stat.data} />
                    ))}
                </tbody>
            </table>
            )
    }
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	let all = good + neutral + bad
	let all_score = good - bad
	let average
	let positive
    let display = false
	if (all > 0) {
        display = true
		average = all_score / all
		positive = (good / all) * 100 + " %"
	} else {
        display = false
        average = 0
        positive = "0"
	}

	return (
		<div>
			<h1>give feedback</h1>
			<Button text="good" onclick={() => setGood(good + 1)} />
			<Button text="neutral" onclick={() => setNeutral(neutral + 1)} />
			<Button text="bad" onclick={() => setBad(bad + 1)} />
			<h1>statistics</h1>
            <Statistics
                display={display}
                stats={[
                    { text: "good", data: good },
                    { text: "neutral", data: neutral },
                    { text: "bad", data: bad },
                    { text: "all", data: all },
                    { text: "average", data: average },
                    { text: "positive", data: positive }
                ]}
            ></Statistics>
		</div>
	)
}

export default App
