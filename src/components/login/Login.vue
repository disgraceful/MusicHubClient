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
                <v-form v-model="valid">
                    <v-text-field label="Login" v-model="login" :rules="loginRules" required></v-text-field>
                    <v-text-field label="Password" v-model="password" :rules="passwordRules" required></v-text-field>
                    <v-btn @click="submit" :disabled="!valid">submit</v-btn>

                </v-form>
            </v-container>
            <v-layout row>
                <v-container>
                    <v-layout row>
                        <v-container fill-height pa-0>
                            <div style="width:90px; display:inline-block">
                                Login with:
                            </div>
                        </v-container>
                        <v-flex>
                            <v-layout row>
                                <v-btn round color="primary">fb</v-btn>
                                <v-btn round color="secondary">tw</v-btn>
                                <!-- <v-btn round color="error">g+</v-btn> -->
                                <g-signin-button :params="googleSignInParams" @success="onSignInSuccess" @error="onSignInError">
                                    Google
                                </g-signin-button>
                            </v-layout>
                        </v-flex>

                        <v-container fill-height>
                            <div class="text-xs-center">
                                <div style="width:40px">
                                    OR
                                </div>
                            </div>
                        </v-container>

                        <v-flex>
                            <v-btn round color="primary" :to="{name:'RegisterConsumer'}">
                                Sign Up
                            </v-btn>
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
            login: '',
            loginRules: [
                v => !!v || 'Login is required',
                v => (v.length <= 10 || v.length >= 4) || 'Login must be <= 10 or >=4 characters'
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
                client_id: '100485869370-r3cg6jshl05m0gh7egkm26r0lk6iiq3h.apps.googleusercontent.com',
                secret: 'mDp4l0YVYbFWCUsbAtxMntSV'
            }
        }),
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    // Native form submission is not yet supported
                    axios.post('/api/submit', {
                        name: this.name,
                        email: this.email,

                    })
                }
            },
            onSignInSuccess(googleUser) {
                // `googleUser` is the GoogleUser object that represents the just-signed-in user.
                //See https://developers.google.com/identity/sign-in/web/reference#users
                this.$loggedUser.user = googleUser.getBasicProfile();
                 console.log(this.$loggedUser.user)
                this.$router.push('/home');

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
        /* This is where you control how the button looks. Be creative! */
        display: inline-block;
        padding: 4px 8px;
        border-radius: 3px;
        background-color: #3c82f7;
        color: #fff;
        box-shadow: 0 3px 0 #0f69ff;
    }
</style>