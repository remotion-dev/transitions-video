import {springTiming, TransitionSeries} from '@remotion/transitions';
import {AbsoluteFill} from 'remotion';
import {slide} from '@remotion/transitions/slide';
import {LetterA, LetterB} from './Letter';
import React from 'react';

export const Grid = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			<AbsoluteFill
				style={{
					display: 'block',
					scale: '0.8',
					borderRadius: 50,
					overflow: 'hidden',
				}}
			>
				{new Array(16).fill(true).map((_, i) => (
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
						<Transitions key={i} delay={i} />
					</div>
				))}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

const Transitions: React.FC<{
	delay: number;
}> = ({delay}) => {
	return (
		<TransitionSeries style={{}}>
			<TransitionSeries.Sequence durationInFrames={50 + delay}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<LetterA />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}})}
				presentation={slide({direction: 'from-right'})}
			/>
			<TransitionSeries.Sequence durationInFrames={40}>
				<AbsoluteFill style={{overflow: 'hidden'}}>
					<LetterB />
				</AbsoluteFill>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
