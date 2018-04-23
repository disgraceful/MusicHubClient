<template>
    <div>
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
    </div>
</template>

<script>
    import MHCarousel from "./Carousel.vue";
    export default {
        components: {
            'mh-carousel': MHCarousel
        }
    }
</script>