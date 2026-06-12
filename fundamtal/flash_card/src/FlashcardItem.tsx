interface FlashcardItemProps {
	id: number;
	question: string;
	answer: string;
	selectId: number | null;
	setSelectId: (id: number | null) => void;
}

function FlashcardItem({
	id,
	question,
	answer,
	selectId,
	setSelectId,
}: FlashcardItemProps) {
	function handleClick(item: number) {
		console.log(item);

		// return item ? setSelectId(item) : null;
	}

	return (
		<div className="card" onClick={() => handleClick(id)}>
			{/* <p>{selectId === id ? answer : question}</p> */}
			<p>{question}</p>
			<p>{answer}</p>
		</div>
	);
}

export default FlashcardItem;
