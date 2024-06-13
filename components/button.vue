<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
	"inline-flex border rounded-full transition-all text-sm font-normal whitespace-nowrap",
	{
		variants: {
			intent: {
				default:
					"text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 border-transparent",
				outline:
					"text-gray-700 border-gray-500 bg-white hover:bg-gray-50 active:bg-gray-100",
				secondary:
					"text-white bg-gray-900 hover:bg-blue-600 active:bg-blue-700 border-transparent",
				ghost:
					"hover:text-blue-500 active:text-blue-500 hover:bg-blue-50 active:bg-blue-100 border-transparent",
			},
			size: {
				small: "text-sm py-1.5 px-2",
				medium: "text-base py-2.5 px-4",
			},
		},
	}
);

type ButtonProps = VariantProps<typeof button>;

withDefaults(
	defineProps<{
		intent: ButtonProps["intent"];
		size: ButtonProps["size"];
	}>(),
	{
		intent: "default",
		size: "medium",
	}
);
</script>

<template>
	<button :class="button({ intent, size })">
		<slot />
	</button>
</template>
