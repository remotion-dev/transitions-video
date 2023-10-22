import type {
	TransitionPresentationComponentProps,
	TransitionPresentation,
} from '@remotion/transitions';
import React, {useMemo} from 'react';
import {AbsoluteFill, interpolate} from 'remotion';

type CubePresentationProps = {
	direction: 'from-left' | 'from-right';
	perspective: number;
};

const Cube: React.FC<
	TransitionPresentationComponentProps<CubePresentationProps>
> = ({children, presentationDirection, presentationProgress, passedProps}) => {
	const style: React.CSSProperties = useMemo(() => {
		const startRotationEntering =
			passedProps.direction === 'from-left' ? 90 : -90;
		const endRotationEntering =
			passedProps.direction === 'from-left' ? -90 : 90;

		const startPositionEntering =
			passedProps.direction === 'from-left' ? 100 : -100;
		const startPositionExiting =
			passedProps.direction === 'from-left' ? -100 : 100;

		const transformOriginEntering =
			passedProps.direction === 'from-left' ? 'left' : 'right';
		const transformOriginExiting =
			passedProps.direction === 'from-left' ? 'right' : 'left';

		const rotation =
			presentationDirection === 'entering'
				? interpolate(presentationProgress, [0, 1], [startRotationEntering, 0])
				: interpolate(presentationProgress, [0, 1], [0, endRotationEntering]);

		const transformOrigin =
			presentationDirection === 'entering'
				? transformOriginEntering
				: transformOriginExiting;

		const translateX = `${
			presentationDirection === 'entering'
				? interpolate(presentationProgress, [0, 1], [startPositionEntering, 0])
				: interpolate(presentationProgress, [0, 1], [0, startPositionExiting])
		}%`;

		return {
			width: '100%',
			height: '100%',
			transformOrigin,
			transform: `translateX(${translateX}) rotateY(${rotation}deg)`,
			backfaceVisibility: 'hidden',
		};
	}, [passedProps.direction, presentationDirection, presentationProgress]);

	return (
		<AbsoluteFill style={{perspective: passedProps.perspective}}>
			<AbsoluteFill style={style}>{children}</AbsoluteFill>
		</AbsoluteFill>
	);
};

export const cube = (
	props: CubePresentationProps
): TransitionPresentation<CubePresentationProps> => {
	return {component: Cube, props};
};
