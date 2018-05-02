<template>
    <v-card>
        <v-container fluid>
            <v-layout>
                <v-avatar size="200px">
                    <img src="http://via.placeholder.com/200x200">
                </v-avatar>
                <v-container>
                    <v-flex style="padding:20px">
                        <div>
                            <div class="headline">Artist Name</div>
                            <div class="grey--text">genre</div>
                        </div>
                    </v-flex>
                    <v-layout row wrap style="padding-top:20px">

                        <v-btn round color="primary">
                            <v-icon left>play_arrow</v-icon>Play All</v-btn>

                        <v-btn round color="white">
                            <v-icon left>favorite_border</v-icon>66666
                        </v-btn>
                    </v-layout>

                </v-container>
            </v-layout>
        </v-container>
        <v-card-actions>
            <v-tabs right slider-color="red">
                <router-link v-for="item in tabs" :key="item.name" :to="{name:item.route,params:{id:$route.params.id}}" tag="v-tab">{{item.name}}</router-link>
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
        }
    }
</script>

<style scoped>
    .padding-10 {
        padding: 20px;
    }
</style>