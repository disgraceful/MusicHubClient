<template>
    <v-card>
        <v-card-title>
            <div>
                <div class="headline">Artists</div>
            </div>
        </v-card-title>
        <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="index in 30" :key="index">
                    <v-card>
                        <div class="text-xs-center">
                            <v-avatar size="200px">
                                <img src="http://via.placeholder.com/200x200">
                            </v-avatar>
                        </div>
                        
                        <v-card-title>
                            <v-flex pa-0>
                                <div class="text-xs-left">
                                    <div class="subheading">Artist Name {{index}}</div>
                                    <div class="grey--text">genre</div>
                                </div>
                            </v-flex>
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