import { useState } from "react";
import "./App.css";
import Input from "./Input";
import Buttons from "./Buttons";

function App() {
	const [range, setRange] = useState<number>(1);
	const [nums, setNums] = useState<number>(0);
	// console.log(range);

	const decrement = () => setNums((prev: number) => prev - range);
	const increment = () => setNums((prev: number) => prev + range);

	return (
		<>
			<div>
				<Input type="range" value={range} fxn={setRange} />

				<p>Steps: {range}</p>
			</div>

			<div>
				<Buttons text="-" fxn={decrement} />

				<Input type="text" value={nums} fxn={setNums} />

				<Buttons text="+" fxn={increment} />
			</div>
		</>
	);
}

export default App;
