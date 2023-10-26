import {AbsoluteFill, useCurrentFrame} from 'remotion';
import React from 'react';
import {PINK} from './colors';
import {fontFamily} from './font';

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
