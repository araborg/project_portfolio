interface ButtonsProps {
	text: string;
	fxn: () => void;
}

function Buttons({ text, fxn }: ButtonsProps) {
	return (
		//
		<button onClick={fxn}>
			{/*  */}
			{text}
		</button>
	);
}

export default Buttons;
