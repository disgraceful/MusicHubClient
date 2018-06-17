<template>
    <v-card class="song-card" flat>
        <v-container pa-0 fluid px-0>
            <v-layout row>
                <v-flex shrink>
                    <v-container class="icon-container" fill-height>
                        <v-btn relative fab small color="yellow" class="fab-icon">
                            <v-icon medium>play_arrow</v-icon>
                        </v-btn>
                        <div class="number-tile">{{number}}</div>
                    </v-container>
                </v-flex>
                <v-flex xs11>
                    <v-card-title>
                        <v-flex xs6>
                            <div class="text-xs-left song-tile">
                                <div class="text--black">{{song.name}}</div>
                            </div>
                        </v-flex>
                        <v-flex>
                            <div class="text-xs-left">
                                <div class="text--black">{{song.authorName}}</div>
                            </div>
                        </v-flex>
                    </v-card-title>
                </v-flex>
                <v-flex shrink>
                    <v-container class="icon-container" fill-height>
                        <v-btn relative fab small color="white" class="fab-icon">
                            <v-icon medium>add</v-icon>
                        </v-btn>
                        <v-btn relative fab small color="white" class="fab-icon">
                            <v-icon medium>favorite_border</v-icon>
                        </v-btn>
                        <div class="song-duration">
                            <div class="text--black text-xs-right">{{song.duration}}</div>
                        </div>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>


<script>
    export default {
        props: ['number', 'song']
    }
</script>

<style>
    .song-tile {
        width: 400px;
    }

.song-duration{
    width:60px;
}
    .number-tile {
        width: 14px;
        display: inline-block;
    }

    .song-card {
        border: 2px solid transparent;
    }

    .song-card:hover {
        border: 2px solid;
        border-color: yellow;
    }

    .fab-icon {
        display: none;
    }

    .song-card:hover .fab-icon {
        display: flex;
    }

    .song-card:hover .number-tile,
    .song-card:hover .song-duration {
        display: none;
    }

    .song-card:hover .icon-container {
        padding: 0px;
    }

    .btn--floating.btn--small {
        width: 30px;
        height: 30px;
    }
</style>