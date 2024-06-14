<script setup lang="ts">
import { ref, watch } from "vue";
import Button from "@/components/Button.vue";
import ExpandableSection from "@/components/ExpandableSection.vue";

const isOpen = ref(false);
const codeInput = ref<HTMLInputElement | null>(null);
const codeValue = ref("SW");

const closeCard = () => {
	isOpen.value = false;
};

watch(isOpen, (newValue) => {
	if (newValue && codeInput.value) {
		codeInput.value.focus();
		codeInput.value.setSelectionRange(2, 2);
	}
});
</script>

<template>
	<div
		:class="[
			'bg-gray-300 border border-gray-300 px-6 py-4 rounded-2xl mt-6 relative transition-all duration-200 ease-[var(--ease-out-expo)]',
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

		<h2 class="text-xl font-bold">
			Verify your bank account{{
				isOpen ? "" : " to enable contractor payments"
			}}
		</h2>
		<p class="text-sm mt-3">
			{{
				isOpen
					? "Check your bank account for a $0.01 deposit from Strip on Jun 13, 2024. The transaction's description will have your 6-digit verification code starting with 'SM'."
					: "To ensure seamless payments to your contractors, we need to confirm your bank account details."
			}}
		</p>

		<ExpandableSection :expanded="isOpen">
			<div class="mt-6">
				<p class="text-sm mb-6">
					If it's not visible yet, please check in 1-2 days.
				</p>
				<label for="code" class="block text-sm font-medium text-gray-700 pl-0.5"
					>6-digit code</label
				>
				<div class="mt-2 mb-3">
					<input
						id="code"
						v-model="codeValue"
						type="text"
						maxlength="6"
						class="block w-[calc(100%-4px)] border border-gray-700 p-2 rounded sm:text-sm font-mono outline-none focus:shadow-outline-gray m-0.5 uppercase"
						ref="codeInput"
						autocomplete="one-time-code"
					/>
				</div>
			</div>
		</ExpandableSection>

		<div
			:class="[
				'bg-gray-300 flex mt-3 transition-all duration-200 ease-[var(--ease-out-expo)]',
				{ 'bg-white border-gray-700': isOpen },
			]"
		>
			<Button
				intent="secondary"
				size="medium"
				:willGrow="true"
				:isFullWidth="isOpen"
				@click="isOpen = !isOpen"
			>
				{{ isOpen ? "Submit" : "Verify bank account" }}
			</Button>
		</div>
	</div>
</template>
