import {springTiming, TransitionSeries} from '@remotion/transitions';
import React from 'react';
import {Letter} from './Letter';
import {wipe} from '@remotion/transitions/wipe';

export const IDontWannaWork: React.FC = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Letter letter="I" backgroundColor="red" />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={wipe({direction: 'from-left'})}
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Letter letter="Don't" backgroundColor="orange" />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={wipe({direction: 'from-right'})}
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Letter letter="Wanna" backgroundColor="blue" />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={wipe({direction: 'from-top-left'})}
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
			/>
			<TransitionSeries.Sequence durationInFrames={80}>
				<Letter letter="WORK" backgroundColor="pink" />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
