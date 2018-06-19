<template>
    <div class="player">
      
        <v-card>
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
                    <div class="text-xs-left" style="width:180px">
                        <div class="text--black">{{currentSong.name}}</div>
                        <div class="grey--text">{{currentSong.authorName}}</div>
                    </div>
                </v-card-title>
                <v-flex shrink>
                    <v-container pa-0 fill-height>
                        <v-btn icon @click="favorited=!favorited">
                            <v-icon color="red">
                                {{ favorited ? 'favorite' : 'favorite_border' }}
                            </v-icon>
                        </v-btn>
                    </v-container>
                </v-flex>
                <v-flex shrink>
                    <v-container pa-0 fill-height>
                        <v-dialog v-model="playlistDialog" max-width="290">
                            <v-btn icon slot="activator">
                                <v-icon>add</v-icon>
                            </v-btn>
                            <mh-add-dialog :dialog="playlistDialog" :song="currentSong"></mh-add-dialog>
                        </v-dialog>
                    </v-container>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex shrink>
                    <v-container pa-0 fill-height>
                        <v-btn icon @click="shuffled=!shuffled" :class="{active:shuffled}">
                            <v-icon :class="{active:shuffled}">shuffle</v-icon>
                        </v-btn>
                    </v-container>
                </v-flex>
                <v-flex shrink>
                    <v-container pa-0 fill-height>
                        <v-btn icon @click="turnRepeat" :class="{active:repeat||repeatOne}">
                            <v-icon> {{ repeatOne ? 'repeat_one' : 'repeat' }}</v-icon>
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
    import {
        eventBus
    } from '../../main.js'
    export default {
        data() {
            return {
                songs: [],
                playlistDialog: false,
                favorited: true,
                shuffled: false,
                repeat: false,
                repeatOne: false,
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
        computed: {
            text() {
                return 'Song was added to Playlist'
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
                window.localStorage.setItem('songIndex', this.currentIndex);
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
            turnRepeat() {
                console.log(this.repeat + ' ' + this.repeatOne)
                if (!this.repeat) {
                    if (!this.repeatOne) {
                        this.repeat = true;
                        console.log(this.repeat + ' ' + this.repeatOne);
                        return;
                    }
                }
                if (this.repeat) {
                    this.repeat = false;
                    this.repeatOne = true;
                    return;
                }
                if (this.repeatOne) {
                    this.repeatOne = false;
                    this.repeat = false;
                    return;
                }
            },
            getDuration(duration) {
                var a = duration.split(':');
                return ((+a[0]) * 60 + (+a[1]));
            },
        },
        components: {
            'mh-add-dialog': AddToPlaylist,
        },
        created() {
            eventBus.$on('playStarted', (songs) => {
                this.songs = songs;
                this.play(this.songs[0]);
                window.localStorage.setItem('queue', JSON.stringify(this.songs));
                window.localStorage.setItem('songIndex', 0);
            })
        },
        mounted() {
            var queue = JSON.parse(window.localStorage.getItem('queue'));
            if (!queue) {
                return;
            }
            this.currentIndex = window.localStorage.getItem('songIndex');
            console.log(this.currentIndex);
            this.songs = queue;
            this.currentSong = queue[this.currentIndex];
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

    .active {
        color: orange;
    }

    .volumebar {
        width: 100px;
        position: fixed;
        bottom: 76px;
        right: 15%;
        height: 30px;
        background-color: white;
    }

    .input-group.input-group--slider {
        padding: 5px;
    }
</style>