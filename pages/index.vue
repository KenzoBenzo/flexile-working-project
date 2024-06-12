<script setup lang="ts">
const route = useRoute();
</script>

<template>
	<div>
		<h1 class="text-3xl font-bold underline">Hello world!</h1>
		<p>Current route: {{ route.path }}</p>
		<a href="https://nuxt.com/docs/getting-started/routing" target="_blank"
			>Learn more about Nuxt Routing</a
		>
		<div v-motion-pop-bottom class="h-8 w-8 rounded bg-blue-500" />
	</div>
</template>
