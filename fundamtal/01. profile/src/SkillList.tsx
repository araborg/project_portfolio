import Skill from "./Skill";
import data from "./data";

function SkillList() {
	const dataArr = data;

	return (
		<div className="skill-list">
			{dataArr.map(({ skill, emoji, color }) => (
				<Skill
					skill={skill}
					emoji={emoji}
					color={color}
					//
					key={skill}
				/>
			))}
		</div>
	);
}

export default SkillList;
