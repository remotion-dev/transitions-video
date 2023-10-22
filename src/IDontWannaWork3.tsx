import {springTiming, TransitionSeries} from '@remotion/transitions';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {BLUE, PINK} from './colors';
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
					<TransitionSeries.Sequence style={{}} durationInFrames={20}>
						<Letter color={BLUE} backgroundColor="transparent" letter="I" />
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
					<TransitionSeries.Sequence style={{}} durationInFrames={20}>
						<Letter color={PINK} backgroundColor="transparent" letter="DONT" />
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
					<TransitionSeries.Sequence durationInFrames={20}>
						<Letter color={BLUE} backgroundColor="transparent" letter="WANNA" />
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
					<TransitionSeries.Sequence style={{}} durationInFrames={50}>
						<Letter color={PINK} backgroundColor="transparent" letter="WORK" />
					</TransitionSeries.Sequence>
				</TransitionSeries>
			</div>
		</AbsoluteFill>
	);
};
