<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-title primary-title>
                    <h1>Home</h1>
                </v-card-title>
                <v-card-actions>
                    <v-tabs right slider-color="red" v-model="tab">
                        <router-link v-for="item in tabs" :key="item.name" :to="item.route" tag="v-tab">{{item.name}}</router-link>
                    </v-tabs>
                </v-card-actions>
                <v-tabs-items v-model="tab">
                    <router-view></router-view>
                </v-tabs-items>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import {
        Carousel,
        Slide
    } from 'vue-carousel';

    export default {
        data() {
            return {
                tab: null,
                tabs: [{
                    name: "All",
                    route: "/home"
                }, {
                    name: "New",
                    route: "/new"
                }, {
                    name: "Top",
                    route: "/top"
                }, {
                    name: "Trending",
                    route: "/trending"
                }]
            }
        },
        components: {
            Carousel,
            Slide
        }
    }
</script>

<style scoped>
</style>