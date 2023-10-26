import {springTiming, TransitionSeries} from '@remotion/transitions';
import {wipe} from '@remotion/transitions/wipe';
import React from 'react';
import {AbsoluteFill} from 'remotion';

const Title: React.FC<{backgroundColor: string; color: string}> = ({
	backgroundColor,
	color,
}) => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor,
				fontSize: 80,
				fontFamily: 'GT Planar',
				fontWeight: 'bold',
				color,
			}}
		>
			@remotion/transitions
		</AbsoluteFill>
	);
};

export const RemotionTransitions: React.FC = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Title color="pink" backgroundColor="#0b84f3" />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={wipe({direction: 'from-top-left'})}
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 10,
				})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Title color="white" backgroundColor="#0b84f3" />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={wipe({direction: 'from-top-right'})}
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 10,
				})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Title color="white" backgroundColor="pink" />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={wipe({direction: 'from-bottom-left'})}
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 10,
				})}
			/>
			<TransitionSeries.Sequence durationInFrames={25}>
				<Title color="rgba(0, 0, 0, 0.2)" backgroundColor="white" />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={wipe({direction: 'from-left'})}
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 10,
				})}
			/>
			<TransitionSeries.Sequence durationInFrames={120}>
				<Title color="black" backgroundColor="white" />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
