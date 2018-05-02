<template>
    <v-card flat>
        <v-card>
            <v-layout row>
                <v-card-title primary-title>
                    <h3>Popular tracks</h3>
                </v-card-title>
                <v-container>
                    <v-flex class="text-xs-right">
                        <router-link :to="{name:'ArtistTracks',params:{id:$route.params.id}}" tag="a">All tracks</router-link>
                    </v-flex>
                </v-container>
            </v-layout>
            <v-container fluid grid-list-lg>
                <v-layout row wrap>
                    <v-flex xs12 v-for="index in 5" :key="index">
                        <mh-song-unlisted></mh-song-unlisted>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>

        <v-card>
            <v-layout row>
                <v-card-title primary-title>
                    <h3>Popular albums</h3>
                </v-card-title>
                <v-container>
                    <v-flex class="text-xs-right">
                        <router-link :to="{name:'ArtistAlbums',params:{id:$route.params.id}}" tag="a">All albums</router-link>
                    </v-flex>
                </v-container>
            </v-layout>
            <v-container fluid grid-list-xl>
                <v-layout row wrap>
                    <v-flex xs2 v-for="index in 10" :key="index">
                        <v-card>
                            <v-card-media src="http://via.placeholder.com/350x150" height="150px">
                            </v-card-media>
                            <v-card-title>
                                <v-flex pa-0>
                                    <div class="text-xs-left">
                                        <div class="subheading" style="font-weight:bold">Album Name {{index}}</div>
                                        <div class="text--black">Author Name{{index}}</div>
                                        <div class="grey--text">year and genre</div>
                                    </div>
                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>

        <v-card>
            <v-card-title primary-title>
                <h3>Popular playlists</h3>
            </v-card-title>
            <v-container fluid grid-list-xl>
                <v-layout row wrap>
                    <v-flex xs2 v-for="index in 3" :key="index">
                        <v-card>
                            <v-card-media src="http://via.placeholder.com/350x150" height="150px">
                            </v-card-media>
                            <v-card-title>
                                <div>
                                    <div class="black--text">Playlist name</div>
                                    <div class="grey--text">50 songs</div>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>

        <v-card>
            <v-layout row>
                <v-card-title primary-title>
                    <h3>Similar artists</h3>
                </v-card-title>
                <v-container>
                    <v-flex class="text-xs-right">
                        <router-link :to="{name:'ArtistSimilar',params:{id:$route.params.id}}" tag="a">All artists</router-link>
                    </v-flex>
                </v-container>
            </v-layout>
            <v-container fluid grid-list-xl>
                <v-layout row wrap>
                    <v-flex xs2 v-for="index in 10" :key="index">
                        <v-card :to="{name:'Artist'}">
                            <div class="text-xs-center">
                                <v-avatar size="200px">
                                    <img src="http://via.placeholder.com/200x200">
                                </v-avatar>
                            </div>

                            <v-card-title>
                                <v-flex pa-0>
                                    <div class="text-xs-left">
                                        <div class="subheading">Artist Name {{index}}</div>
                                        <div class="grey--text">genre</div>
                                    </div>
                                </v-flex>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-card>
</template>
<script>
    import Song from '../shared/SongUnlisted'
    export default {
        components: {
            'mh-song-unlisted': Song
        }
    }
</script>