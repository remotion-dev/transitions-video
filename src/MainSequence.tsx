import {springTiming, TransitionSeries} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import React from 'react';
import {
	AbsoluteFill,
	Img,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {TransitionStyles} from './TransitionStyles';
import {NanaGrid} from './Grid';
import {IDontWannaWork} from './IDontWannaWork';
import {IDontWannaWork2} from './IDontWannaWork2';
import {IDontWannaWork3} from './IDontWannaWork3';
import {IDontWannaWork4} from './IDontWannaWork4';
import {Lottery} from './Lottery';
import {cube} from './presentations/cube';
import {flywheel} from './presentations/flywheel';
import {TextMask} from './TextMask';
import {PINK} from './colors';
import {NaNa1} from './NaNa1';
import {NaNa2} from './NaNa2';
import {NaNa3} from './NaNa3';
import {ThreeByThree} from './ThreeByThree';
import {RemotionTransitions} from './RemotionTransitions';
import {fontFamily} from './font';
import {BlueNa} from './BlueNa';
import {flip} from '@remotion/transitions/flip';

export const FlyWheel = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const spr = spring({fps, frame, durationInFrames: 20});
	return (
		<TransitionSeries
			style={{
				backgroundColor: 'white',
			}}
		>
			<TransitionSeries.Sequence durationInFrames={45}>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Img
						style={{height: 300, scale: String(spr)}}
						src="https://github.com/remotion-dev/brand/raw/main/withouttitle/element-0.png"
					/>
				</AbsoluteFill>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 6})}
				presentation={flywheel({anchor: 'left'})}
			/>
			<TransitionSeries.Sequence durationInFrames={25}>
				<Tile>
					<NaNa1 />
				</Tile>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={flywheel({anchor: 'right'})}
			/>
			<TransitionSeries.Sequence durationInFrames={25}>
				<Tile>
					<NaNa2 />
				</Tile>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={flywheel({anchor: 'top'})}
			/>
			<TransitionSeries.Sequence durationInFrames={25}>
				<Tile>
					<NaNa3 />
				</Tile>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={flywheel({anchor: 'bottom'})}
			/>
			<TransitionSeries.Sequence durationInFrames={20}>
				<Tile>
					<AbsoluteFill
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							fontFamily,
							fontSize: 450,
							color: 'white',
							backgroundColor: PINK,
							fontWeight: 'bolder',
							fontVariationSettings: `"wght" 900, "wdth" 125`,
						}}
					>
						NA
					</AbsoluteFill>{' '}
				</Tile>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={flywheel({anchor: 'top'})}
			/>
			<TransitionSeries.Sequence durationInFrames={25}>
				<Tile>
					<BlueNa />
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
				<IDontWannaWork2 />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={slide({direction: 'from-right'})}
			/>
			<TransitionSeries.Sequence durationInFrames={50}>
				<Lottery flipped={false} />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 20})}
				presentation={flip({direction: 'from-left', perspective: 2000})}
			/>
			<TransitionSeries.Sequence durationInFrames={50}>
				<Lottery flipped />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 20})}
				presentation={cube({direction: 'from-top', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={70}>
				<IDontWannaWork3 />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={cube({direction: 'from-top', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={80}>
				<TransitionStyles />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 20})}
				presentation={cube({direction: 'from-left', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={60}>
				<IDontWannaWork4 />
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 20})}
				presentation={cube({direction: 'from-left', perspective: 1000})}
			/>
			<TransitionSeries.Sequence durationInFrames={85}>
				<Tile noOverflow>
					<ThreeByThree />
				</Tile>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				timing={springTiming({config: {damping: 200}, durationInFrames: 10})}
				presentation={slide({direction: 'from-top'})}
			/>
			<TransitionSeries.Sequence durationInFrames={300}>
				<RemotionTransitions />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};

const Tile: React.FC<{children: React.ReactNode; noOverflow?: boolean}> = ({
	children,
	noOverflow,
}) => {
	return (
		<AbsoluteFill
			style={{
				scale: '0.8',
				borderRadius: 50,
				overflow: noOverflow ? 'visible' : 'hidden',
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
