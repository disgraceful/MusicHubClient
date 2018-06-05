<template>
    <div class="player">
        <v-card >
                <v-progress-linear height="3" v-model="progress" class="my-0"></v-progress-linear>
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
                            <img src="http://localhost:8888/resources/ArchEnemy/RiseOfTheTyrant/Folder.jpg" width="55px" height="55px" />
                        </v-container>
                    </v-flex>
                    <v-card-title>
                        <div class="text-xs-left" style="width:120px">
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
        </v-card>
    </div>
</template>

<script>
    import AddToPlaylist from './AddToPlaylistDialog'
    export default {
        data() {
            return {
                progressBarHovered: false,
                playlistDialog: false,
                songs: [{
                        name: "I Will Live Again",
                        author: "Arch Enemy",
                        duration: "3:52",
                        //url: '../../../resource/JohnCenaMyTimeIsNow.mp3',
                        image: "http://localhost:8888/resources/ArchEnemy/RiseOfTheTyrant/Folder.jpg"
                    },
                    {
                        name: "Dead Inside",
                        author: "Arch Enemy",
                        duration: "4:02",
                        //url: '../../../resource/TaylorSwiftEyesOpen.mp3',
                        image: "http://via.placeholder.com/350x150"
                    },
                    {
                        name: "Retard Whore",
                        author: "Demented We Go",
                        duration: "2:03",
                       // url: '../../../resource/EminemBeautifulPain.mp3',
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
                currentDuration: 0,
                progress: 0,
                currentIndex: 0,
            }
        },
        methods: {
            play(song) {
                if (!this.currentAudio) {
                    this.currentSong = song;
                    this.currentAudio = new Audio(this.currentSong.url);
                    this.currentAudio.addEventListener('canplay', () => {
                        this.currentDuration = this.getDuration(this.currentSong.duration);
                    });
                    this.currentAudio.addEventListener('timeupdate', () => {
                        this.progress = Math.trunc(this.currentAudio.currentTime / this.currentDuration * 100);
                    });
                }
                this.$cookie.set('song',this.currentSong);
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
                    this.playing = false;
                    this.currentAudio = null;
                    this.play(this.songs[this.currentIndex]);
                }
            },
            prev() {
                if (this.currentIndex > 0) {
                    this.currentIndex--;
                    this.currentAudio.pause();
                    this.playing = false;
                    this.currentAudio = null;
                    this.play(this.songs[this.currentIndex]);
                }
            },
            fav() {

            },
            add() {

            },
            getDuration(duration) {
                var a = duration.split(':');
                return ((+a[0]) * 60 + (+a[1]));
            },
        },
        components: {
            'mh-add-dialog': AddToPlaylist,
        },
        mounted() {
            this.currentSong = this.songs[0];
            this.currentAudio = new Audio(this.currentSong.url);
            this.currentAudio.addEventListener('canplay', () => {
                this.currentDuration = this.getDuration(this.currentSong.duration);
            });
            this.currentAudio.addEventListener('timeupdate', () => {
                this.progress = Math.trunc(this.currentAudio.currentTime / this.currentDuration * 100);
            });
        },
    }
</script>

<style scoped>
    .player {
        position: fixed;
        bottom: 0px;
        width: 70%;
        height: 75px;
        margin-left: 15%;
        margin-right: 15%;
    }
</style>