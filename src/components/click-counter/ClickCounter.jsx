import { useState } from 'react';

const ClickCounter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h2>{counter}</h2>
			<button onClick={() => setCounter(counter - 1)}>DECREMENT</button>
			<button onClick={() => setCounter(0)}>RESET</button>
			<button onClick={() => setCounter(counter + 1)}>INCREMENT</button>
		</div>
	);
};

export default ClickCounter;
