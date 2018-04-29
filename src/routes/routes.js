import Home from '../components/main_content/Home.vue'
import HomeContent from '../components/main_content/HomeContent.vue'
import NewContent from '../components/main_content/NewContent.vue'
import TopContent from '../components/main_content/TopContent.vue'
import TrendingContent from '../components/main_content/TrendingContent.vue'
import Recommeded from '../components/recommendations/Recommended.vue'

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

    }


];