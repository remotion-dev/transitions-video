import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {FlyWheel} from './FlyWheel';
import {NanaGrid} from './Grid';
import {Main} from './Main';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={25 * 30}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={25 * 30}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="Grid"
				component={NanaGrid}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="FlyWheel"
				component={FlyWheel}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
