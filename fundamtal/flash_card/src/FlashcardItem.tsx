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
	// console.log(selectId);
	// console.log(id);

	return (
		<div className="card" onClick={() => handleClick(id)}>
			<p>{selectId === id ? answer : question}</p>
			{/* <p>{question}</p> */}
			{/* <p>{answer}</p> */}
		</div>
	);
}

export default FlashcardItem;
