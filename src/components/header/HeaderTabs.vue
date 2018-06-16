<template>
    <div id="tabs">
        <v-tabs right color="primary">
            <router-link :to="{name:'Home'}" tag="v-tab">Home</router-link>
            <router-link :to="{name:'Recommended'}" tag="v-tab">Recommended</router-link>
            <v-menu :nudge-width="100" offset-y >
                <v-btn flat depressed slot="activator">
                    Genres
                    <v-icon dark>arrow_drop_down</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="genre in genres" :key="genre.name">
                        <router-link tag="v-list-tile-title" :to="{name:'Genre',params:{id:genre.id}}">{{genre.name}}</router-link>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                genres: '',
            };
        },
        computed: {
            userCookie() {
                return this.$cookie.get('user');
            }
        },
        mounted() {
            var apiPath = 'http://localhost:8888/genre/'
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.genres = response.body;
                }, error => {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    #tabs {
        display: flex;
        padding-left: 5px;
        padding-right: 5px;
    }
</style>