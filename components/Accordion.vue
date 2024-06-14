<template>
	<div class="space-y-4">
		<div v-for="(item, index) in items" :key="index" class="border p-4 rounded">
			<button @click="toggle(index)" class="w-full text-left font-bold text-lg">
				{{ item.title }}
			</button>
			<div
				ref="contentRefs"
				:class="{ 'h-0 overflow-hidden': !item.open }"
				class="transition-height"
			>
				<div class="p-4">
					{{ item.content }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from "vue";

interface Item {
	title: string;
	content: string;
	open: boolean;
}

const items = ref<Item[]>([
	{ title: "Item 1", content: "Content 1", open: false },
	{ title: "Item 2", content: "Content 2", open: false },
]);

const contentRefs = ref<HTMLElement[]>([]);

const toggle = (index: number) => {
	items.value[index].open = !items.value[index].open;
	console.log(
		`Toggled item at index ${index}, new open state: ${items.value[index].open}`
	);
	nextTick(() => {
		const contentRef = contentRefs.value[index];
		if (contentRef) {
			const currentHeight = contentRef.style.height;
			const newHeight = items.value[index].open
				? `${contentRef.scrollHeight}px`
				: "0";
			console.log(
				`Content element at index ${index} current height: ${currentHeight}`
			);
			console.log(
				`Setting height of content element at index ${index} to ${newHeight}`
			);
			contentRef.style.height = newHeight;
		} else {
			console.log(`No content ref found at index ${index}`);
		}
	});
};

onMounted(() => {
	console.log("mounted hook called");
	contentRefs.value = contentRefs.value.slice(0, items.value.length); // Initialize with correct length
	console.log("Initial contentRefs:", contentRefs.value);
	contentRefs.value.forEach((ref, index) => {
		if (ref) {
			ref.style.height = "0"; // Set initial height to 0
			console.log(
				`Initial height of content element at index ${index}: ${ref.style.height}`
			);
		}
	});
});
</script>

<style>
.transition-height {
	transition: height 0.2s ease-in-out;
	overflow: hidden;
}
</style>
