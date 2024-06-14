<template>
	<div class="flex flex-col md:flex-row min-h-screen">
		<nav class="bg-gray-900 h-16 w-full md:h-screen md:w-56"></nav>
		<main class="bg-white w-full flex-1">
			<slot />
		</main>
	</div>
</template>
