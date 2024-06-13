<template>
	<div class="relative w-fit overflow-hidden">
		<div class="flex relative overflow-hidden">
			<button
				v-for="(item, index) in items"
				:key="item"
				:class="[
					'inline-flex border border-transparent rounded-full transition-all text-base py-2.5 px-4 font-normal whitespace-nowrap flex-1 text-center cursor-pointer relative duration-200 z-10 hover:bg-blue-500/15 hover:text-blue-500',
					{
						'text-white hover:text-white hover:bg-blue-700 active:bg-blue-800':
							activeTab === index,
					},
				]"
				size="medium"
				intent="ghost"
				@click="handleTabClick(index)"
			>
				{{ item.label }}
			</button>
			<transition :name="transitionName">
				<div
					class="absolute inset-0 h-full bg-blue-600 transition-transform duration-200 ease-in-out z-0 rounded-full"
					:style="indicatorStyle"
					v-if="showIndicator"
				/>
			</transition>
		</div>
		<transition-group name="tab-content" tag="div" class="relative">
			<div
				v-for="(item, index) in items"
				v-show="activeTab === index"
				:key="item"
			>
				<slot :name="item.label" />
			</div>
		</transition-group>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
import Button from "@/components/button.vue";

const props = defineProps({
	items: Array,
});

const activeTab = ref(0);
const showIndicator = ref(true);
const transitionName = ref("slide");

const indicatorStyle = computed(() => ({
	transform: `translateX(${activeTab.value * 100}%)`,
	width: `${100 / props.items.length}%`,
}));

const handleTabClick = (index) => {
	activeTab.value = index;
};
</script>

<style>
.tab-content-enter-active,
.tab-content-leave-active {
	transition: opacity 0.5s;
}
.tab-content-enter,
.tab-content-leave-to {
	opacity: 0;
}
</style>
