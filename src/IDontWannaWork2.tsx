import {springTiming, TransitionSeries} from '@remotion/transitions';
import {Letter} from './Letter';
import {cube} from './presentations/cube';

export const IDontWannaWork2: React.FC = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Letter backgroundColor="#3B82EB" letter="I" />
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
				<Letter backgroundColor="#3B82EB" letter="Dont" />
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
				<Letter backgroundColor="#3B82EB" letter="Wanna" />
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
				<Letter backgroundColor="#3B82EB" letter="Work" />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
