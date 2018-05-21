<template>
    <div>
        <v-btn v-if="userCookie" :to="{name:'Consumer', params:{id:1}}" flat depressed>
            <v-icon left>favorite_border</v-icon>Favorites
        </v-btn>
        <v-btn v-else :to="{name:'Login'}" flat depressed>Login</v-btn>
        <v-btn v-if="!userCookie" :to="{name:'RegisterConsumer'}" flat depressed>Register</v-btn>
        <v-menu :nudge-width="100" offset-y>
            <v-btn v-if="userCookie" flat depressed slot="activator">
                <v-avatar size="30px">
                    <img src="http://via.placeholder.com/30x30">
                    <v-icon dark>arrow_drop_down</v-icon>
                </v-avatar>
            </v-btn>
            <v-list>
                <v-list-tile v-for="action in userActions" :key="action.name">
                    <v-list-tile-title v-text="action.name"></v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userActions: [{
                        name: "My Music"
                    },
                    {
                        name: "Settings"
                    },
                    {
                        name: "Logout"
                    }
                ]
            };
        },
        computed: {
            userCookie() {
                return this.$cookie.get('user');
            }
        },
    }
</script>