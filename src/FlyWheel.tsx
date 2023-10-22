import {springTiming, TransitionSeries} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Different} from './Different';
import {NanaGrid} from './Grid';
import {IDontWannaWork} from './IDontWannaWork';
import {IDontWannaWork2} from './IDontWannaWork2';
import {IDontWannaWork3} from './IDontWannaWork3';
import {IDontWannaWork4} from './IDontWannaWork4';
import {Letter} from './Letter';
import {Lottery} from './Lottery';
import {cube} from './presentations/cube';
import {flywheel} from './presentations/flywheel';
import {TextMask} from './TextMask';

export const FlyWheel = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			<TransitionSeries style={{}}>
				<TransitionSeries.Sequence durationInFrames={25}>
					<AbsoluteFill />
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 6})}
					presentation={flywheel({anchor: 'left'})}
				/>
				<TransitionSeries.Sequence durationInFrames={25}>
					<Tile>
						<Letter letter="Na Na" backgroundColor="orange" />
					</Tile>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={flywheel({anchor: 'right'})}
				/>
				<TransitionSeries.Sequence durationInFrames={25}>
					<Tile>
						<Letter letter="Na Na" backgroundColor="black" />
					</Tile>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={flywheel({anchor: 'top'})}
				/>
				<TransitionSeries.Sequence durationInFrames={25}>
					<Tile>
						<Letter letter="Na Na" backgroundColor="green" />
					</Tile>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={flywheel({anchor: 'bottom'})}
				/>
				<TransitionSeries.Sequence durationInFrames={20}>
					<Tile>
						<Letter letter="Na" backgroundColor="pink" />
					</Tile>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={flywheel({anchor: 'top'})}
				/>
				<TransitionSeries.Sequence durationInFrames={25}>
					<Tile>
						<Letter letter="Na" backgroundColor="magenta" />
					</Tile>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={flywheel({anchor: 'left'})}
				/>
				<TransitionSeries.Sequence durationInFrames={55}>
					<Tile>
						<IDontWannaWork />
					</Tile>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={slide({direction: 'from-top'})}
				/>
				<TransitionSeries.Sequence durationInFrames={110}>
					<Tile>
						<NanaGrid />
					</Tile>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={slide({direction: 'from-top'})}
				/>
				<TransitionSeries.Sequence durationInFrames={90}>
					<Tile>
						<TextMask />
					</Tile>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={slide({direction: 'from-top'})}
				/>
				<TransitionSeries.Sequence durationInFrames={60}>
					<Tile>
						<IDontWannaWork2 />
					</Tile>
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
					presentation={slide({direction: 'from-right'})}
				/>
				<TransitionSeries.Sequence durationInFrames={50}>
					<Lottery />
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 20})}
					presentation={cube({direction: 'from-top', perspective: 1000})}
				/>
				<TransitionSeries.Sequence durationInFrames={50}>
					<Lottery />
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 20})}
					presentation={cube({direction: 'from-top', perspective: 1000})}
				/>
				<TransitionSeries.Sequence durationInFrames={70}>
					<IDontWannaWork3 />
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 20})}
					presentation={cube({direction: 'from-top', perspective: 1000})}
				/>
				<TransitionSeries.Sequence durationInFrames={90}>
					<Different />
				</TransitionSeries.Sequence>
				<TransitionSeries.Transition
					timing={springTiming({config: {damping: 200}, durationInFrames: 20})}
					presentation={cube({direction: 'from-left', perspective: 1000})}
				/>
				<TransitionSeries.Sequence durationInFrames={90}>
					<IDontWannaWork4 />
				</TransitionSeries.Sequence>
			</TransitionSeries>
		</AbsoluteFill>
	);
};

const Tile: React.FC<{children: React.ReactNode}> = ({children}) => {
	return (
		<AbsoluteFill style={{scale: '0.8', borderRadius: 50, overflow: 'hidden'}}>
			{children}
		</AbsoluteFill>
	);
};
