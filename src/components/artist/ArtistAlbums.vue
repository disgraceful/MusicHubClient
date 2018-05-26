<template>
    <v-card flat>
        <v-card-title>
            <div>
                <div class="headline">Albums</div>
            </div>
        </v-card-title>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="album in albums" :key="album.id">
                    <mh-album-preview :album="album"></mh-album-preview>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>
<script>
    import AlbumPreview from '../shared/AlbumPreview'
    export default {
        data() {
            return {
                albums: '',
                albumsCount: '',

            };
        },
        components: {
            'mh-album-preview': AlbumPreview
        },
        mounted() {
            var apiPath = 'http://localhost:8888/author/' + this.$route.params.id + '/albums';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.albums = response.body;
                    this.albumsCount = this.albums.length;
                    console.log(this.albums);
                }, error => {
                    console.log(error);
                });
        }
    }
</script>