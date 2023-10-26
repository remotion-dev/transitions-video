import {
	springTiming,
	TransitionPresentation,
	TransitionSeries,
} from '@remotion/transitions';
import {AbsoluteFill} from 'remotion';
import {Letter} from './Letter';
import React from 'react';
import {GREEN, PINK} from './colors';
import {slide} from '@remotion/transitions/slide';
import {wipe} from '@remotion/transitions/wipe';

const indicesToFlip = [0, 3, 6, 4, 2, 5, 8];

export const ThreeBythree = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			<div
				style={{
					display: 'block',
				}}
			>
				{new Array(9).fill(true).map((_, i) => {
					const firstFlip =
						i === indicesToFlip[0]
							? 10
							: i === indicesToFlip[1]
							? 20
							: i === indicesToFlip[2]
							? 25
							: i === indicesToFlip[3]
							? 32
							: i === indicesToFlip[4]
							? 40
							: i === indicesToFlip[5]
							? 48
							: i === indicesToFlip[6]
							? 60
							: 10000;

					const secondFlip =
						i === indicesToFlip[0]
							? 10
							: i === indicesToFlip[1]
							? 5
							: i === indicesToFlip[2]
							? 7
							: i === indicesToFlip[3]
							? 8
							: i === indicesToFlip[4]
							? 8
							: i === indicesToFlip[5]
							? 12
							: indicesToFlip[6]
							? 12
							: 10000;

					const enterPresentation =
						i === indicesToFlip[3] || i === indicesToFlip[4]
							? wipe({direction: 'from-bottom-left'})
							: slide({direction: 'from-top'});

					const exitPresentation =
						i === indicesToFlip[2] || i === indicesToFlip[3]
							? wipe({direction: 'from-bottom-left'})
							: slide({direction: 'from-top'});

					return (
						<div
							style={{
								height: 350,
								width: 350,
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
								firstFlip={firstFlip}
								secondFlip={secondFlip}
								enterPresentation={enterPresentation}
								exitPresentation={exitPresentation}
							/>
						</div>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};

const Transitions: React.FC<{
	firstFlip: number;
	secondFlip: number;
	enterPresentation: TransitionPresentation<Record<string, unknown>>;
	exitPresentation: TransitionPresentation<Record<string, unknown>>;
}> = ({firstFlip, secondFlip, enterPresentation, exitPresentation}) => {
	return (
		<TransitionSeries style={{borderRadius: 20, overflow: 'hidden'}}>
			<TransitionSeries.Sequence durationInFrames={8 + firstFlip}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter fontSize={160} backgroundColor={GREEN} letter="" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 8})}
				presentation={enterPresentation}
			/>
			<TransitionSeries.Sequence durationInFrames={8 + secondFlip}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter fontSize={160} backgroundColor={PINK} letter="NA" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 8})}
				presentation={exitPresentation}
			/>
			<TransitionSeries.Sequence durationInFrames={20000}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<Letter fontSize={160} backgroundColor={GREEN} letter="" />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
