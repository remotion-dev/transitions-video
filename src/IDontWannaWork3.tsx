import {springTiming, TransitionSeries} from '@remotion/transitions';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Letter} from './Letter';
import {cube} from './presentations/cube';

export const IDontWannaWork3: React.FC = () => {
	const height = 300;
	const {width} = useVideoConfig();

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					width,
					height,
					position: 'relative',
				}}
			>
				<TransitionSeries>
					<TransitionSeries.Sequence
						style={{
							backgroundColor: 'black',
						}}
						durationInFrames={20}
					>
						<Letter backgroundColor="transparent" letter="I" />
					</TransitionSeries.Sequence>
					<TransitionSeries.Transition
						timing={springTiming({
							config: {
								damping: 200,
							},
							durationInFrames: 10,
						})}
						presentation={cube({direction: 'from-top', perspective: 1000})}
					/>
					<TransitionSeries.Sequence
						style={{
							backgroundColor: 'black',
						}}
						durationInFrames={20}
					>
						<Letter backgroundColor="transparent" letter="Dont" />
					</TransitionSeries.Sequence>
					<TransitionSeries.Transition
						timing={springTiming({
							config: {
								damping: 200,
							},
							durationInFrames: 10,
						})}
						presentation={cube({direction: 'from-top', perspective: 1000})}
					/>
					<TransitionSeries.Sequence
						style={{
							backgroundColor: 'black',
						}}
						durationInFrames={20}
					>
						<Letter backgroundColor="transparent" letter="Wanna" />
					</TransitionSeries.Sequence>
					<TransitionSeries.Transition
						timing={springTiming({
							config: {
								damping: 200,
							},
							durationInFrames: 10,
						})}
						presentation={cube({direction: 'from-top', perspective: 1000})}
					/>
					<TransitionSeries.Sequence
						style={{
							backgroundColor: 'black',
						}}
						durationInFrames={50}
					>
						<Letter backgroundColor="transparent" letter="Work" />
					</TransitionSeries.Sequence>
				</TransitionSeries>
			</div>
		</AbsoluteFill>
	);
};
