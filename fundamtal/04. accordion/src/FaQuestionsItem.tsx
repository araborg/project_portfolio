type FaQuestionsItemsProps = {
	title: string;
	text: string;
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
