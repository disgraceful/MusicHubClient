<template>
    <v-card>
        <v-container fluid>
            <v-layout row>
                <v-flex shrink>
                    <div style="width:100px">
                        <v-avatar size="80px">
                            <!-- <img :src="user.imgPath"> -->
                            <img :src="require('../../../../public/profile.jpeg')">
                        </v-avatar>
                    </div>
                </v-flex>
                <v-flex>
                    <div>
                        <div class="text--black">
                            Favorites
                        </div>
                        <div class="headline">
                            <!-- {{user.username}} -->
                            SomeGuy
                        </div>
                    </div>
                </v-flex>
                <v-flex>
                    <div class="text-xs-right">
                        <v-btn small color="white" :to="{name:'ConsumerSettings',params:{id:$route.params.id}}">Settings</v-btn>
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
        },
        computed: {
            user() {
                var user = JSON.parse(window.localStorage.getItem('user'))
                if (user) {
                    return user;
                } else {
                    return "";
                }
            }
        }
      
    }
</script>