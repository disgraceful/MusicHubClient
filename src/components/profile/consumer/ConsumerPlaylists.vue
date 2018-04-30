<template>
  <v-card>
      <v-card-title>
          <div>
              <div class="headline">Playlists</div>
          </div>
      </v-card-title>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="index in 30" :key="index">
                    <v-card>
                        <v-card-media src="http://via.placeholder.com/350x150" height="150px">
                        </v-card-media>
                        <v-card-title >
                            <v-flex pa-0>
                            <div class="text-xs-left">
                                <div class="text--black" style="font-weight:bold">Playlist name {{index}}</div>
                                <div class="grey--text">30 tracks</div>
                            </div>
                            </v-flex>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
  </v-card>
</template>

<script>
export default {
  
}
</script>

