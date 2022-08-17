import { error } from '@sveltejs/kit';
import { guides } from '$lib/guides.js';

/** @type {import('./$types').RequestHandler} */
export function GET({ params }) {
	// connect to DB to request & receive data

	const guide = guides.find((g) => g.id == params.guideID);
	if (guide) return new Response(JSON.stringify(guide));
	throw error(404, 'Guide does not exist');
}
