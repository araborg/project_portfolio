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
		<div>
			<div>
				<p>{index + 1}</p>

				<p>{title}</p>

				<p>+</p>
			</div>

			<p>{open ? text : ""}</p>
		</div>
	);
}

export default FaQuestionsItem;
