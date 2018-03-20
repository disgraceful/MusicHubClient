<template>

    <div id="player">
        <v-card tile>
            <v-progress-linear height="3" :value="50" class="my-0"></v-progress-linear>
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-btn icon>
                            <v-icon>fast_rewind</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-action :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
                        <v-btn icon>
                            <v-icon>pause</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                        <v-btn icon>
                            <v-icon>fast_forward</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                   
                    <v-list-tile-content>
                        <v-list-tile-title>The Walker</v-list-tile-title>
                        <v-list-tile-sub-title>Fitz & The Trantrums</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-card>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped>
    #player {
        position: fixed;
        bottom: 0;
        width: 70%;
        margin-left: 15%;
        margin-right: 15%;
    }
</style>