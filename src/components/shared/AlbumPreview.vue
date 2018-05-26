<template>
    <v-card>
        <v-card-media :src="album.imgPath" height="150px">
        </v-card-media>
        <v-card-title>
            <v-flex pa-0>
                <div class="text-xs-left">
                    <router-link :to="{name:'ArtistGeneral',params:{id:album.authorId}}">
                        <div class="subheading" style="font-weight:bold">{{album.name}}</div>
                    </router-link>
                    <router-link :to="{name:'Album',params:{id:album.id}}">
                        <div class="text--black">{{album.authorName}}</div>
                    </router-link>
                    <router-link :to="{name:'Genre',params:{id:album.genreId}}">
                        <div class="grey--text">{{album.recordDate}}</div>
                    </router-link>
                </div>
            </v-flex>
        </v-card-title>
    </v-card>
</template>

<script>
    export default {
        props: ['album']
    }
</script>

<style>
</style>