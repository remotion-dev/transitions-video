import type {
	TransitionPresentationComponentProps,
	TransitionPresentation,
} from '@remotion/transitions';
import React, {useMemo} from 'react';
import {AbsoluteFill, interpolate} from 'remotion';

type WheelSpingPresentationProps = {
	anchor: 'left' | 'right' | 'top' | 'bottom';
};

export const WheelSpin: React.FC<
	TransitionPresentationComponentProps<WheelSpingPresentationProps>
> = ({children, presentationDirection, presentationProgress, passedProps}) => {
	const style: React.CSSProperties = useMemo(() => {
		const angle = 15;
		const counterClockwiseAngle =
			passedProps.anchor === 'right' ? -angle : angle;

		const interpolated = interpolate(
			presentationProgress,
			[0, 1],
			presentationDirection === 'entering'
				? [-counterClockwiseAngle, 0]
				: [0, counterClockwiseAngle]
		);

		const transformOrigin =
			passedProps.anchor === 'left'
				? '-400% 50%'
				: passedProps.anchor === 'top'
				? '50% -400%'
				: passedProps.anchor === 'bottom'
				? '50% 500%'
				: '500% 50%';

		return {
			width: '100%',
			height: '100%',
			transformOrigin,
			transform: `rotate(${interpolated}deg)`,
		};
	}, [passedProps.anchor, presentationDirection, presentationProgress]);

	return (
		<AbsoluteFill>
			<AbsoluteFill style={style}>{children}</AbsoluteFill>
		</AbsoluteFill>
	);
};

export const wheelspin = (
	props: WheelSpingPresentationProps
): TransitionPresentation<WheelSpingPresentationProps> => {
	return {component: WheelSpin, props};
};
