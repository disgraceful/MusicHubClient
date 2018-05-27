<template>
    <v-card flat>
        <v-card-title>
            <div>
                <div class="headline">Similar</div>
            </div>
        </v-card-title>
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
                artists: ''
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