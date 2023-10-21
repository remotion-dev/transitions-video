import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {Grid} from './Grid';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="Grid"
				component={Grid}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
