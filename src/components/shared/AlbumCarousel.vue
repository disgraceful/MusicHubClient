<template>
    <v-container fluid grid-list-md>
        <v-snackbar :timeout="timeout" :top="y === 'top'" :bottom="y === 'bottom'" :right="x === 'right'" :left="x === 'left'" v-model="snackbar">
            {{ text }}
            <v-btn flat color="pink" @click.native="snackbar = false">
                <v-icon medium>close</v-icon>
            </v-btn>
        </v-snackbar>
        <carousel :perPage="7" :paginationEnabled="false" :navigationEnabled="false">
            <slide v-for="item in items" :key="item.name">
                <v-flex xs11>
                    <v-card id="album-card" flat>
                        <v-card-media :src="item.imgPath" height="250px">
                            <v-btn relative fab left medium color="pink" class="fab-icon" @click="toggle">
                                <v-icon medium>{{ favorited ? 'favorite' : 'favorite_border' }}</v-icon>
                            </v-btn>
                            <v-btn relative fab left medium color="yellow" class="fab-icon">
                                <v-icon medium>play_arrow</v-icon>
                            </v-btn>
                        </v-card-media>
                        <v-card-title>
                            <div>
                                <router-link :to="{name:'Album',params:{id:item.id}}" tag="div" class="text-black">
                                    {{item.name}}
                                </router-link>
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
        data() {
            return {
                favorited: false,
                snackbar: false,
                y: 'top',
                x: null,
                mode: '',
                timeout: 4000,
            };
        },
        computed: {
            text() {
                return this.favorited ?  'Album was added to Favorites':'Album was deleted from Favorites'
            }
        },
        methods: {
            toggle() {
                this.snackbar = true;
                this.favorited = !this.favorited;
            }
        },
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
        top: 95px;
        left: 45px;
        display: none;
    }

    #album-card:hover .fab-icon {
        display: flex;
    }
</style>