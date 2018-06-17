<template>
    <v-card flat>
        <v-card-title>
            <div class="headline">Playing now</div>
        </v-card-title>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs12 v-for="song in queue" :key="song.name">
                    <mh-song-unlisted :song="song"></mh-song-unlisted>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    import SongUnlisted from '../../shared/SongUnlisted'
    export default {
        computed: {
            queue() {
                var queue = JSON.parse(window.localStorage.getItem('queue'))
                if (queue) {
                    return queue;
                } else {
                    return "";
                }
            },
        },
        components: {
            'mh-song-unlisted': SongUnlisted
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .container.grid-list-lg .layout .flex {
        padding: 0px;
    }
</style>