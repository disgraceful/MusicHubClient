<template>
    <v-card>
        <v-card-title>
            <div class="headline">Last played tracks</div>
        </v-card-title>
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
    import SongUnlisted from '../../shared/SongUnlisted'
    export default {
        data(){
            return{
                songs:'',
            };
        },
        components: {
            'mh-song-unlisted': SongUnlisted
        },
        mounted() {
            var apiPath = 'http://localhost:8888/consumer/playlists/songs'
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.songs = response.body;
                    console.log(getArtist);
                }, error => {
                    console.log(error);
                });
        }
    }
</script>