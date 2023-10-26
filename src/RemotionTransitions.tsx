import {springTiming, TransitionSeries} from '@remotion/transitions';
import {wipe} from '@remotion/transitions/wipe';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {GREEN, PINK} from './colors';
import {flip} from './presentations/flip';

const Title: React.FC<{
	backgroundColor: string;
	color: string;
	children: React.ReactNode;
}> = ({backgroundColor, color, children}) => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor,
				fontSize: 70,
				fontFamily: 'GT Planar',
				fontWeight: 'bold',
				color,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};

export const RemotionTransitions: React.FC = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={15}>
				<Title color={PINK} backgroundColor={GREEN}>
					@remotion/transitions
				</Title>
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
			<TransitionSeries.Sequence durationInFrames={15}>
				<Title color="white" backgroundColor="#0b84f3">
					@remotion/transitions
				</Title>
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
				<Title color="white" backgroundColor={PINK}>
					@remotion/transitions
				</Title>
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
			<TransitionSeries.Sequence durationInFrames={35}>
				<Title color="rgba(0, 0, 0, 0.2)" backgroundColor="white">
					@remotion/transitions
				</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={wipe({direction: 'from-left'})}
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 30,
				})}
			/>
			<TransitionSeries.Sequence durationInFrames={95}>
				<Title color="black" backgroundColor="white">
					@remotion/transitions
				</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={flip({
					direction: 'from-left',
					perspective: 1000,
				})}
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 30,
				})}
			/>
			<TransitionSeries.Sequence durationInFrames={120}>
				<Title color="black" backgroundColor="white">
					remotion.dev/transitions
				</Title>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
