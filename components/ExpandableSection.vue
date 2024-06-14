<template>
	<div
		ref="contentRef"
		:class="['transition-height overflow-hidden', { 'h-0': !isExpanded }]"
	>
		<slot />
	</div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from "vue";

const props = defineProps({
	expanded: {
		type: Boolean,
		default: false,
	},
});

const contentRef = ref(null);
const isExpanded = ref(props.expanded);

const updateHeight = (newVal) => {
	nextTick(() => {
		contentRef.value.style.height = newVal
			? `${contentRef.value.scrollHeight}px`
			: "0";
	});
};

watch(
	() => props.expanded,
	(newVal) => {
		isExpanded.value = newVal;
		updateHeight(newVal);
	}
);

onMounted(() => {
	updateHeight(isExpanded.value);
});
</script>

<style scoped>
.transition-height {
	transition: height 0.2s var(--ease-out-quad), filter 0.2s var(--ease-out-quad);
}

.transition-height.h-0 {
	filter: blur(4px);
}
</style>
