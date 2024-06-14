<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "@/components/button.vue";

const isOpen = ref(false);
const contentRef = ref<HTMLElement | null>(null);

const toggleButton = () => {
	isOpen.value = !isOpen.value;
	console.log("isOpen.value:", isOpen.value);

	if (contentRef.value) {
		const newHeight = isOpen.value ? `${contentRef.value.scrollHeight}px` : "0";
		console.log("Setting new height:", newHeight);
		contentRef.value.style.height = newHeight;
	} else {
		console.log("contentRef.value is null or undefined");
	}
};

const closeCard = () => {
	isOpen.value = false;
	if (contentRef.value) {
		contentRef.value.style.height = "0";
	}
};

onMounted(() => {
	if (contentRef.value) {
		console.log("contentRef.value:", contentRef.value);
		contentRef.value.style.height = "0"; // Set initial height to 0
		console.log("Initial height:", contentRef.value.style.height);
	} else {
		console.log("contentRef.value is null or undefined");
	}
});
</script>

<template>
	<div
		:class="[
			'bg-gray-300 border border-gray-300 p-5 rounded-2xl mt-6 transition-max-height duration-200 ease-in-out relative',
			{ 'bg-white border-gray-700': isOpen },
		]"
	>
		<button
			class="absolute top-4 right-4 hover:text-blue-500 transition-all"
			v-if="isOpen"
			@click="closeCard"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				strokeWidth="1.5"
			>
				<path stroke="currentColor" d="m1.5 1.5 21 21m0-21-21 21" />
			</svg>
		</button>

		<h2 class="text-lg font-bold">
			Verify your bank account{{
				isOpen ? " to enable contractor payments" : ""
			}}
		</h2>
		<p class="text-sm mt-2">
			{{
				isOpen
					? "Check your bank account for a $0.01 deposit from Strip on Jun 13, 2024. The transaction's description will have your 6-digit verification code starting with 'SM'."
					: "To ensure seamless payments to your contractors, we need to confirm your bank account details."
			}}
		</p>
		<div
			ref="contentRef"
			:class="{ 'h-0 overflow-hidden': !isOpen }"
			class="transition-height"
		>
			<div class="mt-4">
				<label for="code" class="block text-sm font-medium text-gray-700"
					>6-digit code</label
				>
				<div class="mt-1">
					<input
						id="code"
						type="number"
						max="100000"
						class="block w-[calc(100%-4px)] border border-gray-700 p-2 rounded sm:text-sm font-mono outline-none focus:shadow-outline-gray m-0.5"
						ref="codeInput"
						autocomplete="one-time-code"
					/>
				</div>
			</div>
		</div>
		<div class="flex">
			<Button
				intent="secondary"
				size="medium"
				:willGrow="true"
				class="mt-4"
				:isFullWidth="isOpen"
				@click="toggleButton"
			>
				{{ isOpen ? "Submit" : "Verify bank account" }}
			</Button>
		</div>
	</div>
</template>

<style>
.transition-height {
	transition: height 0.2s ease-in-out;
}
</style>
