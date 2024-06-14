<template>
	<div class="flex gap-8 mt-6 items-stretch">
		<label
			v-for="(item, index) in items"
			:key="index"
			class="flex-1"
			@click="handleClick(item, index)"
		>
			<input type="radio" :name="name" :value="item.route" class="hidden" />
			<div
				:class="[
					'border p-6 rounded-2xl cursor-pointer transition-colors duration-50',
					{
						'bg-blue-100 border-blue-500': activeRadioIndex === index,
						'border-gray-500 hover:bg-blue-100': activeRadioIndex !== index,
					},
				]"
			>
				<p class="font-bold text-xl">{{ item.title }}</p>
				<p class="text-xs">{{ item.label }}</p>
			</div>
		</label>
	</div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRoute, useRouter } from "nuxt/app";

const props = defineProps({
	items: {
		type: Array,
		required: true,
		validator: (items) =>
			items.every((item) => item.title && item.label && item.route),
	},
	name: {
		type: String,
	},
});

const emit = defineEmits(["radioClick"]);
const router = useRouter();
const route = useRoute();

const activeRadioIndex = computed(() => {
	return props.items.findIndex((item) => item.route === route.fullPath);
});

const handleClick = (item, index) => {
	emit("radioClick", item, index);
	router.push(item.route);
};
</script>
