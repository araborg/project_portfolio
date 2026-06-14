import { useState } from "react";

import { date } from "./date";

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
					onChange={(e) => setStep(Number(e.target.value))}
				/>

				<span>Step: {step}</span>
			</div>

			<div>
				<button value={nums} onClick={() => setNums(nums - step)}>
					-
				</button>

				<input
					type="text" // ds is impt
					value={nums}
					onChange={(e) => setNums(Number(e.target.value))}
				/>

				<button value={nums} onClick={() => setNums(nums + step)}>
					+
				</button>
			</div>

			<div>
				<p>{date(nums)}</p>
			</div>

			{nums > 0 ? (
				<button
					onClick={() => {
						setNums(0);

						setStep(1);
					}}
				>
					Reset
				</button>
			) : (
				""
			)}
		</>
	);
}

export default App;
