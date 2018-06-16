<template>
    <v-toolbar dark color="primary">
        <v-btn :to="{name:'Home'}" flat > MusicHub </v-btn>
        <v-spacer></v-spacer>
        <mh-header-tabs></mh-header-tabs>
        <v-spacer></v-spacer>
        <mh-header-avatar></mh-header-avatar>
    </v-toolbar>
</template>

<script>
    import HeaderTabs from './HeaderTabs.vue'
    import HeaderAvatarMenu from './HeaderAvatarMenu.vue'
    import HeaderSearch from './HeaderSearch.vue'
    export default {
        components: {
            'mh-header-tabs': HeaderTabs,
            'mh-header-avatar': HeaderAvatarMenu,
            'mh-header-search': HeaderSearch
        }
    }
</script>