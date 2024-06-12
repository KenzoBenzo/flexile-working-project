<template>
	<div class="flex flex-col sm:flex-row min-h-screen">
		<nav class="bg-gray-950 h-16 w-full sm:h-screen sm:w-56"></nav>
		<main class="bg-white w-full flex-1">
			<slot />
		</main>
	</div>
</template>
