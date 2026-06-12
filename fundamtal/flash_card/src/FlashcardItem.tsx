interface FlashcardItem {
	id: number;
	question: string;
	answer: string;
}

function FlashcardItem({ id, question, answer }: FlashcardItem) {
	return (
		<div>
			<p>{question}</p>
			<p>{answer}</p>
		</div>
	);
}

export default FlashcardItem;
