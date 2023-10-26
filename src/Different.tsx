import {
	linearTiming,
	springTiming,
	TransitionSeries,
} from '@remotion/transitions';
import {AbsoluteFill, Loop} from 'remotion';
import {slide} from '@remotion/transitions/slide';
import {fade} from '@remotion/transitions/fade';
import {Letter} from './Letter';
import React from 'react';
import {cube} from './presentations/cube';
import {clockWipe} from './presentations/clock-wipe';
import {BLUE, GREEN, PINK} from './colors';

const delays = [4, 9, 18, 25];
const endDelays = [30, 30, 30, 35];
const delays3 = [40, 43, 26, 32];

export const Different = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			<AbsoluteFill
				style={{
					display: 'block',
					scale: String(0.8),
					borderRadius: 40,
					overflow: 'hidden',
				}}
			>
				{new Array(4).fill(true).map((_, i) => (
					<div
						style={{
							height: 530,
							width: 530,
							position: 'relative',
							overflow: 'hidden',
							display: 'inline-block',
							marginBottom: 0,
							verticalAlign: 'top',
							margin: 5,
						}}
					>
						{i === 0 ? (
							<SlideTransitions
								key={0}
								startDelay={delays[i]}
								endDelay={endDelays[i]}
								delay3={delays3[i]}
							/>
						) : null}
						{i === 1 ? (
							<CubeTransitions
								key={1}
								startDelay={delays[i]}
								endDelay={endDelays[i]}
								delay3={delays3[i]}
							/>
						) : null}
						{i === 2 ? (
							<ClockTransitions
								key={1}
								startDelay={delays[i]}
								endDelay={endDelays[i]}
								delay3={delays3[i]}
							/>
						) : null}
						{i === 3 ? (
							<FadeTransitions
								key={1}
								startDelay={delays[i]}
								endDelay={endDelays[i]}
								delay3={delays3[i]}
							/>
						) : null}
					</div>
				))}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const SlideTransitions: React.FC<{
	startDelay: number;
	endDelay: number;
	delay3: number;
}> = ({startDelay, endDelay, delay3}) => {
	return (
		<TransitionSeries style={{}}>
			<TransitionSeries.Sequence durationInFrames={20}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={BLUE} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 20})}
				presentation={slide({direction: 'from-right'})}
			/>
			<TransitionSeries.Sequence durationInFrames={40}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={PINK} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 20})}
				presentation={slide({direction: 'from-left'})}
			/>
			<TransitionSeries.Sequence durationInFrames={40}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={GREEN} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 20})}
				presentation={slide({direction: 'from-right'})}
			/>
			<TransitionSeries.Sequence durationInFrames={40}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={BLUE} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};

const CubeTransitions: React.FC<{
	startDelay: number;
	endDelay: number;
	delay3: number;
}> = ({startDelay, endDelay, delay3}) => {
	return (
		<TransitionSeries
			style={{
				backgroundColor: GREEN,
			}}
		>
			<TransitionSeries.Sequence durationInFrames={20}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={BLUE} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 20})}
				presentation={cube({perspective: 1000, direction: 'from-top'})}
			/>
			<TransitionSeries.Sequence durationInFrames={40}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={PINK} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 20})}
				presentation={cube({perspective: 1000, direction: 'from-bottom'})}
			/>
			<TransitionSeries.Sequence durationInFrames={40}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={BLUE} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 20})}
				presentation={cube({perspective: 1000, direction: 'from-top'})}
			/>
			<TransitionSeries.Sequence durationInFrames={40}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={PINK} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};

const ClockTransitions: React.FC<{
	startDelay: number;
	endDelay: number;
	delay3: number;
}> = ({startDelay, endDelay, delay3}) => {
	const width = 540;
	const height = 540;
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={25}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={PINK} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 25})}
				presentation={clockWipe({width, height})}
			/>
			<TransitionSeries.Sequence durationInFrames={50}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={GREEN} color={PINK} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 25})}
				presentation={clockWipe({width, height})}
			/>
			<TransitionSeries.Sequence durationInFrames={50}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={BLUE} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 25})}
				presentation={clockWipe({width, height})}
			/>
			<TransitionSeries.Sequence durationInFrames={50}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={PINK} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};

const FadeTransitions: React.FC<{
	startDelay: number;
	endDelay: number;
	delay3: number;
}> = ({startDelay, endDelay, delay3}) => {
	return (
		<TransitionSeries style={{}}>
			<TransitionSeries.Sequence durationInFrames={20}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={BLUE} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 20})}
				presentation={fade()}
			/>
			<TransitionSeries.Sequence durationInFrames={40}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={GREEN} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 20})}
				presentation={fade()}
			/>
			<TransitionSeries.Sequence durationInFrames={40}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={PINK} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={linearTiming({durationInFrames: 20})}
				presentation={fade()}
			/>
			<TransitionSeries.Sequence durationInFrames={40}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={BLUE} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
