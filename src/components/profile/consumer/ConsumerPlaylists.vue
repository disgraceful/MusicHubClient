<template>
    <v-card flat>
        <v-card-title>
            <div>
                <div class="headline">Playlists</div>
            </div>
        </v-card-title>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="index in 3" :key="index">
                    <mh-playlist :playlist="playlists[index-1]"></mh-playlist>
                </v-flex>
            </v-layout>
        </v-container>
        <div style="height:315px;"></div>
    </v-card>
</template>

<script>
    import Playlist from '../../shared/PlaylistPreview'
    export default {
        data() {
            return {
                playlists: '',
            };
        },
        components: {
            'mh-playlist': Playlist
        },
        mounted() {
            var apiPath = 'http://localhost:8888/consumer/playlists'
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.playlists = response.body;
                }, error => {
                    console.log(error);
                });
        }
    }
</script>