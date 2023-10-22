import {springTiming, TransitionSeries} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {wipe} from '@remotion/transitions/wipe';
import React from 'react';
import {
	AbsoluteFill,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {loadFont} from './load-font';

loadFont();

export const TextMask: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const scale = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		delay: 14,
		durationInFrames: 10,
	});

	return (
		<AbsoluteFill
			style={{
				WebkitMaskImage: `url(${staticFile('NaBlack.png')})`,
				WebkitMaskRepeat: 'no-repeat',
				WebkitMaskPosition: 'center',
				scale: String(scale),
			}}
		>
			<TransitionSeries>
				<TransitionSeries.Sequence durationInFrames={32}>
					<AbsoluteFill
						style={{
							backgroundColor: 'green',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: 120,
							fontFamily: 'Menhir',
						}}
					/>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={slide()}
				/>
				<TransitionSeries.Sequence durationInFrames={20}>
					<AbsoluteFill
						style={{
							backgroundColor: 'blue',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: 120,
							fontFamily: 'Menhir',
						}}
					/>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={slide({direction: 'from-top'})}
				/>
				<TransitionSeries.Sequence durationInFrames={17}>
					<AbsoluteFill
						style={{
							backgroundColor: 'red',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: 120,
							fontFamily: 'Menhir',
						}}
					/>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={slide({direction: 'from-bottom'})}
				/>
				<TransitionSeries.Sequence durationInFrames={15}>
					<AbsoluteFill
						style={{
							backgroundColor: 'yellow',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: 120,
							fontFamily: 'Menhir',
						}}
					/>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={slide({direction: 'from-left'})}
				/>
				<TransitionSeries.Sequence durationInFrames={15}>
					<AbsoluteFill
						style={{
							backgroundColor: 'orange',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: 120,
							fontFamily: 'Menhir',
						}}
					/>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={wipe({direction: 'from-bottom-right'})}
				/>
				<TransitionSeries.Sequence durationInFrames={15}>
					<AbsoluteFill
						style={{
							backgroundColor: 'orange',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: 120,
							fontFamily: 'Menhir',
						}}
					/>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={wipe({direction: 'from-bottom-left'})}
				/>
				<TransitionSeries.Sequence durationInFrames={20}>
					<AbsoluteFill
						style={{
							backgroundColor: 'black',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: 120,
							fontFamily: 'Menhir',
						}}
					/>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={wipe({direction: 'from-bottom-left'})}
				/>
				<TransitionSeries.Sequence durationInFrames={20}>
					<AbsoluteFill
						style={{
							backgroundColor: 'red',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: 120,
							fontFamily: 'Menhir',
						}}
					/>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={wipe({direction: 'from-bottom-left'})}
				/>
				<TransitionSeries.Sequence durationInFrames={100}>
					<AbsoluteFill
						style={{
							backgroundColor: 'purple',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: 120,
							fontFamily: 'Menhir',
						}}
					/>
				</TransitionSeries.Sequence>
			</TransitionSeries>
		</AbsoluteFill>
	);
};
