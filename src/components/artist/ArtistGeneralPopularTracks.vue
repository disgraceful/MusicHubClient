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
        props: ['songs'],
        components: {
            'mh-song-unlisted': SongUnlisted
        }
    }
</script>

<style scoped>

</style>