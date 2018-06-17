<template>
    <v-card flat>
        <v-card-title>
            <div class="headline">New releases, albums and collections</div>
        </v-card-title>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="album in newReleases" :key="album.name">
                    <mh-album :album="album"></mh-album>
                </v-flex>
            </v-layout>
        </v-container>
         <div style="height:75px"></div>
    </v-card>

</template>

<script>
    import Album from '../shared/AlbumPreview'
    export default {
        data() {
            return {
                newReleases: '',
            };
        },
        components: {
            'mh-album': Album
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
        }
    }
</script>