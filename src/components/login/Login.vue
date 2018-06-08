<template>
    <div class="login">
        <v-card>
            <div class="text-xs-right">
                <v-card-title>
                    <div class="text-xs-center">
                        <div class="headline">Login</div>
                    </div>
                </v-card-title>
            </div>
            <v-container fluid>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field label="Username" v-model="username" :rules="usernameRules" required></v-text-field>
                    <v-text-field label="Password" v-model="password" type=p assword :rules="passwordRules" required></v-text-field>
                    <v-btn @click="submit" :disabled="!valid">submit</v-btn>
                </v-form>
            </v-container>
            <v-layout row>
                <v-container>
                    <v-layout row>
                        <v-flex shrink>
                            <v-container fill-height pa-0>
                                <v-flex shrink style="width:90px; display:inline-block">
                                    Login with:
                                </v-flex>
                            </v-container>
                        </v-flex>
                        <v-flex>
                            <v-layout row>
                                <g-signin-button :params="googleSignInParams" @success="onSignInSuccess" @error="onSignInError">
                                    Google
                                </g-signin-button>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex shrink>
                            <v-container fill-height pa-0>
                                <v-flex shrink style="width:90px; display:inline-block">
                                    OR
                                </v-flex>
                            </v-container>
                        </v-flex>
                        <v-flex>
                            <v-layout row>

                                <v-btn round color="primary" :to="{name:'RegisterConsumer'}">
                                    Sign Up
                                </v-btn>
                            </v-layout>
                        </v-flex>
                    </v-layout>

                </v-container>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
            valid: false,
            username: '',
            usernameRules: [
                v => !!v || 'Login is required',
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required'
            ],
            /**
             * The Auth2 parameters, as seen on
             * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
             * As the very least, a valid client_id must present.
             * @type {Object}
             */
            googleSignInParams: {
                client_id: '100485869370-cl89djdjsno00e1re6sfl6d4hua9d7p9.apps.googleusercontent.com',
                secret: 'YtCg48bLBDEE3xEsCc2_qCss'
            }
        }),
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    this.$http.post('http://localhost:8888/login', {
                            username: this.username,
                            password: this.password
                        })
                        .then(response => {
                            var token_id = response.body.accessToken;
                            this.$cookie.set('user-token', token_id);
                            var token = 'Bearer ' + token_id;
                            this.$http.get('http://localhost:8888/account', {
                                    headers: {
                                        'Authorization': token
                                    }
                                })
                                .then(response => {
                                    var user = response.body;
                                    if (user.roleId === '1') {
                                        this.$http.get('http://localhost:8888/account/publisher', {
                                                headers: {
                                                    'Authorization': token
                                                }
                                            })
                                            .then(response => {
                                                this.$http.get('http://localhost:8888/publisher/' + response
                                                        .body.id + '/author', {
                                                            headers: {
                                                                'Authorization': token
                                                            }
                                                        })
                                                    .then(response => {
                                                        user.imgPath = response.body.imgPath;
                                                        window.localStorage.setItem('user', JSON.stringify(
                                                            user))
                                                        this.$router.push({
                                                            name: 'Home'
                                                        });
                                                        this.$router.go(this.$router.currentRoute)
                                                    }, error => {
                                                        console.log(error);
                                                    });
                                            }, error => {
                                                console.log(error);
                                            });

                                    } else {
                                        this.$http.get('http://localhost:8888/account/consumer', {
                                                headers: {
                                                    'Authorization': token
                                                }
                                            })
                                            .then(response => {
                                                user.imgPath = response.body.imgPath;
                                                window.localStorage.setItem('user', JSON.stringify(user))
                                                this.$router.push({
                                                    name: 'Home'
                                                });
                                                this.$router.go(this.$router.currentRoute)
                                            }, error => {
                                                console.log(error);
                                            });
                                    }
                                }, error => {
                                    console.log(error);
                                });
                        }, error => {
                            console.log(error);
                        });
                }
            },
            onSignInSuccess(googleUser) {
                // `googleUser` is the GoogleUser object that represents the just-signed-in user.
                //See https://developers.google.com/identity/sign-in/web/reference#users
                var token_id = googleUser.getAuthResponse().id_token;
                this.$cookie.set('user-token', token_id);
                var user;
                this.$http.post('http://localhost:8888/login/Google', token_id)
                    .then(response => {
                        user = response.body;
                        window.localStorage.setItem('user', JSON.stringify(user))
                        var token = 'Bearer ' + token_id;
                        this.$http.get('http://localhost:8888/account/consumer', {
                                headers: {
                                    'Authorization': token
                                }
                            })
                            .then(response => {
                                user.userImgPath = response.body.imgPath;
                                window.localStorage.setItem('user', JSON.stringify(user))
                                this.$router.push({
                                    name: 'Home'
                                });
                                this.$router.go(this.$router.currentRoute)
                            }, error => {
                                console.log(error);
                            });
                    }, error => {
                        console.log(error);
                    });
            },
            onSignInError(error) {
                // `error` contains any error occurred.
                console.log('OH NOES', error)
            }
        }

    }
</script>

<style scoped>
    .login {
        width: 600px !important;
        position: fixed !important;
        top: 25% !important;
        left: 50% !important;
        margin-left: -300px !important;
    }

    .g-signin-button {
        margin-top: 7px;
        height: 32px;
        width: 88px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        text-align: center;
        letter-spacing: normal;
        text-indent: 0px;
        text-shadow: none;
        word-spacing: normal;
        display: inline-block;
        padding: 4px 8px;
        border-radius: 20px;
        background-color: #3c82f7;
        color: #fff;
        box-shadow: 0 3px 0 #0f69ff;
    }
</style>