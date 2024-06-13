<template>
	<div class="relative w-72 overflow-hidden">
		<div class="flex relative overflow-hidden">
			<div
				v-for="(tab, index) in tabs"
				:key="tab"
				class="flex-1 p-2 text-center cursor-pointer relative transition-colors duration-300 z-10"
				:class="{ 'text-white': activeTab === index }"
				@click="activeTab = index"
			>
				{{ tab }}
			</div>
			<transition :name="transitionName">
				<div
					class="absolute top-0 left-0 h-full bg-blue-500 transition-transform duration-300 ease-in-out z-0 rounded-full"
					:style="indicatorStyle"
					v-if="showIndicator"
				/>
			</transition>
		</div>
		<transition-group name="tab-content" tag="div" class="relative">
			<div v-for="(tab, index) in tabs" v-show="activeTab === index" :key="tab">
				<slot :name="tab"></slot>
			</div>
		</transition-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeTab: 0,
			tabs: ["Tab1", "Tab2", "Tab3"],
			showIndicator: true,
			transitionName: "slide",
		};
	},
	computed: {
		indicatorStyle() {
			return {
				transform: `translateX(${this.activeTab * 100}%)`,
				width: `${100 / this.tabs.length}%`,
			};
		},
	},
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
