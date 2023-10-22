import {fontFamily} from '@remotion/google-fonts/SofiaSansExtraCondensed';
import {AbsoluteFill} from 'remotion';

export const Letter: React.FC<{
	letter: string;
	backgroundColor: string;
	color?: string;
	borderRadius?: number;
}> = ({backgroundColor, letter, color, borderRadius}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor,
				justifyContent: 'center',
				alignItems: 'center',
				color: color ?? 'white',
				fontSize: 250,
				fontFamily,
				fontWeight: 'bolder',
				borderRadius,
				WebkitBackfaceVisibility: 'hidden',
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
