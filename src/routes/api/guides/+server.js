import { guides } from '$lib/guides.js';

/** @type {import('./$types').RequestHandler} */
export function GET() {
	// connect to DB to request & receive data

	return new Response(JSON.stringify(guides));
}
