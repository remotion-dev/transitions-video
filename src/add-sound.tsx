import {Audio} from 'remotion';
import {
	TransitionPresentation,
	TransitionPresentationComponentProps,
} from '@remotion/transitions';
import React from 'react';

export function addSound<T extends Record<string, unknown>>(
	transition: TransitionPresentation<T>,
	src: string
): TransitionPresentation<T> {
	const {component: Component, props: resultingProps} = transition;

	const C = Component as React.FC<TransitionPresentationComponentProps<T>>;

	const NewComponent: React.FC<TransitionPresentationComponentProps<T>> = (
		p
	) => {
		return (
			<>
				{p.presentationDirection === 'entering' ? <Audio src={src} /> : null}
				<C {...p} />
			</>
		);
	};

	return {
		component: NewComponent,
		props: resultingProps,
	};
}
