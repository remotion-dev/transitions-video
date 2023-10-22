import type {
	TransitionPresentationComponentProps,
	TransitionPresentation,
} from '@remotion/transitions';
import React, {useMemo} from 'react';
import {AbsoluteFill, interpolate} from 'remotion';

type CubePresentationProps = {
	direction: 'from-left' | 'from-right';
};

const Cube: React.FC<
	TransitionPresentationComponentProps<CubePresentationProps>
> = ({children, presentationDirection, presentationProgress, passedProps}) => {
	const style: React.CSSProperties = useMemo(() => {
		const rotation =
			presentationDirection === 'entering'
				? interpolate(presentationProgress, [0, 1], [90, 0])
				: interpolate(presentationProgress, [0, 1], [0, -90]);

		const transformOrigin =
			presentationDirection === 'entering' ? 'left' : 'right';

		const translateX = `${
			presentationDirection === 'entering'
				? interpolate(presentationProgress, [0, 1], [100, 0])
				: interpolate(presentationProgress, [0, 1], [0, -100])
		}%`;

		return {
			width: '100%',
			height: '100%',
			transformOrigin,
			transform: `translateX(${translateX}) rotateY(${rotation}deg)`,
			backfaceVisibility: 'hidden',
		};
	}, [presentationDirection, presentationProgress]);

	return (
		<AbsoluteFill style={{perspective: 1000}}>
			<AbsoluteFill style={style}>{children}</AbsoluteFill>
		</AbsoluteFill>
	);
};

export const cube = (
	props: CubePresentationProps
): TransitionPresentation<CubePresentationProps> => {
	return {component: Cube, props};
};
