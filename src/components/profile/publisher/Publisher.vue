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
                            <div class="grey--text">{{artist.genreName}}</div>
                        </div>
                    </v-flex>
                    <mh-pub-upload></mh-pub-upload>
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
    import PublisherUpload from './PublisherUpload'
    export default {
        data() {
            return {
                artist: '',
                tabs: [{
                    name: "Tracks",
                    route: "PublisherTracks"
                }, {
                    name: "Albums",
                    route: "PublisherAlbums"
                }]
            }
        },

        components: {
            'mh-pub-upload': PublisherUpload
        },
        mounted() {
            this.$http.get('http://localhost:8888/account/publisher', {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.$http.get('http://localhost:8888/publisher/' + response
                            .body.id + '/author', {
                                headers: {
                                    'Authorization': this.$cookie.get('user-token')
                                }
                            })
                        .then(response => {
                            this.artist = response.body;
                        }, error => {
                            console.log(error);
                        });
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