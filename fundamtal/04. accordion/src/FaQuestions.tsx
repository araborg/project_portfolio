import FaQuestionsItem from "./FaQuestionsItem";

import { faqs } from "./faqs/faqs";

function FaQuestions() {
	return (
		<div>
			{faqs.map((faq, index) => (
				<div key={index}>
					<FaQuestionsItem {...faq} />
				</div>
			))}
		</div>
	);
}

export default FaQuestions;
