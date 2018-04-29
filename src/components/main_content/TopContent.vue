<template>
    <v-card>
        <v-card-title>
            <div class="headline">Top Content</div>
        </v-card-title>
        <v-card>
            <v-card-title primary-title>
                <h3>Top tracks</h3>
            </v-card-title>
            <mh-carousel></mh-carousel>
        </v-card>

        <v-card>
            <v-card-title primary-title>
                <h3>Top albums</h3>
            </v-card-title>
            <mh-carousel></mh-carousel>
        </v-card>
    </v-card>
</template>

<script>
  import MHCarousel from "../shared/Carousel.vue";
    export default {
        components: {
            'mh-carousel': MHCarousel
        }
    }
</script>