import {springTiming, TransitionSeries} from '@remotion/transitions';
import React from 'react';
import {flip} from './presentations/flip';

const Title: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 100,
				fontWeight: 'bold',
				fontFamily: 'sans-serif',
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
				<Title>I</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={flip({direction: 'from-bottom', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Title>don't</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={flip({direction: 'from-left', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Title>wanna</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={flip({direction: 'from-left', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={50}>
				<Title>work</Title>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
