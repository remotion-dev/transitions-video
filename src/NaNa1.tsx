import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';
import {AbsoluteFill, spring} from 'remotion';
import React from 'react';
import {BLUE} from './colors';
import {fontFamily} from './font';

export const NaNa1: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily,
				fontSize: 250,
				color: 'white',
				backgroundColor: BLUE,
				fontWeight: 'bolder',
				fontVariationSettings: `"wght" 900, "wdth" 125`,
			}}
		>
			<div>
				<span
					style={{
						display: 'inline-block',
						scale: String(spring({fps, frame, durationInFrames: 10})),
					}}
				>
					NA{' '}
				</span>
				<span
					style={{
						display: 'inline-block',
						scale: String(spring({fps, frame, durationInFrames: 10, delay: 5})),
					}}
				>
					NA
				</span>
			</div>
		</AbsoluteFill>
	);
};
