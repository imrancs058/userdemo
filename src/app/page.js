import DashboardView from './main';

async function getData() {
	const res = await fetch(
		'https://run.mocky.io/v3/94a17db3-a206-479f-a6cb-bdba21aa270d'
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Home() {
	const data = await getData();
	return (
		<main>
			<title>E-commerce</title>
			<DashboardView data={data} />
		</main>
	);
}
