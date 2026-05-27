import Skill from "./Skill";
import data from "./data";

function SkillList() {
	const dataArr = data;

	return (
		<div className="skill-list">
			{dataArr.map((item) => (
				<Skill />
			))}
		</div>
	);
}

export default SkillList;
