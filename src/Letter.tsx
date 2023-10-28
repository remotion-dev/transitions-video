import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {fontFamily} from './font';

export const Letter: React.FC<{
	letter: string;
	backgroundColor: string;
	color?: string;
	borderRadius?: number;
	fontSize?: number;
}> = ({backgroundColor, letter, color, borderRadius, fontSize}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const spr = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 20,
	});

	const weight = interpolate(spr, [0, 1], [600, 900]);
	const wdth = interpolate(spr, [0, 1], [100, 125]);

	return (
		<AbsoluteFill
			style={{
				backgroundColor,
				justifyContent: 'center',
				alignItems: 'center',
				color: color ?? 'white',
				fontSize: fontSize ?? 200,
				fontFamily,
				fontWeight: 'bolder',
				borderRadius,
				WebkitBackfaceVisibility: 'hidden',
				fontVariationSettings: `"wght" ${weight}, "wdth" ${wdth}`,
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
