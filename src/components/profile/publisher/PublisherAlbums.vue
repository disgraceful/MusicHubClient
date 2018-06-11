<template>
  <v-card flat>
      <v-card-title>
          <div>
              <div class="headline">Albums</div>
          </div>
      </v-card-title>
       <v-container fluid grid-list-xl>
            <v-layout row wrap>
                <v-flex xs2 v-for="album in albums" :key="album.name">
                    <mh-album :album="album"></mh-album>
                </v-flex>
            </v-layout>
        </v-container>
  </v-card>
</template>
<script>
  import Album from '../../shared/AlbumPreview'
    export default {
        data() {
            return {
                albums: '',
            };
        },
        components: {
            'mh-album': Album
        },
        mounted() {
            this.$http.get('http://localhost:8888/account/publisher', {
                    headers: {
                        'Authorization': this.$cookie.get('user-token')
                    }
                })
                .then(response => {
                    this.$http.get('http://localhost:8888/publisher/' + response
                            .body.id + '/author', {
                                headers: {
                                    'Authorization': this.$cookie.get('user-token')
                                }
                            })
                        .then(response => {
                            this.$http.get('http://localhost:8888/author/' + response
                                    .body.id + '/albums', {
                                        headers: {
                                            'Authorization': this.$cookie.get('user-token')
                                        }
                                    })
                                .then(response => {
                                    this.albums = response.body;
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
    }
</script>

