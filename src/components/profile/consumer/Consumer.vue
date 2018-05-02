<template>
    <v-card>
        <v-container fluid>
            <v-layout row>
                <v-flex shrink>
                    <div style="width:80px">
                        <v-avatar size="60px">
                            <img src="http://via.placeholder.com/60x60">
                        </v-avatar>
                    </div>
                </v-flex>
                <v-flex>
                    <div>
                        <div class="text--black">
                            Favorites
                        </div>
                        <div class="headline">
                            Login
                        </div>
                    </div>
                </v-flex>
                <v-flex>
                    <div class="text-xs-right">
                        <v-btn small color="white">Settings</v-btn>
                    </div>
                </v-flex>
            </v-layout>

            <v-card-actions>
                <v-tabs right slider-color="red">
                    <router-link v-for="item in tabs" :key="item.name" :to="{name:item.route,params:{id:$route.params.id}}" tag="v-tab">{{item.name}}</router-link>

                </v-tabs>
            </v-card-actions>
            <v-tabs-items v-model="tab">
                <router-view></router-view>
            </v-tabs-items>

        </v-container>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                tab: null,
                tabs: [{
                    name: "Tracks",
                    route: "ConsumerTracks",
                }, {
                    name: "Albums",
                    route: "ConsumerAlbums"

                }, {
                    name: "Artists",
                    route: "ConsumerArtists"
                }, {
                    name: "Playlists",
                    route: "ConsumerPlaylists"
                }, {
                    name: "History",
                    route: "ConsumerHistory"
                }]
            }
        }
    }
</script>