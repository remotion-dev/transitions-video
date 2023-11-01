import {Audio, Sequence, staticFile} from 'remotion';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {MainSequence} from './MainSequence';

export const Main: React.FC = () => {
	return (
		<AbsoluteFill>
			<Sequence from={20}>
				<Audio src={staticFile('idontwannawork.wav')} />
			</Sequence>
			<MainSequence />
		</AbsoluteFill>
	);
};
