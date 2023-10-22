/* eslint-disable complexity */
import type {
	TransitionPresentationComponentProps,
	TransitionPresentation,
} from '@remotion/transitions';
import React, {useMemo} from 'react';
import {AbsoluteFill, interpolate} from 'remotion';

type FlipPresentationProps = {
	direction: 'from-left' | 'from-right' | 'from-top' | 'from-bottom';
	perspective: number;
};

const Flip: React.FC<
	TransitionPresentationComponentProps<FlipPresentationProps>
> = ({children, presentationDirection, presentationProgress, passedProps}) => {
	const style: React.CSSProperties = useMemo(() => {
		const startRotationEntering =
			passedProps.direction === 'from-left' ||
			passedProps.direction === 'from-bottom'
				? 180
				: -180;
		const endRotationEntering =
			passedProps.direction === 'from-left' ||
			passedProps.direction === 'from-bottom'
				? -180
				: 180;

		const rotation =
			presentationDirection === 'entering'
				? interpolate(presentationProgress, [0, 1], [startRotationEntering, 0])
				: interpolate(presentationProgress, [0, 1], [0, endRotationEntering]);

		const rotateProperty =
			passedProps.direction === 'from-top' ||
			passedProps.direction === 'from-bottom'
				? 'rotateX'
				: 'rotateY';

		return {
			width: '100%',
			height: '100%',
			transform: `${rotateProperty}(${rotation}deg)`,
			backfaceVisibility: 'hidden',
			WebkitBackfaceVisibility: 'hidden',
		};
	}, [passedProps.direction, presentationDirection, presentationProgress]);

	return (
		<AbsoluteFill
			style={{
				perspective: passedProps.perspective,
				transformStyle: 'preserve-3d',
			}}
		>
			<AbsoluteFill style={style}>{children}</AbsoluteFill>
		</AbsoluteFill>
	);
};

export const flip = (
	props: FlipPresentationProps
): TransitionPresentation<FlipPresentationProps> => {
	return {component: Flip, props};
};
