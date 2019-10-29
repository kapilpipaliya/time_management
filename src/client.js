import * as sapper from '@sapper/app';
import  S from 'sanctuary'
if(process.browser) {
	window.S = S
}

sapper.start({
	target: document.querySelector('#a')
});
