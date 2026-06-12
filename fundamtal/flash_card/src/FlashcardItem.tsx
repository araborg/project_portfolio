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
		<div className="card" onClick={() => handleClick(id)}>
			<p>{id} </p>
			<p>{question}</p>
			<p>{answer}</p>
		</div>
	);
}

export default FlashcardItem;
