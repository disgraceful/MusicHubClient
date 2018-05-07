<template>
    <v-card>
        <v-card>
            <v-card-title primary-title>
                <h3>New releases in Genre{{id}}</h3>
            </v-card-title>
            <mh-carousel></mh-carousel>
        </v-card>

        <v-card>
            <v-card-title primary-title>
                <h3>Top albums in Genre{{id}}</h3>
            </v-card-title>
            <mh-carousel></mh-carousel>
        </v-card>

        <v-card>
            <v-card-title primary-title>
                <h3>Top tracks in Genre{{id}}</h3>
            </v-card-title>
            <mh-carousel></mh-carousel>
        </v-card>
    </v-card>
</template>

<script>
    import MHCarousel from "../shared/Carousel.vue";
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route' (to, from) {
                this.id = to.params.id
            }
        },
        components: {
            'mh-carousel': MHCarousel
        }
    }
</script>