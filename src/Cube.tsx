import {linearTiming, TransitionSeries} from '@remotion/transitions';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {cube} from './presentations/cube';

export const CubeDemo: React.FC = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={90}>
				<AbsoluteFill style={{backgroundColor: 'red'}} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 40})}
				presentation={cube({direction: 'from-left', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={90}>
				<AbsoluteFill style={{backgroundColor: 'blue'}} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 40})}
				presentation={cube({direction: 'from-right', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={90}>
				<AbsoluteFill style={{backgroundColor: 'green'}} />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
