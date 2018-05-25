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
                tabs: [{
                    name: "Tracks",
                    route: "PublisherTracks"
                }, {
                    name: "Albums",
                    route: "PublisherAlbums"
                }]
            }
        },
        computed: {
            artist() {
                return getArtist;
            }
        },
        components: {
            'mh-pub-upload': PublisherUpload
        },
        methods: {
            getArtist() {
                var apiPath = 'http://localhost:8888/author/' + this.$route.params.id;
                var getArtist;
                this.$http.get('apiPath', {
                        headers: {
                            'Authorization': this.$cookie.get('user-token')
                        }
                    })
                    .then(response => {
                        getArtist = response.body;
                        return getArtist;
                    }, error => {
                        console.log(error);
                    });
            }
        }

    }
</script>

<style scoped>
    .padding-10 {
        padding: 20px;
    }
</style>