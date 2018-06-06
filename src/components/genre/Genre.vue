<template>
    <v-card>
        
        <v-card flat>
            <v-card-title primary-title>
                <h3>New releases in {{genre.name}}</h3>
            </v-card-title>
            <mh-album-carousel :items="newItems"></mh-album-carousel>
        </v-card>

        <v-card flat>
            <v-card-title primary-title>
                <h3>Top albums in {{genre.name}}</h3>
            </v-card-title>
            <mh-album-carousel :items="topAlbums"></mh-album-carousel>
        </v-card>

        <v-card flat>
            <v-card-title primary-title>
                <h3>Top tracks in {{genre.name}}</h3>
            </v-card-title>
            <mh-carousel :items="topTracks"></mh-carousel>
        </v-card>
        <div style="height:75px;"></div>
    </v-card>
</template>

<script>
    import MHCarousel from "../shared/Carousel.vue";
    import MHAlbumCarousel from '../shared/AlbumCarousel.vue'
    export default {
        data() {
            return {
                genre: '',
                newItems: '',
                topAlbums: '',
                topTracks: '',
            }
        },
        watch: {
            '$route' (to, from) {
                this.id = to.params.id
            }
        },
        components: {
            'mh-carousel': MHCarousel,
            'mh-album-carousel':MHAlbumCarousel
        },
        mounted() {
            var apiPath = 'http://localhost:8888/genre/' + this.$route.params.id;
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.genre = response.body;
                }, error => {
                    console.log(error);
                });
            var apiPath = 'http://localhost:8888/genre/' + this.$route.params.id + '/albums/new';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.newItems = response.body;
                }, error => {
                    console.log(error);
                });
            var apiPath = 'http://localhost:8888/genre/' + this.$route.params.id + '/albums/top';
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

            var apiPath = 'http://localhost:8888/genre/' + this.$route.params.id + '/songs/top';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.topTracks = response.body;
                }, error => {
                    console.log(error);
                });
        }
    }
</script>



 