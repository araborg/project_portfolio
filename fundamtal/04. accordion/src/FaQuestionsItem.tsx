// type FaQuestionsItemsProps = {
// 	title: string;
// 	text: string;
// };

import { useState } from "react";

interface FaQuestionsItemsProps {
	title: string;
	text: string;
}

function FaQuestionsItem({ title, text }: FaQuestionsItemsProps) {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div>
			<p>{title}</p>

			<p>{open ? text : ""}</p>
		</div>
	);
}

export default FaQuestionsItem;
