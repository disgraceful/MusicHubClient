<template>
    <v-card>
        <v-card-title>
            <div class="headline">Popular right now</div>
        </v-card-title>
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 v-for="(song,index) in trending" :key="index">
                    <mh-song :number="index+1" :song="song"></mh-song>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    import Song from '../shared/Song'
    export default {
        data() {
            return {
                trending: ''
            };
        },
        components: {
            'mh-song': Song
        },
        mounted() {
            var apiPath = 'http://localhost:8888/song/trending';
            this.$http.get(apiPath, {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.trending = response.body;
                }, error => {
                    console.log(error);
                });
        }
    }
</script>