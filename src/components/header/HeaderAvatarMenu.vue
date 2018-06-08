<template>
    <div>
        <v-btn v-if="!userCookie" :to="{name:'Login'}" flat depressed>Login</v-btn>
        <v-btn v-if="!userCookie" :to="{name:'RegisterConsumer'}" flat depressed>Register</v-btn>
        <v-btn v-if="userCookie" :to="{name:'Consumer', params:{id:1}}" flat depressed>
            <v-icon left>favorite_border</v-icon>Favorites
        </v-btn>
        <v-menu :nudge-width="100" offset-y>
            <v-btn v-if="userCookie" flat depressed slot="activator">
                <v-avatar size="35px">
                    <!-- <img :src="user.imgPath"> -->
                    <img :src="require('../../../public/profile.jpeg')">
                    <v-icon dark>arrow_drop_down</v-icon>
                </v-avatar>
            </v-btn>
            <v-list>
                <v-list-tile>
                    <v-list-tile v-text="user.username"></v-list-tile>
                </v-list-tile>

                <v-divider></v-divider>

                <router-link v-for="action in userActions" :key="action.name" tag="v-list-tile" :to="{name:action.route,params:{id:user.username}}">
                    <v-list-tile-title v-text="action.name"></v-list-tile-title>
                </router-link>
                <v-list-tile @click="logout">
                    <v-list-tile v-text="logoutTile"></v-list-tile>
                </v-list-tile>

            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userImgPath: "",
                logoutTile: "Logout",
                userActions: [{
                        name: "My Music",
                        route: "ConsumerTracks"
                    },
                    {
                        name: "Settings",
                        route: "ConsumerSettings"
                    }

                ]
            };
        },
        computed: {
            userCookie() {
                return this.$cookie.get('user-token');
            },
            user() {
                var user = JSON.parse(window.localStorage.getItem('user'))
                if (user) {
                    return user;
                } else {
                    return "";
                }
            }
        },
        methods: {
            logout() {
                var token = this.$cookie.get('user-token');
                this.$http.post('http://localhost:8888/account/logout', {
                        headers: {
                            'Authorization': token
                        }
                    })
                    .then(response => {
                        this.$cookie.delete('user-token');
                        window.localStorage.removeItem('user');
                        this.$router.push({
                            name: 'Login'
                        });
                        this.$router.go(this.$router.currentRoute)
                    }, error => {
                        console.log(error);
                    });
            }
        }

    }
</script>