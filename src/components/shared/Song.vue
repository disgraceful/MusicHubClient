<template>
    <v-card flat id="song-card">
        <v-layout row>
            <v-flex shrink>
                <v-container fill-height>
                    <v-btn absolute fab small right color="yellow" class="fab-icon">
                        <v-icon medium>play_arrow</v-icon>
                    </v-btn>
                    <div class="number">
                        {{number}}
                    </div>
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
                    <img :src="song.imgPath" height="55px" width="55px">
                </v-container>
            </v-flex>
            <v-card-title class="flex grow">
                <div class="text-xs-left">
                    <div class="text--black">{{song.name}}</div>
                    <router-link :to="{name:'ArtistGeneral',params:{id:song.authorId}}" tag="div" class="song-text-grey">
                        {{song.authorName}}
                    </router-link>
                </div>
            </v-card-title>
            <v-flex shrink>
                <v-container fill-height>
                    <div>
                        <div class="text--black text-xs-right song-duration">{{song.duration}}</div>
                    </div>
                </v-container>
            </v-flex>
        </v-layout>
    </v-card>

</template>

<script>
    export default {
        props: ['number', 'song']
    }
</script>

<style scoped>
    .song-text-grey {
        color: grey !important;
    }

    .song-text-grey:hover {
        color: red !important;
        cursor: pointer;
    }

    #song-card {
        border: 2px solid transparent;
    }

    #song-card:hover {
        border: 2px solid;
        border-color: yellow;
    }

    .song-duration {
        width: 60px;
    }

    #song-card:hover .song-duration {
        display: none;
    }

    .number {
        width: 10px;
        display: inline-block;
    }

    #song-card:hover .fab-icon,
    #song-card:hover .fab-icon-2,
    #song-card:hover .fab-icon-3 {
        display: flex;
    }

    .btn--floating.btn--small {
        width: 30px;
        height: 30px;
    }

    .fab-icon {
        top: 20px;
        left: 60px;
        display: none;
    }

    .fab-icon-2 {
        right: 50px;
        display: none
    }

    .fab-icon-3 {
        right: 10px;
        display: none
    }
</style>