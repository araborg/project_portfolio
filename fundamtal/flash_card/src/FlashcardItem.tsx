interface FlashcardItemProps {
	id: number;
	question: string;
	answer: string;
	selectId: number | null;
	handleClick: (id: number | null) => void;
}

function FlashcardItem({
	id,
	question,
	answer,
	selectId,
	handleClick,
}: FlashcardItemProps) {
	return (
		<div className="card" onClick={() => handleClick(id)}>
			<p>{selectId === id ? answer : question}</p>
		</div>
	);
}

export default FlashcardItem;
