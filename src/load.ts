import {continueRender} from 'remotion';
import {staticFile} from 'remotion';
import {delayRender} from 'remotion';

let loaded = false;

export const loadFont = () => {
	if (loaded) {
		return;
	}
	loaded = true;
	const handle = delayRender();

	const face = new FontFace(
		'Mona Sans',
		`url(${staticFile('Mona-Sans.woff2')}) format('woff2')`,
		{
			weight: '200 900',
			stretch: '75% 125%',
		}
	);
	face.load().then(() => {
		document.fonts.add(face);
		continueRender(handle);
	});
};
