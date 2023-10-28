import {Audio, Sequence, staticFile} from 'remotion';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {FlyWheel} from './FlyWheel';

export const Main: React.FC = () => {
	return (
		<AbsoluteFill>
			<Sequence from={20}>
				<Audio src={staticFile('idontwannawork.wav')} />
			</Sequence>
			<Sequence from={760}>
				<Audio src={staticFile('whip.mp3')} />
			</Sequence>
			<FlyWheel />
		</AbsoluteFill>
	);
};
