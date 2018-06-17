<template>
    <v-container fluid grid-list-md>
        <carousel :perPage="8" :paginationEnabled="false" :navigationEnabled="false">
            <slide v-for="item in items" :key="item.name">
                <v-flex xs11>
                    <v-card id="album-card" flat>
                        <v-card-media :src="item.imgPath" height="200px">
                             <v-btn relative fab left medium color="pink" class="fab-icon">
                                <v-icon medium>favorite_border</v-icon>
                            </v-btn>
                            <v-btn relative fab left medium color="yellow" class="fab-icon">
                                <v-icon medium>play_arrow</v-icon>
                            </v-btn>
                        </v-card-media>
                        <v-card-title>
                            <div>
                                <div class="text-black">
                                    {{item.name}}</div>
                                <router-link :to="{name:'ArtistGeneral',params:{id:item.authorId}}" tag="div" class="text-grey">
                                    {{item.authorName}}
                                </router-link>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </slide>

        </carousel>
    </v-container>
</template>

<script>
    import {
        Carousel,
        Slide
    } from 'vue-carousel'

    export default {
        props: ['items'],
        components: {
            Carousel,
            Slide
        }
    }
</script>

<style scoped>
    .text-grey {
        color: gray;
    }

    .text-black {
        color: black;
    }

    .text-black:hover,
    .text-grey:hover {
        color: red;
        cursor: pointer;
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
        top: 70px;
        left: 30px;
        display: none;
    }

    #album-card:hover .fab-icon {
        display: flex;
    }
</style>