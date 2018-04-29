<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-title primary-title>
                    <h1>Recommendations</h1>
                </v-card-title>
                <v-card>
                    <v-card-title primary-title>
                        <h3>Recommended playlists</h3>
                    </v-card-title>
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs2>
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
            </v-card>
            <v-card>
                <v-card-title primary-title>
                    <h3>Recommended based on Genre</h3>
                </v-card-title>
                <v-container fluid grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12 v-for="index in 5" :key="index">
                            <mh-song :number="index"></mh-song>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>

            <v-card>
                <v-card-title primary-title>
                    <h3>Recommended based on Artist</h3>
                </v-card-title>
                <v-container fluid grid-list-lg>
                    <v-layout row justify-space-around>
                        <v-flex xs2 v-for="index in 3" :key="index">
                            <v-card>
                                <v-card-media src="http://via.placeholder.com/350x150" height="150px">
                                </v-card-media>
                                <v-card-title>
                                    <div>
                                        <div class="black--text">Author Name {{index}}</div>
                                    </div>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>

            <v-card>
                <v-card-title primary-title>
                    <h3>Recommended Songs of Artist</h3>
                </v-card-title>
                <v-container fluid grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12 v-for="index in 5" :key="index">
                            <mh-song :number="index"></mh-song>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import Song from '../shared/Song'
    export default {
        components: {
            'mh-song': Song
        }
    }
</script>