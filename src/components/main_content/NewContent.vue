<template>
    <v-card>
        <v-card-title>
            <div class="headline">New releases, albums and collections</div>
        </v-card-title>

        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex xs2 v-for="index in 30" :key="index">
                    <v-card>
                        <v-card-media src="http://via.placeholder.com/350x150" height="150px">
                        </v-card-media>
                        <v-card-title>
                            <div>
                                <div class="black--text">Album Name {{index}}</div>
                                <span class="grey--text">Author Name{{index}}</span>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>

</template>

<script>
    export default {

    }
</script>