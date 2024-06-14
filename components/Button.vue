<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";
import { ref, onMounted, watchEffect, computed } from "vue";

const button = cva(
	"inline-flex items-center justify-center border rounded-full transition-all text-sm font-normal whitespace-nowrap text-center",
	{
		variants: {
			intent: {
				default:
					"text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 border-transparent",
				inverse:
					"text-gray-700 border-white bg-white hover:bg-gray-100 active:bg-gray-200",
				secondary:
					"text-white bg-gray-900 hover:bg-blue-600 active:bg-blue-700 border-transparent",
				ghost:
					"hover:text-blue-500 active:text-blue-500 hover:bg-blue-50 active:bg-blue-100 border-transparent",
			},
			size: {
				small: "text-sm py-1.5 px-2",
				medium: "text-base py-3 px-8",
			},
		},
	}
);

type ButtonProps = VariantProps<typeof button>;

const props = withDefaults(
	defineProps<{
		intent?: ButtonProps["intent"];
		size?: ButtonProps["size"];
		willGrow?: boolean;
		isFullWidth?: boolean;
		customClass?: string;
	}>(),
	{
		intent: "default",
		size: "medium",
		willGrow: false,
		isFullWidth: false,
		customClass: undefined,
	}
);

const buttonRef = ref<HTMLButtonElement | null>(null);
const initialWidth = ref("auto");
const originalInitialWidth = ref("auto");

const buttonWidth = computed(() => {
	const overrideWidthFull = props.customClass?.includes("w-full") ?? false; // Updated to use 'props.customClass'
	const width =
		(props.willGrow && props.isFullWidth) || overrideWidthFull
			? "100%"
			: initialWidth.value;
	return width;
});

onMounted(() => {
	if (buttonRef.value) {
		initialWidth.value = `${buttonRef.value.offsetWidth}px`;
		originalInitialWidth.value = initialWidth.value;
	}
});

watchEffect(() => {
	if (props.willGrow && props.isFullWidth) {
		initialWidth.value = "100%";
	} else if (props.willGrow && !props.isFullWidth) {
		initialWidth.value = originalInitialWidth.value;
	}
});

const emit = defineEmits<{
	(event: "click"): void;
}>();

const handleClick = () => {
	emit("click");
};
</script>

<template>
	<button
		:class="[button({ intent, size }), props.customClass]"
		:style="{ width: buttonWidth }"
		ref="buttonRef"
		@click="handleClick"
	>
		<slot />
	</button>
</template>

<style scoped>
button {
	transition: all 0.15s ease;
}
</style>
