type FaQuestionsItemsProps = {
	question: string;
	answer: string;
	id: number;
	// };
	// id: number;
};

function FaQuestionsItem({ question, answer, id }: FaQuestionsItemsProps) {
	return (
		//
		<div>
			<p>{question}</p>
			<p>{answer}</p>
			<p>{id}</p>
		</div>
	);
}

export default FaQuestionsItem;
