import { useState } from "react";

interface FlashcardItemProps {
	id: number;
	question: string;
	answer: string;
}

function FlashcardItem({ id, question, answer }: FlashcardItemProps) {
	const [selectId, setSelectId] = useState(null);

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
