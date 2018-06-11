<template>
    <div class="register">
        <v-card>
            <div class="text-xs-center">
                <v-card-title>
                    <div>
                        <div class="headline">Sign Up</div>
                    </div>
                </v-card-title>
            </div>
            <v-container style="padding-top:0px">
                <v-layout row>
                    <v-container>
                        <img :src="imageUrl" height="150" v-if="imageUrl" />
                    </v-container>
                </v-layout>
                <v-layout>
                    <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                    <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
                </v-layout>
            </v-container>
            <v-container fluid style="padding-top:0px">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field label="Username" v-model="username" :rules="usernameRules" required></v-text-field>
                    <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                    <v-text-field label="Password" v-model="password" type=password :rules="passwordRules" required></v-text-field>
                    <v-text-field label="Confirm password" v-model="confirm" type=password :rules="confirmRules" required></v-text-field>
                    <v-btn @click="submit" :disabled="!valid">submit</v-btn>
                </v-form>
            </v-container>
            <v-layout row>
                <v-container>
                    <v-layout row>
                        <v-flex shrink>
                            <v-container fill-height pa-0>
                                <v-flex shrink style="width:140px; display:inline-block">
                                    Have an account?
                                </v-flex>
                            </v-container>
                        </v-flex>
                        <v-flex>
                            <v-layout row>
                                <v-btn round color="primary" :to="{name:'Login'}">
                                    Log in
                                </v-btn>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex shrink>
                            <v-container fill-height pa-0>
                                <v-flex shrink style="width:140px; display:inline-block">
                                    You are a publisher?
                                </v-flex>
                            </v-container>
                        </v-flex>
                        <v-flex>
                            <v-layout row>
                                <v-btn round color="primary" :to="{name:'RegisterPublisher'}">
                                    Sign Up as Publisher
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
        data() {
            return {
                valid: false,
                username: '',
                email: '',
                password: '',
                confirm: '',
                imgPath: '',
                imageName: '',
                imageUrl: '',
                imageFile: '',
                usernameRules: [
                    v => !!v || 'This field is required',
                    v => (v.length <= 15 || v.length >= 4) || 'Login must be <= 14 or >=4 characters'
                ],
                emailRules: [
                    v => !!v || 'This field  is required',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'This field  is required',
                    v => (v.length >= 6) || 'Password must be <= 10 or >=6 characters'
                ],
                confirmRules: [
                    v => !!v || 'This field is required',
                    v => this.checkPasswords() || 'Passwords do not match'
                ],
            };
        },
        methods: {
            checkPasswords() {
                return this.password === this.confirm;
            },
            submit() {
                if (this.$refs.form.validate()) {
                    var newConsumer = {
                        email: this.email,
                        username: this.username,
                        password: this.password,
                        confirmPassword: this.confirm,
                    }
                    this.$http.post('http://localhost:8888/register', newConsumer)
                        .then(response => {
                            var createdConsumer = response.body;
                            console.log(createdConsumer);
                            this.$http.post('http://localhost:8888/login', {
                                    username: this.username,
                                    password: this.password
                                })
                                .then(response => {
                                    var token_id = response.body.accessToken;
                                    console.log(token_id);
                                    this.$cookie.set('user-token', token_id);
                                    var token = 'Bearer ' + token_id;
                                    var formData = new FormData();
                                    formData.append('file', this.imageFile);
                                    this.$http.post('http://localhost:8888/upload/consumer/' + createdConsumer.userId,
                                            formData, {
                                                headers: {
                                                    'Authorization': token,
                                                    'Content-Type': 'multipart/form-data'
                                                }
                                            })
                                        .then(response => {
                                            console.log("OH IM GOING INNNNN!!!!");
                                            createdConsumer = response.body;
                                            console.log(createdConsumer);
                                            this.$http.get('http://localhost:8888/account', {
                                                    headers: {
                                                        'Authorization': token
                                                    }
                                                })
                                                .then(response => {
                                                    var user = response.body;
                                                    user.imgPath = createdConsumer.imgPath;
                                                    window.localStorage.setItem('user', JSON.stringify(
                                                        user));
                                                    this.$router.push({
                                                        name: 'Home'
                                                    });
                                                    this.$router.go(this.$router.currentRoute);
                                                }, error => {
                                                    console.log(error);
                                                });
                                        }, error => {
                                            console.log(error);
                                        });
                                }, error => {
                                    console.log(error);
                                });

                        }, error => {
                            console.log(error);
                        });
                }
            },
            clear() {
                this.$refs.form.reset()
            },
            pickFile() {
                this.$refs.image.click()
            },
            onFilePicked(e) {
                const files = e.target.files
                if (files[0] !== undefined) {
                    this.imageName = files[0].name
                    if (this.imageName.lastIndexOf('.') <= 0) {
                        return
                    }
                    const fr = new FileReader()
                    fr.readAsDataURL(files[0])
                    fr.addEventListener('load', () => {
                        this.imageUrl = fr.result
                        this.imageFile = files[0] // this is an image file that can be sent to server...
                    })
                } else {
                    this.imageName = ''
                    this.imageFile = ''
                    this.imageUrl = ''
                }
            }
        }
    }
</script>

<style scoped>
    .register {
        position: relative;
        width: 600px !important;
        position: fixed !important;
        top: 10% !important;
        left: 50% !important;
        margin-left: -300px !important;
        /* margin-top:-400px !important; */
        overflow: visible;
    }
</style>