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
				value={value}
				min="0"
				max="10"
				onChange={(e) => fxn(Number(e.target.value))}
			/>
		</div>
	);
}

export default Input;
