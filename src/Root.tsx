import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {CubeDemo} from './Cube';
import {FlyWheel} from './FlyWheel';
import {NanaGrid} from './Grid';
import {IDontWannaWork2} from './IDontWannaWork2';
import {IDontWannaWork3} from './IDontWannaWork3';
import {Lottery} from './Lottery';
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
				id="IDontWannaWork2"
				component={IDontWannaWork2}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="IDontWannaWork3"
				component={IDontWannaWork3}
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
			<Composition
				id="Lottery"
				component={Lottery}
				durationInFrames={400}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
