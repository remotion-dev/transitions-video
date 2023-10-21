import {springTiming, TransitionSeries} from '@remotion/transitions';
import {AbsoluteFill} from 'remotion';
import {slide} from '@remotion/transitions/slide';
import {LetterA, LetterB} from './Letter';

export const MyComposition = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			<TransitionSeries style={{}}>
				<TransitionSeries.Sequence durationInFrames={50}>
					<AbsoluteFill
						style={{scale: '0.8', borderRadius: 50, overflow: 'hidden'}}
					>
						<LetterA />
					</AbsoluteFill>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}})}
					presentation={slide({direction: 'from-right'})}
				/>
				<TransitionSeries.Sequence durationInFrames={40}>
					<AbsoluteFill
						style={{scale: '0.8', borderRadius: 50, overflow: 'hidden'}}
					>
						<LetterB />
					</AbsoluteFill>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}})}
					presentation={slide({direction: 'from-top'})}
				/>
				<TransitionSeries.Sequence durationInFrames={50}>
					<AbsoluteFill
						style={{scale: '0.8', borderRadius: 50, overflow: 'hidden'}}
					>
						<LetterA />
					</AbsoluteFill>
				</TransitionSeries.Sequence>
			</TransitionSeries>
		</AbsoluteFill>
	);
};
