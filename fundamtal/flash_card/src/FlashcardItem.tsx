interface FlashcardItemProps {
	id: number;
	question: string;
	answer: string;
}

export function FlashcardItem({ id, question, answer }: FlashcardItemProps) {
	return (
		<div className="card">
			<p>{id}</p>
			<p>{question}</p>
			<p>{answer}</p>
		</div>
	);
}

// export default Flashcard;
