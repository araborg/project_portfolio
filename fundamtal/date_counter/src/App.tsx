import { useState } from "react";
import "./App.css";

function App() {
	const [step, setStep] = useState<number>(1);

	return (
		<>
			<input type="range" min="0" max="10" value="1" step="1" />
			{/* step */}
		</>
	);
}

export default App;
