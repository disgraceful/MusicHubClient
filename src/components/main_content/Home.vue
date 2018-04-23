<template>
    <div>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <h1>Home</h1>
                    </v-card-title>
                    <v-card-actions>
                        <v-tabs right slider-color="red">
                            <router-link to="/home" tag="v-tab">All</router-link>
                            <router-link to="/new" tag="v-tab">New</router-link>
                            <router-link to="/top" tag="v-tab">Top</router-link>
                            <router-link to="/trending" tag="v-tab">Trending</router-link>
                            
                        </v-tabs>
                    </v-card-actions>
                    <router-view></router-view>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import {
        Carousel,
        Slide
    } from 'vue-carousel';

    export default {
        components: {
            Carousel,
            Slide
        }
    }
</script>

<style scoped>
</style>