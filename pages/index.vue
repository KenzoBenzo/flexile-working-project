<script setup>
import { ref, computed } from "vue";
import PillTab from "@/components/pill-tab.vue";
import Button from "@/components/Button.vue";
</script>

<template>
	<header
		class="bg-gray-300 px-4 py-6 sm:py-6 sm:px-16 w-full flex flex-col gap-6 border-b border-b-gray-500"
	>
		<search
			class="flex items-center bg-white w-full rounded-full px-3 focus-within:ring-1"
		>
			<label for="search-input">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 text-gray-600"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.35-4.35" />
				</svg>
			</label>
			<input
				id="search-input"
				class="text-sm placeholder:text-sm bg-transparent px-3 py-2 w-full placeholder:text-gray-500 outline-none ring-0"
				placeholder="Search invoices, people..."
			/>
		</search>
		<h1 class="text-3xl font-semibold">Invoicing</h1>
	</header>
	<div class="px-4 sm:px-14 py-6">
		<PillTab :items="['Segment 1', 'Segment 2', 'Segment 3']" ref="pillTab" />

		<div class="flex gap-2">
			<Button intent="default" size="medium">Open</Button>
			<Button intent="ghost" size="medium">History</Button>
		</div>
		<div class="bg-gray-300 p-5 rounded-xl mt-6">
			<h2 class="text-lg font-bold">
				Verify your bank account to enable contractor payments
			</h2>
			<p class="text-sm mt-3">
				To ensure seamless payments to your contractors, we need to confirm your
				bank account details.
			</p>
			<Button intent="secondary" class="mt-3">Verify bank account</Button>
		</div>
	</div>
</template>
