<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import GameInform from "./components/GameInform.vue";
// import { Motion } from '@vueuse/motion'
</script>

<template>
<!--  <div>-->
<!--    <a href="https://vite.dev" target="_blank">-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
<!--    </a>-->
<!--  </div>-->
<!--  <HelloWorld msg="Vite + Vue" />-->
  <div id="inform">
    <GameInform></GameInform>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#inform{
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 5vh;
  height: 80vh;
  background-color: black;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  padding: 30px;
  animation: ani 1s;
}
@keyframes ani {
  0% {
    transform: translate3d(-100px, -100px,-20px);
    opacity: 0;
  }
  100% {
    transform: translate3d(0px, 0px,0px);
    top: 100%;
    opacity: 1;
  }
}
</style>
