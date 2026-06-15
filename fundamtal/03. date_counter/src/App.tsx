import { useState } from "react";

import Input from "./Input";
import Buttons from "./Buttons";

import date from "./date";

import "./App.css";

function App() {
	const [range, setRange] = useState<number>(1);
	const [nums, setNums] = useState<number>(0);
	// console.log(range);

	const decrement = () => setNums((prev: number) => prev - range);

	function increment() {
		setNums((prev: number) => prev + range);
	}

	function reset() {
		setNums(0);

		setRange(1);
	}

	// console.log(nums);

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

			<p>{date(nums)}</p>

			<div>
				<Buttons text="Reset" fxn={reset} />
			</div>
		</>
	);
}

export default App;
