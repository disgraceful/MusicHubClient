<template>
    <v-card>
        <v-container pa-0 fluid px-0>
            <v-layout row>
                <v-flex shrink>
                    <v-container fill-height>
                        <div>
                            {{number}}
                        </div>
                    </v-container>
                </v-flex>
                <v-flex shrink>
                    <img src="http://via.placeholder.com/55x55" height="55px" width="55px">
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

.flex.shrink{
    flex-grow: 0;flex-shrink: 1
}
.flex.shrink{
    flex-shrink: 0;flex-grow: 1
}
</style>