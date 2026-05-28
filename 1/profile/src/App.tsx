import "./App.css";

import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";

function App() {
	return (
		<div className="card">
			<Avatar />

			<main className="main">
				<Intro />

				<SkillList />
			</main>
		</div>
	);
}

export default App;
