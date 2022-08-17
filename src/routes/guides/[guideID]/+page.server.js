import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, params }) {
	const res = await fetch(`${url.origin}/api/guides/${params.guideID}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	});
	const guide = await res.json();

	if (res.ok) {
		return {
			guide,
		};
	}

	throw redirect(301, '/guides');
}
