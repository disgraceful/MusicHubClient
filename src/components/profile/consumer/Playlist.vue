<template>
    <div>
        <v-card flat>
            <v-container fluid>
                <v-layout>
                    <img :src="playlist.imgPath" height="220px">
                    <v-container pa-0>
                        <v-flex style="padding:30px;padding-bottom:40px">
                            <div>
                                <div class="headline">{{playlist.name}}</div>
                                <router-link tag="div" class="black-text" :to="{name:'ConsumerTracks',params:{id:user.username}}">
                                    {{user.username}}
                                </router-link>
                            </div>
                        </v-flex>
                        <v-layout row wrap style="padding-top:20px;padding-left:20px">
                            <v-btn round color="primary" @click="playAll">
                                <v-icon left>play_arrow</v-icon>Play All</v-btn>
                            <v-btn color="white" round @click="favorited=!favorited">
                                <v-icon color="red" left> {{ favorited ? 'favorite' : 'favorite_border' }}</v-icon>
                                {{playlist.rating}}
                            </v-btn>
                        </v-layout>
                    </v-container>
                </v-layout>
            </v-container>
            <v-layout row>
                <v-flex xs12>
                    <v-card flat>
                        <v-container pa-0 fluid px-0>
                            <v-layout row>
                                <v-flex shrink>
                                    <v-container fill-height>
                                        <div class="grey--text" style="width:10px; display:inline-block">
                                            #
                                        </div>
                                    </v-container>
                                </v-flex>
                                <v-flex xs11>
                                    <v-card-title>
                                        <v-flex xs6>
                                            <div class="text-xs-left">
                                                <v-layout row>
                                                    <div class="grey--text">Track Name</div>
                                                    <v-icon>arrow_drop_down</v-icon>
                                                </v-layout>
                                            </div>
                                        </v-flex>
                                        <v-flex xs6>
                                            <div class="text-xs-left">
                                                <v-layout row>
                                                    <div class="grey--text">Artist</div>
                                                    <v-icon>arrow_drop_down</v-icon>
                                                </v-layout>
                                            </div>
                                        </v-flex>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 v-for="(song,index) in songs" :key="song.name">
                    <mh-song-mini :number="index+1" :song="song"></mh-song-mini>
                </v-flex>
            </v-layout>
            <div style="height:77px;"></div>
        </v-card>
    </div>
</template>


<script>
    import SongMini from '../../shared/SongMiniArtist'
    export default {
        data() {
            return {
                playlist: '',
                songs: '',
                favorited: '',
            };
        },
        components: {
            'mh-song-mini': SongMini
        },
        methods: {
            like() {

            },
            add() {

            },
            playAll() {

            }
        },
        computed: {
  user() {
                var user = JSON.parse(window.localStorage.getItem('user'))
                if (user) {
                    return user;
                } else {
                    return "";
                }
            }
        },
        mounted() {
            var apiPath = 'http://localhost:8888/playlist/' + this.$route.params.id;
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.playlist = response.body;
                    var apiPath = 'http://localhost:8888/playlist/' + this.$route.params.id + '/songs';
                    this.$http.get(apiPath, {
                            headers: {
                                'Authorization': this.$cookie.get('user-token')
                            }
                        })
                        .then(response => {
                            this.songs = response.body;
                        }, error => {
                            console.log(error);
                        });
                }, error => {
                    console.log(error);
                });
        }
    }
</script>