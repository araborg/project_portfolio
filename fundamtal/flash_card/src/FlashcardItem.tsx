interface FlashcardItemProps {
	id: number;
	question: string;
	answer: string;
}

export function FlashcardItem({ id, question, answer }: FlashcardItemProps) {
	function handleClick() {
		console.log(id);
	}

	return (
		<div className="card" onClick={handleClick}>
			<p>{id}</p>
			<p>{question}</p>
			<p>{answer}</p>
		</div>
	);
}

// export default Flashcard;
