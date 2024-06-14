<script setup>
import { ref, computed } from "vue";
import Button from "@/components/Button.vue";
import PillTabs from "@/components/PillTabs.vue";
import ConnectBank from "@/components/ConnectBank.vue";

const activeTabIndex = ref(0);
const tabItems = [
	{ label: "Open", route: "/" },
	{ label: "History", route: "/?history" },
];
const handleTabClick = (item, index) => {
	activeTabIndex.value = index;
	navigateTo(item.route);
};
</script>

<template>
	<header
		class="bg-gray-300 px-4 py-6 sm:py-6 sm:px-16 w-full flex flex-col gap-6 border-b border-b-gray-500"
	>
		<div
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
		</div>
		<h1 class="text-3xl font-semibold">Invoicing</h1>
	</header>
	<div class="px-4 sm:px-14 py-6">
		<PillTabs
			:items="tabItems"
			:activeTab="activeTabIndex"
			@tabClick="handleTabClick"
		/>

		<ConnectBank />
	</div>
</template>
