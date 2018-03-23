<template>
  <v-app>
    <mh-header></mh-header>
    <mh-player></mh-player>
  </v-app>
</template>

<script>
import Player from "./components/player/Player"
import Header from "./components/header/Header"

  export default {
    components:{
      'mh-player':Player,
      'mh-header':Header
    }
  }
</script>
