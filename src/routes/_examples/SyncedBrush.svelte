<script>
	import SyncedBrushWrapper from '../../components/SyncedBrushWrapper.svelte';

	import pointsOne from '../../data/points.csv';
	import pointsTwo from '../../data/pointsTwo.csv';
	import pointsThree from '../../data/pointsThree.csv';
	import pointsFour from '../../data/pointsFour.csv';

	let brushExtents = [null, null];

	const xKey = 'myX';
	const yKey = 'myY';

	const datasets = [
		pointsOne,
		pointsTwo,
		pointsThree,
		pointsFour
	];

	datasets.forEach(dataset => {
		dataset.forEach(d => {
			d[yKey] = +d[yKey];
		});
	});
</script>

<style>
	.small-multiple-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: space-between;
	}
</style>

<div class="small-multiple-container">
	{#each datasets as dataset}
		<SyncedBrushWrapper
			data={dataset}
			{xKey}
			{yKey}
			bind:min={brushExtents[0]}
			bind:max={brushExtents[1]}
		/>
	{/each}
</div>
