import FaQuestionsItem from "./FaQuestionsItem";

import { faqs } from "./faqs/faqs";

// interface FaQuestionsProps {
// 	faq: {
// 		question: string;
// 		answer: string;
// 		id: number;
// 	};
// }

// function FaQuestions({ faq }: FaQuestionsProps) {
function FaQuestions() {
	return (
		//
		// <FaQuestionsItem faq={faq} />
		<div>
			{faqs.map((faq, index) => (
				<FaQuestionsItem faq={faq} key={index} />
			))}
		</div>
	);
}

export default FaQuestions;
