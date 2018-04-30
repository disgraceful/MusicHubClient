<template>
    <v-card>
        <v-container pa-0 fluid px-0>
            <v-layout row>
                <v-flex shrink>
                    <v-container fill-height>
                        <div style="width:10px; display:inline-block">
                            {{number}}
                        </div>
                    </v-container>
                </v-flex>
                <v-flex xs11>
                    <v-card-title>
                        <v-flex >
                            <div class="text-xs-left">
                                <div class="text--black">Track Name</div>
                            </div>
                        </v-flex>
                        <v-flex>
                            <div class="text-xs-left">
                                <div class="text--black">Artist Name</div>
                            </div>
                        </v-flex>
                    </v-card-title>
                </v-flex>
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