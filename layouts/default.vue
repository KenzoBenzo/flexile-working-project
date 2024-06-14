<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
	<div class="flex flex-col md:flex-row min-h-screen">
		<Sidebar />
		<main class="bg-white w-full flex-1">
			<slot />
		</main>
	</div>
</template>
