<template>
    <v-card>
        <v-container fluid>
            <v-layout row>
                <v-flex shrink>
                    <div style="width:120px">
                        <v-avatar size="120px">
                            <img src="http://via.placeholder.com/120x120">
                        </v-avatar>
                    </div>
                    <div class="text-xs-center" style="padding-top:10px">
                        <v-btn> Change</v-btn>
                    </div>
                </v-flex>
               
                    <v-layout row style="padding-left:20px">
                        <v-flex>
                            <div class="headline"> Login</div>
                        </v-flex>
                        <v-btn> Change</v-btn>
                    </v-layout>
               
            </v-layout>

            <v-container fluid>
                <v-card flat>
                    <v-card-title>
                        <div>
                            <div class="headline">Personal information</div>
                        </div>
                    </v-card-title>
                    <v-layout row>
                        <v-container fill-height pa-0>
                            <div> Password: {{hiddenPassword}} </div>
                        </v-container>
                        <v-btn> Reset</v-btn>
                    </v-layout>
                    <v-layout row>
                        <v-container fill-height pa-0>
                            <div> Email: example@gmail.com</div>
                        </v-container>
                        <v-btn> Change</v-btn>
                    </v-layout>
                </v-card>
            </v-container>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                password: 'password'
            }
        },
        computed: {
            hiddenPassword() {
                var a = this.password.length;
                var temp = this.password.split('');
                var i;
                for (i = 0; i < a - 3; i++) {
                    temp[i] = "*"
                }
                return temp.join("")
            }
        }
    }
</script>