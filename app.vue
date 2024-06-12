<script setup lang="ts">
const layout = "default";
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
	</div>
	<NuxtLayout :name="layout">
		<NuxtPage />
	</NuxtLayout>
</template>
