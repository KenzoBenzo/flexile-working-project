<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "@/components/button.vue";

const isOpen = ref(false);
const buttonRef = ref<HTMLElement | null>(null);

const toggleButton = () => {
	isOpen.value = !isOpen.value;
};
const closeCard = () => {
	isOpen.value = false;
};
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
		<p class="text-sm mt-3">
			{{
				isOpen
					? "Check your bank account for a $0.01 deposit from Strip on Jun 13, 2024. The transaction's description will have your 6-digit verification code starting with 'SM'."
					: "To ensure seamless payments to your contractors, we need to confirm your bank account details."
			}}
		</p>
		<p v-if="isOpen" class="text-sm mt-2">
			If it's not visible yet, please check in 1-2 days.
		</p>
		<div v-if="isOpen" class="mt-4">
			<label for="code" class="block text-sm font-medium text-gray-700"
				>6-digit code</label
			>
			<div class="mt-1">
				<input
					id="code"
					type="text"
					class="block w-full border border-gray-700 p-2 rounded sm:text-sm"
					ref="codeInput"
				/>
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
