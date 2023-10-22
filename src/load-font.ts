import {staticFile} from 'remotion';

export const loadFont = async () => {
	const font = new FontFace('Menhir', `url(${staticFile('Menhir.woff2')})`);
	font.load().then((loadedFont) => {
		document.fonts.add(loadedFont);
	});
};
