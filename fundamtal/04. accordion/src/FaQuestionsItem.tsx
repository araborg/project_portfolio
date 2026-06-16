// type FaQuestionsItemsProps = {
// 	title: string;
// 	text: string;
// };

import { useState } from "react";

interface FaQuestionsItemsProps {
	title: string;
	text: string;
	index: number;
}

function FaQuestionsItem({ title, text, index }: FaQuestionsItemsProps) {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className="container">
			<div className="question">
				<p className="index">
					{index < 9 ? `0${index + 1}` : index + 1}
				</p>

				<p className="title">{title}</p>

				<p className="sign">+</p>
			</div>

			<p>{open ? text : ""}</p>
		</div>
	);
}

export default FaQuestionsItem;
