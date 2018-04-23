<template>
    <div>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <h1>Home</h1>
                    </v-card-title>
                    <v-card-actions>
                        <v-tabs right slider-color="red">
                            <v-tab>All</v-tab>
                            <v-tab>New</v-tab>
                            <v-tab>Top</v-tab>
                            <v-tab>Trending</v-tab>
                        </v-tabs>
                    </v-card-actions>

                    <v-card>
                        <v-card-title primary-title>
                            <h3>New Releases</h3>
                        </v-card-title>
                        <mh-carousel></mh-carousel>
                    </v-card>

                    <v-card>
                        <v-card-title primary-title>
                            <h3>Top Albums</h3>
                        </v-card-title>
                        <mh-carousel></mh-carousel>
                    </v-card>

                     <v-card>
                        <v-card-title primary-title>
                            <h3>Trending</h3>
                        </v-card-title>
                        <mh-carousel></mh-carousel>
                    </v-card>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import {
        Carousel,
        Slide
    } from 'vue-carousel';
    import MHCarousel from "./Carousel.vue";

    export default {
        components: {
            Carousel,
            Slide,
            'mh-carousel': MHCarousel
        }
    }
</script>

<style scoped>
</style>