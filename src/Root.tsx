import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {CubeDemo} from './Cube';
import {FlyWheel} from './FlyWheel';
import {NanaGrid} from './Grid';
import {Main} from './Main';
import {TextMask} from './TextMask';

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
			<Composition
				id="TextMask"
				component={TextMask}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="CubeDemo"
				component={CubeDemo}
				durationInFrames={400}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
