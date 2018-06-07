<template>
    <v-card flat>
        <v-card-title>
            <div class="headline">Top Content</div>
        </v-card-title>
        <v-card flat>
            <v-card-title primary-title>
                <h3>Top albums</h3>
            </v-card-title>
            <mh-album-carousel :items="topAlbums"></mh-album-carousel>
        </v-card>
        <v-card flat>
            <v-card-title primary-title>
                <h3>Top tracks</h3>
            </v-card-title>
            <mh-carousel :items="topSongs"></mh-carousel>
        </v-card>
    </v-card>
</template>

<script>
    import MHCarousel from "../shared/Carousel.vue";
    import MHAlbumCarousel from '../shared/AlbumCarousel.vue'
    export default {
        data() {
            return {
                topAlbums: '',
                topSongs: '',
            };
        },
        components: {
            'mh-carousel': MHCarousel,
            'mh-album-carousel': MHAlbumCarousel
        },
        mounted() {
            var apiPath = 'http://localhost:8888/album/top';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.topAlbums = response.body;
                }, error => {
                    console.log(error);
                });
            var apiPath = 'http://localhost:8888/song/top';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.topSongs = response.body;
                }, error => {
                    console.log(error);
                });
        }
    }
</script>