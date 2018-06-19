<template>
    <v-card flat>
        <v-card-title>
            <div>
                <div class="headline">Albums</div>
            </div>
        </v-card-title>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="index in 3" :key="index">
                    <mh-album :album="albums[index-1]"></mh-album>
                </v-flex>
            </v-layout>
        </v-container>
        <div style="height:230px;"></div>
    </v-card>
</template>

<script>
    import Album from '../../shared/AlbumPreview'
    export default {
        data() {
            return {
                albums: '',
            };
        },
        components: {
            'mh-album':Album
        },
        mounted(){
             var apiPath = 'http://localhost:8888/album/new'
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.albums = response.body;                
                }, error => {
                    console.log(error);
                });
        }
    }
</script>