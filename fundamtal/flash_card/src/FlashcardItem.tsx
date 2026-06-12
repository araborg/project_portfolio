interface FlashcardItem {
	id: number;
	question: string;
	answer: string;
}

function FlashcardItem({ id, question, answer }: FlashcardItem) {}

export default FlashcardItem;
