<script setup>
import { ref, computed } from "vue";
import Button from "@/components/Button.vue";
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

const radioItems = [
	{ title: "0", label: "Awaiting your approval", route: "/" },
	{ title: "0", label: "Approved", route: "/?filter=approved" },
	{
		title: "0",
		label: "Rejected or failed",
		route: "/?filter=rejected_or_failed",
	},
];

const isHistoryRoute = computed(() => route.query.filter === "history");
const isApprovedRoute = computed(() => route.query.filter === "approved");
const isRejectedOrFailedRoute = computed(
	() => route.query.filter === "rejected_or_failed"
);
</script>

<template>
	<header
		class="bg-gray-300 px-4 py-6 md:py-6 md:px-[4.5rem] w-full flex flex-col gap-6 border-b border-b-gray-500"
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

	<div class="px-4 md:px-[4.5rem] py-6">
		<PillTabs
			:items="tabItems"
			:activeTab="activeTabIndex"
			@tabClick="handleTabClick"
		/>

		<ConnectBank />

		<ExpandableSection :expanded="!isHistoryRoute">
			<RadioCards name="invoices" :items="radioItems" />
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
				<span v-if="isHistoryRoute">No invoices awaiting your approval</span>
				<span v-else-if="isApprovedRoute">No approved invoices</span>
				<span v-else-if="isRejectedOrFailedRoute">
					No rejected or failed invoices
				</span>
				<span v-else>No invoices</span>
			</p>
		</div>
	</div>
</template>
