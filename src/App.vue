<template>
<div id="app">
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <navBar/>
  </div>
</template>

<script>
import navBar from "./components/navBar.vue";

export default {
  components: {
    navBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image:url("./assets/images/pexels-photo-2456291.webp") ;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
}

body {
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
