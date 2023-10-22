import {linearTiming, TransitionSeries} from '@remotion/transitions';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {flip} from './presentations/flip';

export const FlipDemo: React.FC = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={90}>
				<AbsoluteFill style={{backgroundColor: 'red'}} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 40})}
				presentation={flip({direction: 'from-left', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={90}>
				<AbsoluteFill style={{backgroundColor: 'blue'}} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 40})}
				presentation={flip({direction: 'from-right', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={90}>
				<AbsoluteFill style={{backgroundColor: 'green'}} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 40})}
				presentation={flip({direction: 'from-top', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={90}>
				<AbsoluteFill style={{backgroundColor: 'yellow'}} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 40})}
				presentation={flip({direction: 'from-bottom', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={90}>
				<AbsoluteFill style={{backgroundColor: 'orange'}} />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
