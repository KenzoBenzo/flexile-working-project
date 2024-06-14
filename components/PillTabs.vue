<template>
	<div class="relative w-fit overflow-hidden">
		<div class="flex gap-2 relative overflow-hidden">
			<button
				v-for="(item, index) in items"
				:key="item.label"
				:class="[
					'inline-flex border border-transparent rounded-full transition-all text-sm py-2.5 px-4 font-normal whitespace-nowrap flex-1 text-center cursor-pointer relative duration-200 z-[1]',
					{
						'hover:bg-blue-500/15 hover:text-blue-500': activeTab !== index,
						'text-white hover:text-white': activeTab === index,
					},
				]"
				size="medium"
				intent="ghost"
				@click="handleClick(item, index)"
				:ref="(el) => (buttonRefs[index] = el)"
			>
				{{ item.label }}
			</button>
		</div>
		<transition :name="transitionName">
			<div
				class="absolute inset-0 h-full bg-blue-600 transition-transform duration-200 ease-[var(--ease-out-quart)] z-0 rounded-full pointer-events-none"
				:style="indicatorStyle"
				v-if="showIndicator"
			/>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, watch } from "vue";
import Button from "@/components/button.vue";

const props = defineProps({
	items: Array,
	activeTab: Number,
});

const emit = defineEmits(["tabClick"]);

const showIndicator = ref(true);
const transitionName = ref("slide");
const buttonRefs = ref([]);
const indicatorStyle = ref({ width: "0px" });

const getIndicatorStyle = () => {
	const activeButton = buttonRefs.value[props.activeTab];
	if (activeButton) {
		const rect = activeButton.getBoundingClientRect();
		const parentRect = activeButton.parentElement.getBoundingClientRect();
		return {
			transform: `translateX(${rect.left - parentRect.left}px)`,
			width: `${rect.width}px`,
		};
	}
	return {};
};

const handleClick = (item, index) => {
	emit("tabClick", item, index);
};

const updateIndicator = () => {
	nextTick(() => {
		indicatorStyle.value = getIndicatorStyle();
	});
};

onMounted(() => {
	updateIndicator();
});

watch(() => props.activeTab, updateIndicator);
</script>

<style>
.tab-content-enter-active,
.tab-content-leave-active {
	transition: opacity 0.2s;
}
.tab-content-enter,
.tab-content-leave-to {
	opacity: 0;
}
</style>
