<template>
    <v-card flat>
        <v-card-title>
            <div>
                <div class="headline">Tracks</div>
            </div>
        </v-card-title>
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
                                                <div class="grey--text">Album</div>
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
    import SongMini from '../shared/SongMini.vue'
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
            var apiPath = 'http://localhost:8888/author/' + this.$route.params.id + '/songs';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.songs = response.body;
                    console.log(this.songs);
                }, error => {
                    console.log(error);
                });
        }
    }
</script>