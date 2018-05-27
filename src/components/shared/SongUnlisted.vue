<template>
    <v-card id="song-card" flat>
        <v-layout row>
            <v-flex shrink>
                <v-container fill-height>
                    <v-btn absolute fab small right color="yellow" class="fab-icon">
                        <v-icon medium>play_arrow</v-icon>
                    </v-btn>
                    <img :src="song.imgPath" height="55px" width="55px">
                </v-container>
            </v-flex>
            <v-flex xs11>
                <v-container pa-0 fill-height>
                    <v-card-title>
                        <div class="text-xs-left">
                            <div class="text--black">{{song.name}}
                            </div>
                            <router-link :to="{name:'Album',params:{id:song.albumId}}" tag="div" class="song-text-grey">
                                {{song.albumName}}
                            </router-link>
                        </div>
                    </v-card-title>
                </v-container>
            </v-flex>
            <v-flex shrink>
                <v-container fill-height>
                    <v-btn absolute fab small color="white" class="fab-icon-2">
                        <v-icon medium>add</v-icon>
                    </v-btn>
                    <v-btn absolute fab small color="white" class="fab-icon-3">
                        <v-icon medium>favorite_border</v-icon>
                    </v-btn>
                    <div class="text--black text-xs-right song-duration"> {{ song.duration }}</div>
                </v-container>
            </v-flex>
        </v-layout>
    </v-card>
</template>
<script>
    export default {
        props: ['song']
    }
</script>
<style scoped>
    .song-text-grey {
        color: grey !important;
        cursor: pointer;
    }

    .song-text-grey:hover {
        color: red !important;
    }

    #song-card {
        border: 2px solid transparent;
    }

    #song-card:hover {
        border: 2px solid;
        border-color: yellow;
    }

    .fab-icon {
        top: 20px;
        left: 21px;
        display: none;
    }

    .fab-icon-2 {
        display: none
    }

    .fab-icon-3 {
        right: 55px;
        display: none
    }

    .song-duration {
        width: 60px;
    }

    #song-card:hover .song-duration {
        display: none;
    }

    #song-card:hover .fab-icon,
    #song-card:hover .fab-icon-2,
    #song-card:hover .fab-icon-3 {
        display: flex;
    }

    .container.grid-list-lg .layout .flex {
        padding: 0px;
    }
     .btn--floating.btn--small {
        width: 30px;
        height: 30px;
    }
</style>