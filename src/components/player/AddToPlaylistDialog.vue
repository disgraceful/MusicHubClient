<template>
    <v-card>
        <v-card-title class="subheading">Add to playlist</v-card-title>
        <v-list subheader>
            <v-list-tile v-for="playlist in playlists" :key="playlist">
                <v-list-tile-action>
                    <v-icon >add</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-html="playlist"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
        <v-card-actions>
            <v-text-field hide-details single-line v-model="playlistSearch"></v-text-field>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                playlists:[
                    "Favorites","playlist1","playlist2"
                ],
                playlistSearch:""
            }
        },
        props: ['dialog']
    }
</script>