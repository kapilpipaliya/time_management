import { writable } from 'svelte/store';

const count = writable({});

count.subscribe(value => {
	console.log(value);
});
