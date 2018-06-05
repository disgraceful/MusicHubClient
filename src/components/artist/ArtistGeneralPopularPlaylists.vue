<template>
    <v-card>
        <v-card-title primary-title>
                <div class="title" style="width:200px">
                    Popular playlists
                </div>
            </v-card-title>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="playlist in playlists" :key="playlist.name">
                    <mh-playlist-preview :playlist="playlist"></mh-playlist-preview>
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
            var apiPath = 'http://localhost:8888/author/' + this.$route.params.id + '/playlists';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.playlists = response.body;
                    console.log(this.playlists);
                }, error => {
                    console.log(error);
                });
        }
    }
</script>