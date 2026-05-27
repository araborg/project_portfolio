import "./App.css";

interface Data {
	skill: string;
	emoji: string;
	color: string;
	level: string;
}

const data: Data = [
	{ skill: "HRML+CSS", emoji: "✅", color: "blue", level: "beginner" },

	{
		skill: "JavaScript",
		emoji: "✅",
		color: "yellow",
		level: "intermediate",
	},

	{
		skill: "Web Design",
		emoji: "✅",
		color: "lightgreen",
		level: "beginner",
	},

	{ skill: "Git and GitHub", emoji: "✅", color: "red", level: "beginner" },

	{ skill: "React", emoji: "✅", color: "rebeccapurple", level: "advanced" },

	{ skill: "Svelte", emoji: "✅", color: "orangered", level: "intermediate" },
];

function App() {
	const dataArr = data;
	console.log(dataArr);

	return (
		<>
			<p>Welcome</p>
		</>
	);
}

export default App;
