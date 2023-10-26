import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {fontFamily} from '@remotion/google-fonts/SofiaSansExtraCondensed';
import React from 'react';
import {PINK} from './colors';

export const NaNa2: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily,
				fontSize: 400,
				color: 'white',
				backgroundColor: PINK,
				fontWeight: 'bolder',
			}}
		>
			NA {frame < 10 ? '' : 'NA'}
		</AbsoluteFill>
	);
};
