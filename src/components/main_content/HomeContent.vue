<template>
    <div>
        <v-card>
            <v-card-title primary-title>
                <h3>New Releases</h3>
            </v-card-title>
            <mh-album-carousel :items="newReleases"></mh-album-carousel>
        </v-card>

        <v-card>
            <v-card-title primary-title>
                <h3>Top Albums</h3>
            </v-card-title>
            <mh-album-carousel :items="topAlbums"></mh-album-carousel>
        </v-card>

        <v-card>
            <v-card-title primary-title>
                <h3>Trending</h3>
            </v-card-title>
            <mh-carousel :items="trending"></mh-carousel>
        </v-card>
        <div style="height:75px"></div>
    </div>
</template>

<script>
    import MHCarousel from "../shared/Carousel.vue";
    import MHAlbumCarousel from '../shared/AlbumCarousel.vue'
    export default {
        data() {
            return {
                newReleases: '',
                topAlbums: '',
                trending: '',
            };
        },
        components: {
            'mh-carousel': MHCarousel,
            'mh-album-carousel': MHAlbumCarousel
        },
        mounted() {
            var apiPath = 'http://localhost:8888/album/new';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.newReleases = response.body;
                }, error => {
                    console.log(error);
                });
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
                var apiPath = 'http://localhost:8888/song/trending';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.trending = response.body;
                }, error => {
                    console.log(error);
                });
        }
    }
</script>