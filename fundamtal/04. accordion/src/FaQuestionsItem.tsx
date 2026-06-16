// type FaQuestionsItemsProps = {
// 	title: string;
// 	text: string;
// };

interface FaQuestionsItemsProps {
	title: string;
	text: string;
}

function FaQuestionsItem({ title, text }: FaQuestionsItemsProps) {
	return (
		<div>
			<p>{title}</p>

			<p>{text}</p>
		</div>
	);
}

export default FaQuestionsItem;
