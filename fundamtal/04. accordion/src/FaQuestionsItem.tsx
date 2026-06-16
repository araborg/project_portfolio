type FaQuestionsItemsProps = {
	title: string;
	text: string;
	// id: number;
	// };
	// id: number;
};

function FaQuestionsItem({ title, text }: FaQuestionsItemsProps) {
	return (
		//
		<div>
			<p>{title}</p>
			<p>{text}</p>
			{/* <p>{id}</p> */}
		</div>
	);
}

export default FaQuestionsItem;
