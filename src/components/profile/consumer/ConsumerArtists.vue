<template>
    <v-card>
        <v-card-title>
            <div>
                <div class="headline">Artists</div>
            </div>
        </v-card-title>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="index in 3" :key="index">
                    <mh-artist :artist="artists[index-1]"></mh-artist>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    import Artist from '../../shared/ArtistPreview'
    export default {
        data() {
            return {
                artists: '',
            };
        },
        components: {
            'mh-artist': Artist
        },
        mounted() {
            var apiPath = 'http://localhost:8888/author/top'
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.artists = response.body;
                    
                }, error => {
                    console.log(error);
                });
        }
    }
</script>