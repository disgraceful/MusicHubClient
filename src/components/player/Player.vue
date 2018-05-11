<template>
    <div id="player">
        <v-card tile>
            <v-container pa-0 style="height:75px">
                <v-progress-linear height="3" :value="50" class="my-0"></v-progress-linear>
                <v-layout row>
                    <v-flex shrink>
                        <v-container pa-0 fill-height>
                            <v-btn icon @click="prev()">
                                <v-icon>fast_rewind</v-icon>
                            </v-btn>
                        </v-container>
                    </v-flex>
                    <v-flex shrink>
                        <v-container pa-0 fill-height>
                            <v-btn icon @click="play(songs[currentIndex])">
                                <v-icon large>{{playing?'pause':'play_arrow'}}</v-icon>
                            </v-btn>
                        </v-container>
                    </v-flex>
                    <v-flex shrink>
                        <v-container pa-0 fill-height>
                            <v-btn icon @click="next()">
                                <v-icon>fast_forward</v-icon>
                            </v-btn>
                        </v-container>
                    </v-flex>
                    <v-flex shrink>
                        <v-container pa-0 fill-height style="height:75px">
                            <img src="http://via.placeholder.com/55x55" width="55px" height="55px" />
                        </v-container>
                    </v-flex>
                    <v-card-title>
                        <div class="text-xs-left" style="width:80px">
                            <div class="text--black">{{currentSong.name}}</div>
                            <div class="grey--text">{{currentSong.author}}</div>
                        </div>
                    </v-card-title>
                    <v-flex shrink>
                        <v-container pa-0 fill-height>
                            <v-btn icon>
                                <v-icon>favorite_border</v-icon>
                            </v-btn>
                        </v-container>
                    </v-flex>
                    <v-flex shrink>
                        <v-container pa-0 fill-height>
                            <v-dialog v-model="playlistDialog" max-width="290">
                                <v-btn icon slot="activator">
                                    <v-icon>add</v-icon>
                                </v-btn>
                                <mh-add-dialog :dialog="playlistDialog"></mh-add-dialog>
                            </v-dialog>
                        </v-container>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex shrink>
                        <v-container pa-0 fill-height>
                            <v-btn icon>
                                <v-icon>shuffle</v-icon>
                            </v-btn>

                        </v-container>
                    </v-flex>
                    <v-flex shrink>
                        <v-container pa-0 fill-height>
                            <v-btn icon>
                                <v-icon>repeat</v-icon>
                            </v-btn>
                        </v-container>
                    </v-flex>
                    <v-flex shrink>
                        <v-container pa-0 fill-height>
                            <v-btn icon>
                                <v-icon>volume_up</v-icon>
                            </v-btn>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-container>


        </v-card>
    </div>
</template>

<script>
import AddToPlaylist from './AddToPlaylistDialog'
    export default {
        data() {
            return {
                playlistDialog: false,
                songs: [{
                        name: "Kill Yourself",
                        author: "Suicide Boys",
                        duration: "3:01",
                        url: '../../../music/JohnCenaMyTimeIsNow.mp3',
                        image: "http://via.placeholder.com/350x150"
                    },
                    {
                        name: "Dead Inside",
                        author: "Arch Enemy",
                        duration: "4:02",
                        url: '../../../music/TaylorSwiftEyesOpen.mp3',
                        image: "http://via.placeholder.com/350x150"
                    },
                    {
                        name: "Retard Whore",
                        author: "Demented We Go",
                        duration: "2:03",
                        url: '../../../music/EminemBeautifulPain.mp3',
                        image: "http://via.placeholder.com/350x150"
                    }
                ],
                playing: false,
                currentSong: {
                    name: " ",
                    author: " ",
                    duration: "",
                    url: ''

                },
                currentAudio: null,
                currentIndex: 0,
            }
        },
        methods: {
            play(song) {
                console.log(this.currentSong);
                if (!this.currentSong.url) {
                    this.currentSong = song;
                    this.currentAudio = new Audio(this.currentSong.url);
                }
                console.log(this.currentSong.url);
                if (!this.playing) {
                    this.currentAudio.play();
                    this.playing = true;
                } else {
                    this.currentAudio.pause();
                    this.playing = false;
                }
            },
            next() {
                if (this.currentIndex < this.songs.length - 1) {
                    this.currentIndex++;
                    this.currentAudio.pause();
                    this.currentSong = this.songs[this.currentIndex];
                    this.currentAudio = new Audio(this.currentSong.url);
                    this.playing = true;
                    this.currentAudio.play();
                }
            },
            prev() {
                if (this.currentIndex <= 0) {
                    return;
                }
                this.currentIndex--;
                this.currentAudio.pause();
                this.currentSong = this.songs[this.currentIndex];
                this.currentAudio = new Audio(this.currentSong.url);
                this.playing = true;
                this.currentAudio.play();
            },
            fav() {

            },
            add() {

            }

        },components:{
            'mh-add-dialog':AddToPlaylist
        }
    }
</script>

<style scoped>
    #player {
        position: fixed;

        bottom: 0;
        width: 70%;
        margin-left: 15%;
        margin-right: 15%;
    }
</style>