<template>
  <v-app>
    <mh-header></mh-header> 
    <mh-home></mh-home>
    <mh-player></mh-player> 
  </v-app>
</template>

<script>

import Player from "./components/player/Player"
import Header from "./components/header/Header"
import Home from "./components/main_content/Home"


  export default {
    
    components:{
      'mh-player':Player,
      'mh-header':Header,
      'mh-home': Home
    }
  }
</script>
