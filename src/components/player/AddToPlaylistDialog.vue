<template>
    <v-card>
        <v-snackbar :timeout="timeout" :top="y === 'top'" :bottom="y === 'bottom'" :right="x === 'right'" :left="x === 'left'" v-model="snackbar">
            {{ text }}
            <v-btn flat color="pink" @click.native="snackbar = false">
                <v-icon medium>close</v-icon>
            </v-btn>
        </v-snackbar>
        <v-card-title class="subheading">Add to playlist</v-card-title>
        <v-list>
            <v-list-tile v-for="playlist in playlists" :key="playlist.name" class="list-p" @click="add(playlist.id,song.id)">
                <v-list-tile-action>
                    <v-icon>add</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-html="playlist.name"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                snackbar: false,
                y: 'top',
                x: null,
                mode: '',
                timeout: 4000,
                playlists: [],
                text:'Song was added to Playlist'
            }
        },
        props: ['dialog', 'song'],
        methods: {
            add(playlistId, songId) {
                var apiPath = 'http://localhost:8888/playlist/' + playlistId + '/songs'
                this.$http.post(apiPath, {
                        id: songId
                    }, {
                        headers: {
                            'Authorization': this.$cookie.get('user-token')
                        }
                    })
                    .then(response => {
                        this.$emit('close');
                        
                    }, error => {
                        console.log(error);
                    });
                    this.snackbar = true;
            }
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

<style scoped>
    .list-p:hover {
        cursor: pointer !important;
        background-color: grey !important;
    }
</style>