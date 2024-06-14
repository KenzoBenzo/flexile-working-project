<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>
<template>
	<nav
		class="bg-gray-900 h-16 flex items-center justify-end md:flex-col w-full md:h-screen md:w-56 px-6 py-3"
	>
		<div
			class="flex flex-col justify-between w-full border border-dashed border-gray-400 bg-gray-800 text-white text-xs p-2 rounded-2xl min-h-48"
		>
			<div class="text-center">
				<svg
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="mx-auto mb-4 text-gray-200"
				>
					<rect
						x="2.25"
						y="7.25"
						width="15.5"
						height="15.5"
						rx="7.75"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<circle
						cx="10"
						cy="19"
						r="1.75"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<path
						d="M8 13C8 14.1046 7.10457 15 6 15C4.89543 15 4 14.1046 4 13"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<path
						d="M16 13C16 14.1046 15.1046 15 14 15C12.8954 15 12 14.1046 12 13"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<path
						d="M14 5.5515V5.25249L15.4485 3.39203V3.36545H14.0465V3H15.9535V3.31229L14.5449 5.15947V5.18605H16V5.5515H14Z"
						fill="currentColor"
						id="z1"
					/>
					<path
						d="M19 3.5515V3.25249L20.4485 1.39203V1.36545H19.0465V1H20.9535V1.31229L19.5449 3.15947V3.18605H21V3.5515H19Z"
						fill="currentColor"
						id="z2"
					/>
					<path
						d="M19 9.82724V9.37874L21.1728 6.58804V6.54817H19.0698V6H21.9302V6.46844L19.8173 9.2392V9.27907H22V9.82724H19Z"
						fill="currentColor"
						id="z3"
					/>
				</svg>

				<p class="font-semibold">You're flying solo in here</p>
				<p class="text-gray-200 mt-2">Flexile is best used with company.</p>
			</div>
			<Button size="small" intent="inverse" customClass="w-full mt-2"
				>Invite collaborator</Button
			>
		</div>
	</nav>
</template>

<style scoped>
@keyframes moveZ1 {
	0%,
	100% {
		transform: translateX(0);
	}
	50% {
		transform: translateX(2px);
	}
}

@keyframes moveZ2 {
	0%,
	100% {
		transform: translateX(0);
	}
	50% {
		transform: translateX(2px);
	}
}

@keyframes moveZ3 {
	0%,
	100% {
		transform: translateX(0);
	}
	50% {
		transform: translateX(-2px);
	}
}

#z1 {
	animation: moveZ1 5s ease-in-out infinite;
}

#z2 {
	animation: moveZ2 5s ease-in-out infinite;
}

#z3 {
	animation: moveZ3 5s ease-in-out infinite;
}
</style>
