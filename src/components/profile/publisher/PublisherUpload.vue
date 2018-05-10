<template>
    <v-layout row style="padding-top:20px">
        <v-btn color="white" round @click.stop="dialog2 = true">Upload Song</v-btn>
        <v-btn color="primary" round @click.stop="dialog3 = true">Create Album</v-btn>
        <v-dialog persistent v-model="dialog2" max-width="500px">
            <v-card>
                <v-container>
                    <v-card-title>
                        <div class="title">Upload song</div>
                    </v-card-title>
                    <v-card-text>
                        <v-form color="white" round v-model="valid">
                            <v-layout row>
                                <v-btn>Upload file</v-btn>
                                <v-container>
                                    <div> Your uploaded file_name.mp3</div>
                                </v-container>
                            </v-layout>
                            <v-select :items="select" label="Choose album" item-value="text"></v-select>
                            <v-text-field label="Rename song" v-model="login" :rules="loginRules" required></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
                        <v-btn color="primary" flat @click.native="dialog2 = false">Save</v-btn>
                    </v-card-actions>
                </v-container>
            </v-card>
        </v-dialog>
        <v-dialog scrollable v-model="dialog3" max-width="500px">
            <v-card>

                <v-card-title>
                    <div class="title">Create Album</div>
                </v-card-title>
                <v-divider></v-divider>

                <v-card-text>
                    <v-container style="padding-top:0px">
                        <v-layout row>
                            <v-container>
                                <img src="http://via.placeholder.com/150x150" height="150px" />
                            </v-container>
                            <v-container>
                                <img src="http://via.placeholder.com/150x150" height="100px" />
                            </v-container>
                            <v-container>
                                <img src="http://via.placeholder.com/150x150" height="50px" />
                            </v-container>
                        </v-layout>
                        <v-layout>
                            <v-btn>Upload image</v-btn>
                        </v-layout>
                    </v-container>
                    <v-container>
                        <v-form color="white" round v-model="valid">
                            <v-text-field label="Album name" v-model="login" :rules="loginRules" required></v-text-field>
                            <v-layout row justify-space-between>
                                <v-flex xs5>
                                    <v-select :items="select" label="Genre" item-value="text"></v-select>
                                </v-flex>
                                <v-flex xs5>
                                    <v-select :items="select" label="Year" item-value="text"></v-select>
                                </v-flex>
                            </v-layout>
                            <v-btn>Upload songs</v-btn>
                            <v-container v-for="i in 10" :key="i">
                                <div> Your uploaded file_name{{i}}.mp3</div>
                            </v-container>
                        </v-form>
                    </v-container>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="primary" flat @click.stop="dialog3=false">Close</v-btn>
                    <v-btn color="primary" flat @click.native="dialog3 = false">Save</v-btn>
                </v-card-actions>

            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    export default {
        data() {
            return {
                login: "your uploaded file_name",
                dialog2: false,
                dialog3: false,
                checkbox: false,
                select: [{
                        text: 'State 1'
                    },
                    {
                        text: 'State 2'
                    },
                    {
                        text: 'State 3'
                    },
                    {
                        text: 'State 4'
                    },
                    {
                        text: 'State 5'
                    },
                    {
                        text: 'State 6'
                    },
                    {
                        text: 'State 7'
                    }
                ]
            }
        }
    }
</script>