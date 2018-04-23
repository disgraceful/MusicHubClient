<template>
    <v-container fluid grid-list-md>
        <carousel :perPage="10" :paginationEnabled="false" :navigationEnabled="false">
            <slide v-for="index in 15" :key="index">
                <v-flex xs11>
                    <v-card>
                        <v-card-media src="http://via.placeholder.com/350x150" height="150px" width=150px>
                        </v-card-media>
                        <v-card-title>
                            <div>
                                <div class="black--text">{{items[0].authorName+index}}</div>
                                <span class="grey--text">{{items[0].authorName+ index}}</span>
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
    } from 'vue-carousel';
    export default {
        data() {
            return {
                items: [{
                    authorName: "authorName",
                    albumName: "albumName"
                }]
            }
        },
        components: {
            Carousel,
            Slide,
        }
    }
</script>