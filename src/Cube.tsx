import {linearTiming, TransitionSeries} from '@remotion/transitions';
import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {circle} from './presentations/circle-wipe';
import {cube} from './presentations/cube';

export const CubeDemo: React.FC = () => {
	const {height, width} = useVideoConfig();

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
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 40})}
				presentation={cube({direction: 'from-top', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={90}>
				<AbsoluteFill style={{backgroundColor: 'yellow'}} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 40})}
				presentation={cube({direction: 'from-bottom', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={90}>
				<AbsoluteFill style={{backgroundColor: 'orange'}} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 40})}
				presentation={circle({width, height})}
			/>
			<TransitionSeries.Sequence durationInFrames={90}>
				<AbsoluteFill style={{backgroundColor: 'pink'}} />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
