<template>
<div class="grid-item">
			<div class="grid-cell--top" :style="effect(swatch)" >
				<span
					v-html = swatch.emoji
					:class="{ bounce: swatch == active }"
				></span>
			</div>
			<div class="grid-cell--bottom" :style="corrected_color()">
				{{ swatch.color.toUpperCase() }}
			</div>
		</div>

</template>


<script>
export default {
name: 'ColorBox',

props: ["active", "swatch", "effect"],
methods: {
        corrected_color: function () {
            return {
                color: this.swatch.color == '#ffffff' ? '#000000' : this.swatch.color
            }
        }
}
}
</script>
