<template>
    <div>
        <v-card flat>
            <v-container fluid>
                <v-layout>
                    <img :src="album.imgPath" height="220px">
                    <v-container pa-0>
                        <v-flex style="padding:30px;paddint-top:20px;padding-bottom:20px">
                            <div>
                                <div class="headline">{{album.name}}</div>
                                <router-link tag="div" class="text-black" :to="{name:'ArtistGeneral',params:{id:album.authorId}}">
                                    {{album.authorName}}
                                </router-link>

                                <div class="grey--text">
                                    <router-link tag="div" class="text-black" :to="{name:'Genre',params:{id:album.authorId}}">
                                        {{album.genreName}}</router-link>{{album.recordDate}}</div>
                            </div>
                        </v-flex>
                        <v-layout row wrap style="padding-top:20px;padding-left:20px">
                            <v-btn round color="primary">
                                <v-icon left>play_arrow</v-icon>Play All</v-btn>

                            <v-btn color="white" fab small>
                                <v-icon>favorite_border</v-icon>
                            </v-btn>
                            <v-btn color="white" fab small>
                                <v-icon>add</v-icon>
                            </v-btn>
                        </v-layout>
                    </v-container>
                </v-layout>
            </v-container>
            <v-layout row wrap>
                <v-flex xs12 v-for="(song,index) in songs" :key="song.name">
                    <mh-album-song :number="index+1" :song="song"></mh-album-song>
                </v-flex>
            </v-layout>
            <div style="height:77px;"></div>
        </v-card>
        
    </div>
</template>

<script>
    import Song from '../shared/AlbumSong'
    export default {
        data() {
            return {
                album: '',
                songs: ''
            };
        },
        components: {
            'mh-album-song': Song
        },
        mounted() {
            var apiPath = 'http://localhost:8888/album/' + this.$route.params.id;
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.album = response.body;
                    var apiPath = 'http://localhost:8888/album/' + this.$route.params.id + '/songs';
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
