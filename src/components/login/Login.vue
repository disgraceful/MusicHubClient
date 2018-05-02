<template>
    <div style="max-width:600px;">
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
                                <v-btn round color="error">g+</v-btn>
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
            ]
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
            }
        }
    }
</script>