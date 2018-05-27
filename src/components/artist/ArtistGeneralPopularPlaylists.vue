<template>
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
</template>

<script>
    import PlaylistPreview from '../shared/PlaylistPreview'
    export default {
        data() {
            return {
                playlists: ''
            };
        },
        components: {
            'mh-playlist-preview': PlaylistPreview
        },
        mounted() {
            var apiPath = 'http://localhost:8888/author/' + this.$route.params.id + '/popularsongs';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.playlists = response.body;
                    console.log(this.songs);
                }, error => {
                    console.log(error);
                });
        }
    }
</script>