<template>
<div class="home">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.rawgit.com/jgthms/minireset.css/master/minireset.css">
    <link rel="stylesheet" href="css/debug.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900">
  </head>

  <body>
    <div id="app" :style="gradient(active)">
      <h1 style="color: #000000">{{textoContador()}}</h1>
      <ColorBox
        id= "swatch.id"
        v-for="swatch in swatches"
        :key="swatch.id"
        @click.native="activate(swatch)"
        :active="active"
        :swatch="swatch"
        :effect="gradient"
      ></ColorBox>
    </div>
  </body>
</div>
</template>

<script>
import ColorBox from "@/components/ColorBox.vue";

export default {
  name: "home",

  components: {
    ColorBox
  },

  data() {
    return {
      contador: 0,
      color: "#ffffff",
      active: "",
      swatches: [
        { id: 0, color: "#ff691f" },
        { id: 1, color: "#fab81e" },
        { id: 2, color: "#7fdbb6" },
        { id: 3, color: "#19cf86" },
        { id: 4, color: "#91d2fa" },
        { id: 5, color: "#1b95e0" },
        { id: 6, color: "#abb8c2" },
        { id: 7, color: "#e81c4f" },
        { id: 8, color: "#f58ea8" },
        { id: 9, color: "#981ceb" },
        { id: 10, color: "#ffffff" },
        { id: 11, color: "#000000" }
      ]
    };
  },
  methods: {
    textoContador() {
      return this.contador == 1 ?
        "Cambiaste el color 1 vez"
        : "Cambiaste el color " + this.contador + " veces "
    },
    activate: function(swatch) {
      this.active = swatch
      this.contador += 1

      return this.active.color
    },

    gradient: function(swatch) {
      this.color = swatch.color
      return {
        background:
          "linear-gradient(100deg, whitesmoke -100%, " + swatch.color + ")",
        color: swatch.color
      };
    }
  },
};
</script>
<style >
:root {
  /* colors */
  --white: #ffffff;
  --orange: #ff691f;
  --yellow: #fab81e;
  --lightgreen: #7fdbb6;
  --green: #19cf86;
  --lightblue: #91d2fa;
  --blue: #1b95e0;
  --grey: #abb8c2;
  --red: #e81c4f;
  --pink: #f58ea8;
  --purple: #981ceb;
  --black: #000000;

  /* font (default) */
  font: 1rem/1.175 "BlinkMacSystemFont", -apple-system, "Roboto", sans-serif;
}

#app {
  /* grid */
  display: grid;
  /* grid:4x3 */
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
  /* spacing */
  padding: 96px;
  grid-gap: 32px;
  /* fullscreen */
  width: 100vw;
  height: 100vh;
}

img {
  /* size */
  width: 3.5rem;
  height: 3.5rem;
  /* center offset */
  vertical-align: calc(-0.12109375em);
}

.grid-item {
  /* grid */
  display: grid;
  /* grid:1x2 */
  grid-template-rows: 65% 35%;
  /* background */
  background: whitesmoke;
  /* material-ui.com/#/components/paper */
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 60px;
  /* transform */
  transition: transform 500ms;
}

.grid-item:hover {
  /* transition */
  transition: transform 500ms;
  /* transform */
  transform: scale(1.1);
}

.grid-cell--top,
.grid-cell--bottom {
  /* flex */
  display: flex;
  /* flex:center */
  justify-content: center;
  align-items: center;
}

.grid-cell--top {
  border-radius: 4px 4px 0 0;
}
.grid-cell--bottom {
  font-weight: 900;
  font-size: 1.75rem;
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
