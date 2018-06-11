<template>
    <v-card>
        <v-layout row>
            <v-card-title>
                <div>
                    <div class="headline">Tracks</div>
                </div>
            </v-card-title>
        </v-layout>
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
                                                <div class="grey--text">Album Name</div>
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
    </v-card>
</template>

<script>
    import SongMini from '../../shared/SongMini'
    export default {
        data() {
            return {
                songs: '',
            };
        },
        components: {
            'mh-song-mini': SongMini
        },
        mounted() {
            this.$http.get('http://localhost:8888/account/publisher', {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.$http.get('http://localhost:8888/publisher/' + response
                            .body.id + '/author', {
                                headers: {
                                    'Authorization': this.$cookie.get('user-token')
                                }
                            })
                        .then(response => {
                            this.$http.get('http://localhost:8888/author/' + response
                                    .body.id + '/songs', {
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
                }, error => {
                    console.log(error);
                });
        }
    }
</script>