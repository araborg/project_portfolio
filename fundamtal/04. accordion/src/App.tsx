import "./App.css";

import { faqs } from "./faqs/faqs";

function App() {
	return (
		<>
			{/*  */}
			{/* faqs.map(faq=>(console.log(faq))) */}
			{console.log(faqs)}
			{/*  */}

			{faqs.map((faq) => console.log(faq))}
		</>
	);
}

export default App;
