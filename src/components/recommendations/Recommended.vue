<template>
    <v-card flat>
        <v-container pa-0 fluid>
            <v-card-title primary-title>
                <h1>Recommendations</h1>
            </v-card-title>
            <v-card flat>
                <v-card-title primary-title>
                    <h3>Recommended based on <router-link :to="{name:'Genre',params:{id:genreRec1Id}}">{{genreRec1Name}}</router-link> </h3>
                </v-card-title>
                <v-container fluid grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12 v-for="index in 6" :key="index">
                            <mh-song-unlisted :song="songsGenre[index-1]"></mh-song-unlisted>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
            <v-card flat>
                <v-card-title primary-title>
                    <h3>Recommended Songs from <router-link :to="{name:'ArtistGeneral',params:{id:artistRec1Id}}">{{artistRec1Name}}</router-link></h3>
                </v-card-title>
                <v-container fluid grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12 v-for="song in songsArtist" :key="song.name">
                            <mh-song-unlisted :song="song"></mh-song-unlisted>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
            <v-card flat>
                <v-card-title primary-title>
                    <h3>Similar to what you listen</h3>
                </v-card-title>
                <v-container fluid grid-list-lg>
                    <v-layout row justify-space-around>
                        <v-flex xs2 v-for="index in 4" :key="index">
                          <mh-artist-preview :artist="artistsArtist[index-1]"></mh-artist-preview>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-container>
        <div style="height:75px"></div>
    </v-card>
</template>

<script>
    import Song from '../shared/SongUnlisted'
    import ArtistPreview from '../shared/ArtistPreview.vue'
    export default {
        data() {
            return {
                songsGenre: '',
                genreRec1Name: '',
                genreRec1Id: '',
                songsArtist:'',
                artistRec1Name:'',
                artistRec1Id:'',
                artistsArtist:'',
              
            };
        },
        components: {
            'mh-song-unlisted': Song,
            'mh-artist-preview':ArtistPreview
        },
        mounted() {
            var apiPath = 'http://localhost:8888/recommended/songs/genre';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.songsGenre = response.body;
                    this.genreRec1Name = this.songsGenre[0].genreName;
                    this.genreRec1Id = this.songsGenre[0].genreId;
                }, error => {
                    console.log(error);
                });
            apiPath = 'http://localhost:8888/recommended/songs/author';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.songsArtist = response.body;
                    this.artistRec1Name = this.songsArtist[0].authorName;
                    this.artistRec1Id = this.songsArtist[0].authorId;
                }, error => {
                    console.log(error);
                });
                apiPath = 'http://localhost:8888/recommended/authors/author';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.artistsArtist = response.body;
                   
                }, error => {
                    console.log(error);
                });
        }
    }
</script>


<style scoped>
    .container.grid-list-lg .layout .flex {
        padding: 0px;
    }

    .black-text{
        color:black;
    }

    .black-text:hover{
        color:red;
        cursor: pointer;
    }
</style>