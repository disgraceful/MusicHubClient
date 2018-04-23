import Home from './components/main_content/HomeContent.vue'
import New from './components/main_content/NewContent.vue'
import Top from './components/main_content/TopContent.vue'
import Trending from './components/main_content/TrendingContent.vue'

export const routes = [{
        path: '/home',
        component: Home
    },
    {
        path: '/new',
        component: New
    },
    {
        path: '/top',
        component: Top
    },
    {
        path: '/trending',
        component: Trending
    }
];