interface InputProps {
	type: string;
	value: number;
	fxn: (val: number) => void;
}

function Input({ type, value, fxn }: InputProps) {
	return (
		<div>
			<input
				type={type}
				min="0"
				max="10"
				value={value}
				onChange={(e) => fxn(Number(e.target.value))}
			/>
		</div>
	);
}

export default Input;
