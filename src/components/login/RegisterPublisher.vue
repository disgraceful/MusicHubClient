<template>
    <div style="max-width:600px">
        <v-card>
            <div class="text-xs-center">
                <v-card-title>
                    <div>
                        <div class="headline">Sign Up as Publisher</div>
                    </div>
                </v-card-title>
            </div>
            <v-container fluid>
                <v-form v-model="valid">
                    <v-text-field label="Login" v-model="login" :rules="loginRules" required></v-text-field>
                    <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                    <v-text-field label="Password" v-model="password" :rules="passwordRules" required></v-text-field>
                    <v-text-field label="Confirm password" v-model="confirm" :rules="confrimRules" required></v-text-field>
                    <v-text-field label="Artist name" v-model="artist" :rules="artistRules" required></v-text-field>
                    <!-- <v-text-field label="Special code" v-model="confirm" :rules="confrimRules" required></v-text-field> -->
                    <v-btn @click="submit" :disabled="!valid">submit</v-btn>
                </v-form>
            </v-container>
            <v-container pa-0>
                <v-layout row justify-center>
                    <v-btn round color="primary" :to="{name:'Login'}">
                        Log in
                    </v-btn>
                    <v-btn round color="primary" :to="{name:'RegisterConsumer'}">
                        Sign Up as user
                    </v-btn>
                </v-layout>
            </v-container>
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
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v=> (v.length<=10||v.length>=4) || 'Password must be <= 10 or >=4 characters'
            ],
            confirm: '',
            confirmRules: [
                v => !!v || 'Confrim password is required',
                v => password===confirm || 'Passwords do not match'
            ],
            artist: '',
            artistRules: [
                v => !!v || 'Artist name is required',
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
            },
            clear() {
                this.$refs.form.reset()
            }
        }
    }
</script>