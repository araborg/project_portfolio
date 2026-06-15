import { useState } from "react";
import "./App.css";
import Input from "./Input";

function App() {
	const [range, setRange] = useState<number>(1);
	const [nums, setNums] = useState<number>(0);
	// console.log(range);

	return (
		<>
			<div>
				<Input type="range" value={range} fxn={setRange} />

				<p>Steps: {range}</p>
			</div>

			<div>
				<Input type="text" value={nums} fxn={setNums} />
			</div>
		</>
	);
}

export default App;
