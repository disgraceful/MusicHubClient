<template>
   <v-card>
        <v-card-title>
            <div class="headline">Last played tracks</div>
        </v-card-title>
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 v-for="index in 15" :key="index">
                    <mh-song-unlisted></mh-song-unlisted>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
import SongUnlisted from '../../shared/SongUnlisted'
export default {
  components:{
      'mh-song-unlisted':SongUnlisted
  }
}
</script>

