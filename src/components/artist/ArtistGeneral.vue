<template>
    <v-card flat>
        <mh-artist-popular-tracks></mh-artist-popular-tracks>
        <mh-artist-popular-albums></mh-artist-popular-albums>
        <mh-artist-popular-playlists></mh-artist-popular-playlists>
        <mh-artist-similar></mh-artist-similar>
        <div style="height:75px;"></div>
    </v-card>
</template>

<script>
    import ArtistPopularTracks from './ArtistGeneralPopularTracks.vue'
    import ArtistPopularAlbums from './ArtistGeneralPopularAlbums.vue'
    import ArtistPopularPlaylists from './ArtistGeneralPopularPlaylists.vue'
    import ArtistSimilar from './ArtistGeneralSimilar.vue'

    export default {
        components: {
            'mh-artist-popular-tracks': ArtistPopularTracks,
            'mh-artist-popular-albums': ArtistPopularAlbums,
            'mh-artist-popular-playlists':ArtistPopularPlaylists,
            'mh-artist-similar': ArtistSimilar
        }
    }
</script>