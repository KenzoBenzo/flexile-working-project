<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";

const isFullWidth = ref(false);
const initialWidth = ref("auto");
const buttonRef = ref<HTMLButtonElement | null>(null);

const buttonWidth = computed(() => {
	return isFullWidth.value ? "100%" : initialWidth.value;
});

const toggleWidth = () => {
	isFullWidth.value = !isFullWidth.value;
};

const storeInitialWidth = () => {
	if (buttonRef.value) {
		initialWidth.value = `${buttonRef.value.offsetWidth}px`;
	}
};

onMounted(() => {
	nextTick(() => {
		storeInitialWidth();
	});
});
</script>

<template>
	<div class="w-full">
		<transition name="grow">
			<button
				ref="buttonRef"
				@click="toggleWidth"
				:style="{ width: buttonWidth }"
				class="bg-blue-600 whitespace-nowrap px-6 py-2 text-white transition-all"
			>
				Click me
			</button>
		</transition>
	</div>
</template>

<style scoped>
.grow-enter-active,
.grow-leave-active {
	transition: width 0.5s ease;
}

.grow-enter,
.grow-leave-to {
	width: auto; /* Ensure proper initial width */
}
</style>
