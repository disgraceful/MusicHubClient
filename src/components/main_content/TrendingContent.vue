<template>
    <v-card>
        <v-card-title>
            <div class="headline">Popular right now</div>
        </v-card-title>
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 v-for="index in 15" :key="index">
                    <mh-song></mh-song>
                    
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>

</template>

<script>
    import Song from '../shared/Song'

    export default {
        components: {
            'mh-song': Song
        }
    }
</script>