<template>
  <v-app>
    <mh-header></mh-header>
    <router-view></router-view>
    <mh-player v-if="playingQueue"></mh-player>
  </v-app>
</template>

<script>
  import Player from "./components/player/Player"
  import Header from "./components/header/Header"
  export default {
    components: {
      'mh-player': Player,
      'mh-header': Header,
    },
    computed: {
      playingQueue() {
        return JSON.parse(window.localStorage.getItem('queue'))
      }
    }
  }
</script>

<style>
  .flex.shrink {
    flex-grow: 0;
    flex-shrink: 1
  }

  .flex.grow {
    flex-shrink: 0;
    flex-grow: 1
  }
</style>