<template>
    <v-toolbar dark color="primary">
        <v-btn flat depressed> Music Hub </v-btn>
        <div id="search">
            <v-text-field flat solo-inverted placeholder="Search" prepend-icon="search" hide-details single-line>
            </v-text-field>
        </div>
        <v-spacer></v-spacer>
        <div id="tabs">
            <v-tabs right color="primary">
                <router-link :to="{name:'Home'}" tag="v-tab">Home</router-link>
                <router-link :to="{name:'Recommended'}" tag="v-tab">Recommended</router-link>
                <v-menu :nudge-width="100">
                    <v-btn flat depressed slot="activator">
                        Genres
                        <v-icon dark>arrow_drop_down</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile v-for="item in items" :key="item">
                            <v-list-tile-title v-text="item"></v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-tabs>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>favorite_border</v-icon>
        </v-btn>
        <v-menu :nudge-width="100">
            <v-btn flat depressed slot="activator">
                <v-avatar size="30px">
                    <img src="../../../public/favicon-32x32.png">
                    <v-icon dark>arrow_drop_down</v-icon>
                </v-avatar>
            </v-btn>
            <v-list>
                <v-list-tile v-for="item in items" :key="item">
                    <v-list-tile-title v-text="item"></v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
    export default {
        data() {
            return {
                items: ["Genre1", "Genre2", "Genre3"]
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