import {springTiming, TransitionSeries} from '@remotion/transitions';
import {AbsoluteFill} from 'remotion';
import {slide} from '@remotion/transitions/slide';
import {Letter} from './Letter';
import React from 'react';
import {wipe} from '@remotion/transitions/wipe';
import {fontFamily} from '@remotion/google-fonts/SofiaSansExtraCondensed';
import {BLUE, GREEN, PINK} from './colors';

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
			<TransitionSeries>
				<TransitionSeries.Sequence
					durationInFrames={80}
					style={{
						display: 'block',
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
							<Transitions
								key={i}
								startDelay={delays[i]}
								endDelay={endDelays[i]}
								delay3={delays3[i]}
							/>
						</div>
					))}
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					presentation={wipe({direction: 'from-top'})}
					timing={springTiming({
						config: {
							damping: 200,
						},
						durationInFrames: 10,
					})}
				/>
				<TransitionSeries.Sequence
					durationInFrames={20}
					style={{
						backgroundColor: BLUE,
						fontFamily,
						fontSize: 700,
						fontWeight: 'bold',
						color: 'white',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					NA
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
				<TransitionSeries.Sequence
					durationInFrames={30}
					style={{
						backgroundColor: PINK,
						fontFamily,
						fontSize: 700,
						fontWeight: 'bold',
						color: 'white',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					NA
				</TransitionSeries.Sequence>
			</TransitionSeries>
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
					<Letter backgroundColor={BLUE} letter="" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={slide({direction: 'from-right'})}
			/>
			<TransitionSeries.Sequence durationInFrames={10 + endDelay}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={PINK} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={slide({direction: 'from-left'})}
			/>
			<TransitionSeries.Sequence durationInFrames={30 + delay3}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter backgroundColor={GREEN} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
