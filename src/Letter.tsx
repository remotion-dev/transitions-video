import {AbsoluteFill} from 'remotion';

export const Letter: React.FC<{
	letter: string;
	backgroundColor: string;
}> = ({backgroundColor, letter}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor,
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
				fontSize: 250,
				fontFamily: 'sans-serif',
				fontWeight: 'bold',
			}}
		>
			{letter}
		</AbsoluteFill>
	);
};

export const LetterA: React.FC = () => {
	return <Letter letter="A" backgroundColor="#3B82EB" />;
};

export const LetterB: React.FC = () => {
	return <Letter letter="B" backgroundColor="#F5C3CB" />;
};
