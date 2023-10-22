import {Audio, staticFile} from 'remotion';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {FlyWheel} from './FlyWheel';

export const Main: React.FC = () => {
	return (
		<AbsoluteFill>
			<Audio src={staticFile('idontwannawork.wav')} />
			<FlyWheel />
		</AbsoluteFill>
	);
};
