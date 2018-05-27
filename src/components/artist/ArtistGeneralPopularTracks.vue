<template>
    <v-card>
        <v-layout row>
            <v-card-title primary-title>
                <div class="title" style="width:200px">
                    Popular tracks
                </div>
            </v-card-title>
            <v-container>
                <v-flex class="text-xs-right">
                    <router-link :to="{name:'ArtistTracks',params:{id:$route.params.id}}" tag="a">All tracks</router-link>
                </v-flex>
            </v-container>
        </v-layout>
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 v-for="song in songs" :key="song.name">
                    <mh-song-unlisted :song="song"></mh-song-unlisted>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>


<script>
    import SongUnlisted from '../shared/SongUnlisted'
    export default {
        data() {
            return {
                songs: ''
            };
        },
        components: {
            'mh-song-unlisted': SongUnlisted
        },
        mounted() {
            var apiPath = 'http://localhost:8888/author/' + this.$route.params.id + '/popularsongs';
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

<style scoped>
.container.grid-list-lg .layout .flex{
    padding:0px;
}
</style>