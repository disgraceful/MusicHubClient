<template>
    <v-card id="artist-card" flat>
        <div class="text-xs-center">
            <v-avatar size="220px">
                <v-btn absolute fab medium color="pink" class="fab-icon">
                    <v-icon medium>favorite_border</v-icon>
                </v-btn>
                <v-btn absolute fab medium color="yellow" class="fab-icon-2">
                    <v-icon medium>play_arrow</v-icon>
                </v-btn>
                <img :src="artist.imgPath">
            </v-avatar>
        </div>
        <v-card-title>
            <v-flex pa-0>
                <div class="text-xs-left">
                    <router-link :to="{name:'ArtistGeneral',params:{id:artist.id}}" tag="div" class="subheading artist-text-black">
                        {{artist.name}}
                    </router-link>
                    <router-link :to="{name:'Genre',params:{id:artist.genreId}}" tag="div" class="artist-text-grey">
                        {{artist.genreName}}
                    </router-link>
                </div>
            </v-flex>
        </v-card-title>
    </v-card>
</template>

<script>
    export default {
        props: ['artist']
    }
</script>

<style scoped>
    .artist-text-black {
        color: black !important;
        cursor: pointer;
    }

    .artist-text-grey {
        color: darkgray !important;
        cursor: pointer;
    }

    .artist-text-grey:hover,
    .artist-text-black:hover {
        color: red !important;
    }

    #artist-card {
        padding: 5px;
        border: 2px solid transparent;
    }

    #artist-card:hover {
        border: 2px solid;
        border-color: yellow;
    }

    .fab-icon {
        top: 70px;
        left: 110px;
        display: none;
    }

    .fab-icon-2 {
        top: 70px;
        left: 30px;
        display: none;
    }


    #artist-card:hover .fab-icon,
    #artist-card:hover .fab-icon-2  {
        display: flex;
    }
</style>