import {Audio} from 'remotion';
import {
	TransitionPresentation,
	TransitionPresentationComponentProps,
} from '@remotion/transitions';
import React from 'react';

export function addSound<T extends Record<string, unknown>>(
	transition: (t: T) => TransitionPresentation<T>,
	src: string
): (t: T) => TransitionPresentation<T> {
	return (props) => {
		const {component: Component, props: resultingProps} = transition(props);

		const C = Component as React.FC<TransitionPresentationComponentProps<T>>;

		const NewComponent: React.FC<TransitionPresentationComponentProps<T>> = (
			p
		) => {
			return (
				<>
					<Audio src={src} />
					<C {...p} />
				</>
			);
		};
		return {
			component: NewComponent,
			props: resultingProps,
		};
	};
}
