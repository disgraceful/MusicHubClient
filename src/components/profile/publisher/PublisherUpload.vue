<template>
    <v-card>
        <v-card-title>
            <div>
                <div class="headline">Upload to your collection</div>
            </div>
        </v-card-title>
        <v-container fluid>
            <v-layout>
                <v-flex xs6>
                    <v-card flat>
                        <v-card-title>
                            <div>
                                <div class="subheading">Upload new Album</div>
                            </div>
                        </v-card-title>
                        <v-flex xs3>
                            <v-card>
                                <v-card-media src="http://via.placeholder.com/350x150" height="150px">
                                </v-card-media>
                                <v-card-title>
                                    <v-flex pa-0>
                                        <div class="text-xs-left">
                                            <div class="text--black" style="font-weight:bold">Upload new album</div>
                                        </div>
                                    </v-flex>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                    </v-card>
                </v-flex>
                <v-flex xs6>
                    <v-card flat>
                        <v-card-title>
                            <div>
                                <div class="subheading">Upload song to existing Album</div>
                            </div>
                        </v-card-title>
                        <v-container fluid grid-list-md>
                            <v-layout row wrap>
                                <v-flex xs2 v-for="item in 10" :key="item">
                                    <v-card>
                                        <v-card-media src="http://via.placeholder.com/150x100" height="100px"></v-card-media>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>

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