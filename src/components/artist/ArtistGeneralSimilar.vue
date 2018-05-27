<template>
    <v-card>
        <v-layout row>
            <v-card-title primary-title>
                <div class="title" style="width:200px">
                    Similar artists
                </div>
            </v-card-title>
            <v-container>
                <v-flex class="text-xs-right">
                    <router-link :to="{name:'ArtistSimilar',params:{id:$route.params.id}}" tag="a">All artists</router-link>
                </v-flex>
            </v-container>
        </v-layout>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="artist in artists" :key="artist.name">
                    <mh-artist-preview :artist="artist"></mh-artist-preview>       
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    import ArtistPreview from '../shared/ArtistPreview'
    export default {
        data() {
            return {
                artists: '',
            };
        },
        components: {
            'mh-artist-preview': ArtistPreview
        },
        mounted() {
            var apiPath = 'http://localhost:8888/author/' + this.$route.params.id + '/similar';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.artists = response.body;
                    console.log(this.artists);
                }, error => {
                    console.log(error);
                });
        }
    }
</script>