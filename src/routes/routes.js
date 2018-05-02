import Home from '../components/main_content/Home.vue'
import HomeContent from '../components/main_content/HomeContent.vue'
import NewContent from '../components/main_content/NewContent.vue'
import TopContent from '../components/main_content/TopContent.vue'
import TrendingContent from '../components/main_content/TrendingContent.vue'
import Recommeded from '../components/recommendations/Recommended.vue'
import Consumer from '../components/profile/consumer/Consumer.vue'
import ConsumerFavTracks from '../components/profile/consumer/ConsumerTracks.vue'
import ConsumerFavAlbums from '../components/profile/consumer/ConsumerAlbums.vue'
import ConsumerFavArtists from '../components/profile/consumer/ConsumerArtists.vue'
import ConsumerFavPlaylists from '../components/profile/consumer/ConsumerPlaylists.vue'
import ConsumerFavHistory from '../components/profile/consumer/ConsumerHistory.vue'
import Artist from '../components/artist/Artist.vue'
import ArtistTracks from '../components/artist/ArtistTracks.vue'
import ArtistAlbums from '../components/artist/ArtistAlbums.vue'
import ArtistGeneral from '../components/artist/ArtistGeneral.vue'
import ArtistSimilar from '../components/artist/ArtistSimilar.vue'
import Album from '../components/albums/Album.vue'
import Login from '../components/login/Login.vue'
import RegisterConsumer from '../components/login/RegisterConsumer.vue'
import RegisterPublisher from '../components/login/RegisterPublisher.vue'

export const routes = [{
    path: '/',
    component: Home,
    children: [{
        path: 'home',
        component: HomeContent,
        name: 'Home'
    }, {
        path: 'new',
        component: NewContent,
        name: 'New'
    }, {
        path: 'top',
        component: TopContent,
        name: 'Top'
    }, {
        path: 'trending',
        component: TrendingContent,
        name: 'Trending'
    }]
}, {
    path: '/recommended',
    component: Recommeded,
    name: 'Recommended'
}, {
    path: '/user/:id',
    component: Consumer,
    name: 'Consumer',
    children: [{
        path: 'tracks',
        component: ConsumerFavTracks,
        name: 'ConsumerTracks'
    }, {
        path: 'albums',
        component: ConsumerFavAlbums,
        name: 'ConsumerAlbums'
    }, {
        path: 'artists',
        component: ConsumerFavArtists,
        name: 'ConsumerArtists'
    }, {
        path: 'playlists',
        component: ConsumerFavPlaylists,
        name: 'ConsumerPlaylists'
    }, {
        path: 'history',
        component: ConsumerFavHistory,
        name: 'ConsumerHistory'
    }]
}, {
    path: '/artist/:id',
    component: Artist,
    children: [{
        path: '',
        component: ArtistGeneral,
        name: 'ArtistGeneral'
    }, {
        path: 'tracks',
        component: ArtistTracks,
        name: 'ArtistTracks'
    }, {
        path: 'albums',
        component: ArtistAlbums,
        name: 'ArtistAlbums'
    }, {
        path: 'similar',
        component: ArtistSimilar,
        name: 'ArtistSimilar'
    }]
}, {
    path: '/albums/:id',
    component: Album,
    name: 'Album'
}, {
    path: '/login',
    component: Login,
    name: 'Login'
}, {
    path: '/register',
    component: RegisterConsumer,
    name: 'RegisterConsumer'
}, {
    path: '/register/publisher',
    component: RegisterPublisher,
    name: 'RegisterPublisher'
}];