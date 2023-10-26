import {springTiming, TransitionSeries} from '@remotion/transitions';
import React from 'react';
import {Letter} from './Letter';
import {wipe} from '@remotion/transitions/wipe';
import {BLUE, GREEN, ORANGE, PINK} from './colors';

export const IDontWannaWork: React.FC = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Letter fontSize={600} letter="I" backgroundColor={GREEN} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={wipe({direction: 'from-left'})}
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Letter fontSize={250} letter="DON'T" backgroundColor={ORANGE} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={wipe({direction: 'from-right'})}
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Letter fontSize={220} letter="WANNA" backgroundColor={BLUE} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={wipe({direction: 'from-top-left'})}
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
			/>
			<TransitionSeries.Sequence durationInFrames={80}>
				<Letter fontSize={250} letter="WORK" backgroundColor={PINK} />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
