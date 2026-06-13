import { useState } from "react";
import "./App.css";

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
					onChange={(e) => setStep(Number(e.target.value) + 1)}
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
				<p>70 days from today is Mon Aug 30 2027</p>
			</div>

			<button>Reset</button>
		</>
	);
}

export default App;
