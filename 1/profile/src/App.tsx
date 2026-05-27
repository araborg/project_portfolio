import "./App.css";
import Avatar from "./Avatar";
import data from "./data";

function App() {
	const dataArr = data;
	console.log(dataArr);

	return (
		<>
			<p>Welcome</p>

			<Avatar />
		</>
	);
}

export default App;
