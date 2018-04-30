<template>
    <v-card>
        <v-container pa-0 fluid>
            <v-layout row>
                <v-flex shrink>
                    <div style="padding-left:10px">
                    <img src="http://via.placeholder.com/55x55" height="55px" width="55px">
                    </div>
                </v-flex>
                <v-card-title>
                    <div class="text-xs-left">
                        <div class="text--black">Track Name</div>
                        <div class="grey--text">Author Name</div>
                    </div>
                </v-card-title>
                <v-flex>
                    <v-container>
                        <div>
                            <div class="text--black text-xs-right">3:01</div>
                        </div>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
   
</template>

<script>
    export default {
        props: ['number']
    }
</script>

<style>


</style>