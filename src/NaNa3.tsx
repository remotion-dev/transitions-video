import {useCurrentFrame} from 'remotion';
import {AbsoluteFill} from 'remotion';
import React from 'react';
import {GREEN} from './colors';
import {fontFamily} from './font';

export const NaNa3: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily,
				fontSize: 250,
				color: 'white',
				backgroundColor: GREEN,
				fontWeight: 'bolder',
				fontVariationSettings: `"wght" 900, "wdth" 125`,
			}}
		>
			NA {frame < 10 ? '' : 'NA'}
		</AbsoluteFill>
	);
};
