import { useState } from "react";
import "./App.css";
import { date } from "./date";

function App() {
	const [step, setStep] = useState<number>(1);
	const [nums, setNums] = useState<number>(0);

	return (
		<>
			<div>
				<input
					type="range"
					min="0"
					max="10"
					value={step}
					// onChange={(e) => setStep(Number(e.target.value) + 1)}
					onChange={(e) => setStep(Number(e.target.value))}
				/>

				<span>Step: {step}</span>
			</div>

			<div>
				<button value={nums} onClick={() => setNums(nums - step)}>
					-
				</button>

				<input
					type="number"
					value={nums ? nums : 0}
					onChange={(e) => setNums(Number(e.target.value))}
				/>

				<button value={nums} onClick={() => setNums(nums + step)}>
					+
				</button>
			</div>

			<div>
				{/* <p>{date(nums)} days from today is Mon Aug 30 2027</p> */}
				<p>
					{date(nums)}
					{/* ? "Today is"
						: `${nums} days from today is `}
					{date(nums)} */}
				</p>
			</div>

			<button>Reset</button>
		</>
	);
}

export default App;
