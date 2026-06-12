interface FlashcardItem {
	id: number;
	question: string;
	answer: string;
	selectId: number | null;
	handleClick: (id: number) => void;
}

function FlashcardItem({
	id,
	question,
	answer,
	selectId,
	handleClick,
}: FlashcardItem) {
	return (
		<div
			className={selectId === id ? "selected" : "card"}
			onClick={() => handleClick(id)}
		>
			<p>{selectId === id ? answer : question}</p>
		</div>
	);
}

export default FlashcardItem;
