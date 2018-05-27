<template>
    <v-card id="album-card" flat>
        <v-container>
            <v-card-media :src="album.imgPath" height="250px">
                <v-btn relative fab left medium color="pink" class="fab-icon">
                    <v-icon medium>favorite_border</v-icon>
                </v-btn>
                <v-btn relative fab left medium color="yellow" class="fab-icon">
                    <v-icon medium>play_arrow</v-icon>
                </v-btn>
            </v-card-media>
        </v-container>
        <v-card-title>
            <v-flex pa-0>
                <div class="text-xs-left">
                    <router-link :to="{name:'ArtistGeneral',params:{id:album.authorId}}" tag="div" class="subheading album-text" style="font-weight:bold">
                        {{album.name}}
                    </router-link>
                    <router-link :to="{name:'Album',params:{id:album.id}}" tag="div" class="album-text">
                        {{album.authorName}}
                    </router-link>
                    <div class="grey--text">{{album.recordDate}}</div>
                </div>
            </v-flex>
        </v-card-title>
    </v-card>
</template>

<script>
    export default {
        props: ['album']
    }
</script>

<style scoped>
    .album-text {
        color: black !important;
        cursor: pointer;
    }

    .album-text:hover {
        color: red !important;
    }

    .container {
        padding: 5px;
    }

    #album-card {
        padding: 5px;
        border: 2px solid transparent;
    }

    #album-card:hover {
        border: 2px solid;
        border-color: yellow;
    }

    .fab-icon {
        top: 90px;
        left:60px;
        display: none;
    }

    #album-card:hover .fab-icon {
        display: flex;
    }


</style>