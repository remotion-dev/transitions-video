import {springTiming, TransitionSeries} from '@remotion/transitions';
import {AbsoluteFill} from 'remotion';
import {slide} from '@remotion/transitions/slide';
import {Letter} from './Letter';
import React from 'react';

const delays = [4, 9, 18, 25];
const endDelays = [30, 30, 30, 35];
const delays3 = [40, 43, 26, 32];

export const NanaGrid = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			<AbsoluteFill
				style={{
					display: 'block',
				}}
			>
				{new Array(4).fill(true).map((_, i) => (
					<div
						style={{
							height: 540,
							width: 540,
							position: 'relative',
							overflow: 'hidden',
							display: 'inline-block',
							marginBottom: 0,
							verticalAlign: 'top',
						}}
					>
						<Transitions
							key={i}
							startDelay={delays[i]}
							endDelay={endDelays[i]}
							delay3={delays3[i]}
						/>
					</div>
				))}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const Transitions: React.FC<{
	startDelay: number;
	endDelay: number;
	delay3: number;
}> = ({startDelay, endDelay, delay3}) => {
	return (
		<TransitionSeries style={{}}>
			<TransitionSeries.Sequence durationInFrames={10 + startDelay}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor="#3B82EB" letter="Na" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={slide({direction: 'from-right'})}
			/>
			<TransitionSeries.Sequence durationInFrames={10 + endDelay}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor="#F5C3CB" letter="Na" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={slide({direction: 'from-left'})}
			/>
			<TransitionSeries.Sequence durationInFrames={10 + delay3}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor="red" letter="Na" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={slide({direction: 'from-top'})}
			/>
			<TransitionSeries.Sequence durationInFrames={80}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor="green" letter="Na" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
