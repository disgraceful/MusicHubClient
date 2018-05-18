<template>
    <v-toolbar dark color="primary">
        <v-btn :to="{name:'Home'}" flat depressed> MusicHub </v-btn>
        <div id="search">
            <v-text-field flat solo-inverted placeholder="Search" prepend-icon="search" hide-details single-line>
            </v-text-field>
        </div>
        <v-spacer></v-spacer>
        <div id="tabs">
            <v-tabs right color="primary">
                <router-link :to="{name:'Home'}" tag="v-tab">Home</router-link>
                <router-link :to="{name:'Recommended'}" tag="v-tab">Recommended</router-link>
                <v-menu :nudge-width="100" offset-y>
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
        <v-spacer></v-spacer>

        <v-btn v-if="$loggedUser.user" :to="{name:'Consumer', params:{id:1}}" flat depressed>
            <v-icon left>favorite_border</v-icon>
            Favorites
        </v-btn>
        <v-btn v-else :to="{name:'Login'}" flat depressed>Login</v-btn>
        <v-btn v-if="!$loggedUser.user" :to="{name:'RegisterConsumer'}" flat depressed>Register</v-btn>
        <v-menu :nudge-width="100" offset-y>
            <v-btn v-if="$loggedUser.user" flat depressed slot="activator">
                <v-avatar size="30px">
                    <img src="http://via.placeholder.com/30x30">
                    <v-icon dark>arrow_drop_down</v-icon>
                </v-avatar>
            </v-btn>
            <v-list>
                <v-list-tile v-for="action in userActions" :key="action.name">
                    <v-list-tile-title v-text="action.name"></v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
    export default {
        data() {
            return {
                genres: [{
                    name: "Genre1",
                    id: 1
                }, {
                    name: "Genre2",
                    id: 2
                }, {
                    name: "Genre3",
                    id: 3
                }],
                userActions: [{
                        name: "My Music"
                    },
                    {
                        name: "Settings"
                    },
                    {
                        name: "Logout"
                    }
                ]
            }
        }
    };
</script>

<style scoped>
    #tabs {
        display: flex;
        padding-left: 5px;
        padding-right: 5px;
    }

    #search {
        width: 400px;
    }
</style>