<script setup>
import { ref, computed } from "vue";
import Button from "@/components/button.vue";
import PillTabs from "@/components/PillTabs.vue";
import ConnectBank from "@/components/ConnectBank.vue";
import ExpandableSection from "@/components/ExpandableSection.vue";
import { useRoute } from "nuxt/app";

const route = useRoute();
const activeTabIndex = ref(0);
const tabItems = [
	{ label: "Open", route: "/" },
	{ label: "History", route: "/?filter=history" },
];
const handleTabClick = (item, index) => {
	activeTabIndex.value = index;
	navigateTo(item.route);
};
const isHistoryRoute = computed(() => route.query.filter === "history");
</script>

<template>
	<header
		class="bg-gray-300 px-4 py-6 sm:py-6 sm:px-[4.5rem] w-full flex flex-col gap-6 border-b border-b-gray-500"
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

	<div class="px-4 sm:px-[4.5rem] py-6">
		<PillTabs
			:items="tabItems"
			:activeTab="activeTabIndex"
			@tabClick="handleTabClick"
		/>

		<ConnectBank />

		<ExpandableSection :expanded="!isHistoryRoute">
			<div class="flex gap-8 mt-6 items-stretch">
				<div class="bg-blue-100 border border-blue-500 p-6 rounded-2xl flex-1">
					<p class="font-bold text-xl">0</p>
					<p class="text-xs">Awaiting your approval</p>
				</div>
				<div class="border border-gray-500 p-6 rounded-2xl flex-1">
					<p class="font-bold text-xl">0</p>
					<p class="text-xs">Approved</p>
				</div>
				<div class="border border-gray-500 p-6 rounded-2xl flex-1">
					<p class="font-bold text-xl">0</p>
					<p class="text-xs">Rejected or failed</p>
				</div>
			</div>
		</ExpandableSection>

		<div
			class="w-full rounded-2xl border border-dashed border-gray-300 p-8 mt-6 text-gray-500"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewbox="0 0 24 24"
				fill="none"
				strokeWidth="4"
				class="mx-auto h-7 w-7"
			>
				<circle cx="12" cy="12" r="10" stroke="currentColor" />
				<path stroke="currentColor" d="m7.25 12.75 3.5 3 6-7.5" />
			</svg>
			<p class="mx-auto text-center text-sm mt-2">
				No invoices <span v-if="!isHistoryRoute">awaiting your approval</span>
			</p>
		</div>
	</div>
</template>
