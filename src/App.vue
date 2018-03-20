<template>
  <v-app>
    <mh-player></mh-player>
  </v-app>
</template>

<script>
import Player from "./components/player/Player"

  export default {
    components:{
      'mh-player':Player
    }
  }
</script>
