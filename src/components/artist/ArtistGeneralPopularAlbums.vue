<template>
    <v-card>
        <v-layout row>
            <v-card-title primary-title>
                <div class="title" style="width:200px">
                    Popular albums
                </div>
            </v-card-title>
            <v-container>
                <v-flex class="text-xs-right">
                    <router-link :to="{name:'ArtistAlbums',params:{id:$route.params.id}}" tag="a">All albums</router-link>
                </v-flex>
            </v-container>
        </v-layout>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="album in albums" :key="album.name">
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
                albums: ''
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
                    console.log(this.albums);
                }, error => {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
</style>