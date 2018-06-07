<template>
    <v-card flat>
        <v-container pa-0 fluid px-0>
            <v-layout row>
                <v-flex shrink>
                    <v-container fill-height>
                        <div style="width:10px; display:inline-block">
                            {{number}}
                        </div>
                    </v-container>
                </v-flex>
                <v-flex shrink>
                    <img :src="song.imgPath" height="55px" width="55px">
                </v-flex>
                <v-card-title>
                    <div class="text-xs-left">
                        <div class="text--black">{{song.name}}</div>
                        <div class="grey--text">{{song.authorName}}</div>
                    </div>
                </v-card-title>
                <v-flex>
                    <v-container>
                        <div>
                            <div class="text--black text-xs-right">{{song.duration}}</div>
                        </div>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
   
</template>

<script>
    export default {
        props: ['number','song']
    }
</script>

<style scoped>

</style>