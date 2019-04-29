<template>
  <div class="grid-item">
    <div class="grid-cell--top" :style="effect(swatch)">
      <span></span>
    </div>
    <div class="grid-cell--bottom" :style="corrected_color()">{{ swatch.color.toUpperCase() }}</div>
  </div>
</template>


<script>
export default {
  name: "ColorBox",

  props: ["active", "swatch", "effect"],
  methods: {
    corrected_color: function() {
      return {
        color: this.swatch.color == "#ffffff" ? "#000000" : this.swatch.color
      };
    }
  }
};
</script>

<style>
img {
  /* size */
  width: 3.5rem;
  height: 3.5rem;
  /* center offset */
  vertical-align: calc(-0.12109375em);
}

.bounce {
  animation: bounce 1s;
}

@keyframes bounce {
  0% {
    transform: rotate(0deg) scale(1);
  }
  33% {
    transform: rotate(12deg) scale(1.2);
  }
  67% {
    transform: rotate(-12deg) scale(0.8);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}
</style>

