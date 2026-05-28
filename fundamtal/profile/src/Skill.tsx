interface SkillProps {
	skill: string;
	emoji: string;
	color: string;
}

function Skill({ skill, emoji, color }: SkillProps) {
	return (
		<div className="skill" style={{ backgroundColor: color }}>
			<span>{skill}</span>

			<span>{emoji}</span>
		</div>
	);
}

/*
function Skill(props: SkillProps) {
	const { skill, emoji, color } = props;

	return (
		<div className="skill" style={{ backgroundColor: color }}>
			<span>{skill}</span>

			<span>{emoji}</span>
		</div>
	);
}
*/

export default Skill;
