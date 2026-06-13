import { useState } from "react";
import "./App.css";

function App() {
	const [step, setStep] = useState<number>(1);

	console.log;

	return (
		<>
			<div>
				<input
					type="range"
					min="0"
					max="10"
					value={step}
					step="1"
					onChange={(e) => setStep(Number(e.target.value))}
				/>

				<span>{step}</span>
			</div>
		</>
	);
}

export default App;
