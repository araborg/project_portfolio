interface FlashcardItemProps {
	id: number;
	question: string;
	answer: string;
}

function FlashcardItem({ id, question, answer }: FlashcardItemProps) {
	function handleClick() {
		console.log(id);
	}

	return (
		<div className="card" onClick={handleClick}>
			<p>{question}</p>
			<p>{answer}</p>
		</div>
	);
}

export default FlashcardItem;
