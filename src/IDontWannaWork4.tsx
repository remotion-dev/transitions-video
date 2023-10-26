import {fontFamily} from '@remotion/google-fonts/SofiaSansExtraCondensed';
import {springTiming, TransitionSeries} from '@remotion/transitions';
import React from 'react';
import {BLUE, PINK} from './colors';
import {flip} from './presentations/flip';

const Title: React.FC<{
	children: React.ReactNode;
	color: string;
}> = ({children, color}) => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 300,
				fontWeight: 'bold',
				fontFamily,
				color,
			}}
		>
			<div>{children}</div>
		</div>
	);
};

export const IDontWannaWork4: React.FC = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence
				style={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
				durationInFrames={20}
			>
				<Title color={PINK}>I</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={flip({direction: 'from-bottom', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Title color={BLUE}>DON'T</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={flip({direction: 'from-left', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Title color={PINK}>WANNA</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={flip({direction: 'from-right', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={50}>
				<Title color={BLUE}>WORK</Title>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
