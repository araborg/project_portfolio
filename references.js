// 1.
const SkillList = () => {
	const dataArr = data;
	// const { skill, emoji, color } = data;

	return (
		<div className="skill-list">
			{dataArr.map(({ skill, emoji, color }) => (
				<Skill skill={skill} emoji={emoji} color={color} />
			))}
		</div>
	);
};

const Skill = ({ skill, emoji, color }) => {
	return (
		<div className="skill" style={{ backgroundColor: color }}>
			<span>{skill}</span>

			<span>{emoji}</span>
		</div>
	);
};

// 2.
const Flashcard = ({ que, selectedId, handleSubmit }) => {
	return (
		<div
			onClick={() => handleSubmit(que.id)}
			className={que.id === selectedId ? "selected" : ""}
		>
			{que.id === selectedId ? que.answer : que.question}
		</div>
	);
};
