<template>
    <v-card flat>
        <v-card-title>
            <div>
                <div class="headline">Playlists</div>
            </div>
        </v-card-title>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="playlist in playlists" :key="playlist.name">
                    <mh-playlist :playlist="playlist"></mh-playlist>
                </v-flex>
                <v-flex xs2>
                    <v-card style="padding:12px" flat>
                        <v-card-media style="background-color:lightgrey" height="220px">
                            <v-dialog v-model="playlistDialog" max-width="400px">
                                <v-btn relative fab medium color="lightgrey" style="top:80px;left:90px" slot="activator">
                                    <v-icon medium>add</v-icon>
                                </v-btn>
                                <v-card>
                                    <v-container fluid>
                                        <v-card-title class="subheading">Create playlist</v-card-title>
                                        <v-form v-model="valid" ref="form" lazy-validation>
                                            <v-text-field label="Name" v-model="name" :rules="nameRules"></v-text-field>
                                            <v-btn @click="submit" :disabled="!valid">
                                                submit
                                            </v-btn>
                                        </v-form>
                                    </v-container>
                                </v-card>
                            </v-dialog>
                        </v-card-media>
                        <v-card-title>
                            <div>
                                <div class="black-text">Create new</div>
                            </div>
                        </v-card-title>
                    </v-card>
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
                playlistDialog: false,
                valid: false,
                playlists: '',
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                ],
            };
        },
        components: {
            'mh-playlist': Playlist
        },
        methods: {
            submit() {
                var newPlaylist = {
                    name: this.name
                }
                var token = this.$cookie.get('user-token');
                this.$http.post('http://localhost:8888/playlist',
                       {name:this.name}, {
                            headers: {
                                'Authorization': token
                            }
                        })
                    .then(response => {
                        console.log(response.body);
                        this.$router.go(this.$router.currentRoute)
                    }, error => {
                        console.log(error);
                    });
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
    .fab {
        top: 120px !important;
    }
</style>