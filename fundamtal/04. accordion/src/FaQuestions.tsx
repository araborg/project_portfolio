import FaQuestionsItem from "./FaQuestionsItem";

import { faqs } from "./faqs/faqs";

function FaQuestions() {
	return (
		<div className="background">
			{faqs.map((faq, index) => (
				<div key={index}>
					<FaQuestionsItem {...faq} index={index} />
				</div>
			))}
		</div>
	);
}

export default FaQuestions;
