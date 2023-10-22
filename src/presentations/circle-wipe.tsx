import {getBoundingBox, translatePath} from '@remotion/paths';
import {makeCircle} from '@remotion/shapes';
import type {TransitionPresentationComponentProps} from '@remotion/transitions';
import React, {useMemo, useState} from 'react';
import {AbsoluteFill, random} from 'remotion';
import type {TransitionPresentation} from '@remotion/transitions';

export type CustomPresentationProps = {
	width: number;
	height: number;
};

const SlidePresentation: React.FC<
	TransitionPresentationComponentProps<CustomPresentationProps>
> = ({children, presentationDirection, presentationProgress, passedProps}) => {
	const finishedRadius =
		Math.sqrt(passedProps.width ** 2 + passedProps.height ** 2) / 2;
	const {path} = makeCircle({
		radius: finishedRadius * presentationProgress,
	});
	const boundingBox = getBoundingBox(path);
	const translatedPath = translatePath(
		path,
		passedProps.width / 2 - boundingBox.width / 2,
		passedProps.height / 2 - boundingBox.height / 2
	);

	const [clipId] = useState(() => String(random(null)));
	const style: React.CSSProperties = useMemo(() => {
		return {
			width: '100%',
			height: '100%',
			clipPath:
				presentationDirection === 'exiting' ? undefined : `url(#${clipId})`,
		};
	}, [clipId, presentationDirection]);

	return (
		<AbsoluteFill>
			<AbsoluteFill style={style}>{children}</AbsoluteFill>
			{presentationDirection === 'exiting' ? null : (
				<AbsoluteFill>
					<svg>
						<defs>
							<clipPath id={clipId}>
								<path d={translatedPath} fill="black" />
							</clipPath>
						</defs>
					</svg>
				</AbsoluteFill>
			)}
		</AbsoluteFill>
	);
};

export const circle = (
	props: CustomPresentationProps
): TransitionPresentation<CustomPresentationProps> => {
	return {component: SlidePresentation, props};
};
