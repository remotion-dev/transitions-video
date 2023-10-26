import {springTiming, TransitionSeries} from '@remotion/transitions';
import {AbsoluteFill} from 'remotion';
import {slide} from '@remotion/transitions/slide';
import React from 'react';
import {fontFamily} from '@remotion/google-fonts/SofiaSansExtraCondensed';
import {BLUE, PINK} from './colors';

const delays = [4, 9, 18, 25];

export const Lottery: React.FC<{
	flipped: boolean;
}> = ({flipped}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 10,
				}}
			>
				{new Array(4).fill(true).map((_, i) => (
					<div
						style={{
							height: 240,
							width: 240,
							position: 'relative',
							overflow: 'hidden',
							display: 'inline-block',
							marginBottom: 0,
							verticalAlign: 'top',
						}}
					>
						<Transitions key={i} flipped={flipped} startDelay={delays[i]} />
					</div>
				))}
			</div>
		</AbsoluteFill>
	);
};

const Transitions: React.FC<{
	startDelay: number;
	flipped: boolean;
}> = ({startDelay, flipped}) => {
	return (
		<AbsoluteFill
			style={{
				borderRadius: '50%',
				fontSize: 140,
				color: 'white',
				overflow: 'hidden',
				fontFamily: 'sans-serif',
				fontWeight: 'bold',
			}}
		>
			<TransitionSeries style={{}}>
				<TransitionSeries.Sequence durationInFrames={10 + startDelay}>
					<AbsoluteFill style={{overflow: 'hidden'}}>
						<Bubble backgroundColor={flipped ? BLUE : PINK}> </Bubble>
					</AbsoluteFill>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={slide({
						direction: flipped ? 'from-left' : 'from-right',
					})}
				/>
				<TransitionSeries.Sequence durationInFrames={1000}>
					<AbsoluteFill style={{overflow: 'hidden'}}>
						<Bubble backgroundColor={flipped ? PINK : BLUE}>NA</Bubble>
					</AbsoluteFill>
				</TransitionSeries.Sequence>
			</TransitionSeries>
		</AbsoluteFill>
	);
};

const Bubble: React.FC<{
	children: React.ReactNode;
	backgroundColor: string;
}> = ({children, backgroundColor}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor,
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
