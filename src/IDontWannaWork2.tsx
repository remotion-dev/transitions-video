import {springTiming, TransitionSeries} from '@remotion/transitions';
import {Letter} from './Letter';
import {cube} from './presentations/cube';
import {BLUE, GREEN, ORANGE, PINK} from './colors';

export const IDontWannaWork2: React.FC = () => {
	return (
		<TransitionSeries
			style={{
				scale: '0.8',
			}}
		>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Letter
					fontSize={600}
					borderRadius={40}
					backgroundColor={BLUE}
					letter="I"
				/>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 10,
				})}
				presentation={cube({direction: 'from-left', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Letter
					fontSize={300}
					borderRadius={40}
					backgroundColor={GREEN}
					letter="DONT"
				/>
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
				<Letter
					fontSize={220}
					borderRadius={40}
					backgroundColor={ORANGE}
					letter="WANNA"
				/>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 10,
				})}
				presentation={cube({direction: 'from-right', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={50}>
				<Letter
					fontSize={250}
					borderRadius={40}
					backgroundColor={PINK}
					letter="WORK"
				/>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
