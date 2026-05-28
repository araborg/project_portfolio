import "./App.css";

import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";

function App() {
	return (
		<div className="card-container">
			<div className="card">
				<Avatar />

				<main>
					<Intro />

					<SkillList />
				</main>
			</div>
		</div>
	);
}

export default App;
