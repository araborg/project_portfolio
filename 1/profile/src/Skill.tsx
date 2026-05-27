function Skill({ skill: string, emoji: string, color: string }): string {
	return (
		<div className="skill" style={{ backgroundColor: color }}>
			<span>{skill}</span>

			<span>{emoji}</span>
		</div>
	);
}

export default Skill;
