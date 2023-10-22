import {springTiming, TransitionSeries} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {RemotionTransitions} from './RemotionTransitions';

const Title: React.FC<{
	children: React.ReactNode;
	backgroundColor: string;
}> = ({children, backgroundColor}) => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 100,
				fontWeight: 'bold',
				fontFamily: 'sans-serif',
				backgroundColor,
			}}
		>
			<div>{children}</div>
		</div>
	);
};

export const PackageManagers: React.FC = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={30}>
				<Title backgroundColor="red">npm i</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 10,
				})}
				presentation={slide({direction: 'from-right'})}
			/>
			<TransitionSeries.Sequence durationInFrames={25}>
				<Title backgroundColor="blue">bun add</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 10,
				})}
				presentation={slide({direction: 'from-right'})}
			/>

			<TransitionSeries.Sequence durationInFrames={25}>
				<Title backgroundColor="purple">pnpm add</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 10,
				})}
				presentation={slide({direction: 'from-right'})}
			/>

			<TransitionSeries.Sequence durationInFrames={25}>
				<Title backgroundColor="green">yarn add</Title>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({
					config: {
						damping: 200,
					},
					durationInFrames: 10,
				})}
				presentation={slide({direction: 'from-right'})}
			/>

			<TransitionSeries.Sequence durationInFrames={300}>
				<RemotionTransitions />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
