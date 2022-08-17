import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ params }) {
	// connect to DB to request & receive data

	const guides = [
		{ id: 1, title: 'some title 1' },
		{ id: 2, title: 'some title 2' },
		{ id: 3, title: 'some title 3' },
		{ id: 4, title: 'some title 4' },
		{ id: 5, title: 'some title 5' },
	];

	const guide = guides.find((g) => g.id == params.guideID);
	if (guide) return new Response(JSON.stringify(guide));
	throw error(404, 'Guide does not exist');
}
