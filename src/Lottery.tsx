import {springTiming, TransitionSeries} from '@remotion/transitions';
import {AbsoluteFill} from 'remotion';
import {slide} from '@remotion/transitions/slide';
import React from 'react';

const delays = [4, 9, 18, 25];

export const Lottery = () => {
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
					display: 'block',
				}}
			>
				{new Array(4).fill(true).map((_, i) => (
					<div
						style={{
							height: 270,
							width: 270,
							position: 'relative',
							overflow: 'hidden',
							display: 'inline-block',
							marginBottom: 0,
							verticalAlign: 'top',
						}}
					>
						<Transitions key={i} startDelay={delays[i]} />
					</div>
				))}
			</div>
		</AbsoluteFill>
	);
};

const Transitions: React.FC<{
	startDelay: number;
}> = ({startDelay}) => {
	return (
		<AbsoluteFill
			style={{
				borderRadius: '50%',
				fontSize: 100,
				color: 'white',
				overflow: 'hidden',
				fontFamily: 'sans-serif',
				fontWeight: 'bold',
			}}
		>
			<TransitionSeries style={{}}>
				<TransitionSeries.Sequence durationInFrames={10 + startDelay}>
					<AbsoluteFill style={{overflow: 'hidden'}}>
						<Bubble backgroundColor="black">NA</Bubble>
					</AbsoluteFill>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={slide({direction: 'from-right'})}
				/>
				<TransitionSeries.Sequence durationInFrames={1000}>
					<AbsoluteFill style={{overflow: 'hidden'}}>
						<Bubble backgroundColor="red">NA</Bubble>
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
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
