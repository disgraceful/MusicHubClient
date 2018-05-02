<template>
    <v-card>
        <v-container fluid>
            <v-layout>
                <img src="http://via.placeholder.com/200x200">
                <v-container pa-0>
                    <v-flex style="padding:20px;padding-bottom:50px;padding-top:0px">
                        <div>
                            <div class="headline">Album Name</div>
                            <div class="text--black">Artist: Artist Name</div>
                            <div class="grey--text">genre + year</div>
                        </div>
                    </v-flex>
                    <v-layout row wrap style="padding-top:20px">

                        <v-btn round color="primary">
                            <v-icon left>play_arrow</v-icon>Play</v-btn>

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
            <v-flex xs12 v-for="item in 10" :key="item">
                <mh-song-mini :number="item"></mh-song-mini>
            </v-flex>
        </v-layout>

    </v-card>
</template>

<script>
    import Song from '../shared/SongMini'
    export default {
        components: {
            'mh-song-mini': Song
        }
    }
</script>