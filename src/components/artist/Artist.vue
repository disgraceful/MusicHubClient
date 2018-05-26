<template>
    <v-card>
        <v-container fluid>
            <v-layout>
                <v-avatar size="200px">
                    <img :src="artist.imgPath">
                </v-avatar>
                <v-container>
                    <v-flex style="padding:20px">
                        <div>
                            <div class="headline">{{artist.name}}</div>
                            <div class="grey--text">
                                <router-link :to="{name:'Genre',params:{id:artist.genreId}}">
                                    {{artist.genreName}}
                                </router-link>
                            </div>
                        </div>
                    </v-flex>
                    <v-layout row wrap style="padding-top:20px">
                        <v-btn round color="primary">
                            <v-icon left>play_arrow</v-icon>Play All</v-btn>
                        <v-btn round color="white">
                            <v-icon left>favorite_border</v-icon>{{artist.rating}}
                        </v-btn>
                    </v-layout>
                </v-container>
            </v-layout>
        </v-container>
        <v-card-actions>
            <v-tabs right slider-color="red">
                <router-link v-for="item in tabs" :key="item.name" :to="{name:item.route,params:{id:$route.params.id}}" tag="v-tab">
                    {{item.name}}</router-link>
            </v-tabs>
        </v-card-actions>
        <v-tabs-items>
            <router-view></router-view>
        </v-tabs-items>

    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                artist: "",
                image:"",
                tabs: [{
                    name: "All",
                    route: "ArtistGeneral"
                }, {
                    name: "Tracks",
                    route: "ArtistTracks"

                }, {
                    name: "Albums",
                    route: "ArtistAlbums"
                }, {
                    name: "Similar",
                    route: "ArtistSimilar"
                }]
            }
        },
        methods: {
        },
        mounted() {
            var apiPath = 'http://localhost:8888/author/' + this.$route.params.id;
            var getArtist;
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    getArtist = response.body;
                    console.log(getArtist);
                    this.artist = getArtist;
                }, error => {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    .padding-10 {
        padding: 20px;
    }
</style>