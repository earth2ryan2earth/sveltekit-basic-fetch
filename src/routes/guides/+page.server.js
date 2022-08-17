import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	});
	const guides = await res.json();

	if (res.ok) {
		return {
			guides,
		};
	}

	throw error(res.status, 'Could not fetch the guides');
}
