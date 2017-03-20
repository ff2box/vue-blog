import Vue from 'vue'
import Router from 'vue-router'

//路由懒加载
const Home = resolve=>require(['@/components/home/index.vue'], resolve);
const About = resolve=>require(['@/components/about/index.vue'], resolve);
const Article = resolve=>require(['../components/article/index.vue'], resolve);
const ArticleDetail = resolve=>require(['../components/article/detail.vue'], resolve);
const Search = resolve=>require(['../components/search/index.vue'], resolve);
Vue.use(Router)

var routerMap = {
    mode: 'hash',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path:'/article',
            name:'Article',
            component:Article
        },
        {
            path:'/article/detail',
            name:'ArticleDetail',
            component:ArticleDetail
        },
        {
            path:'*',
            redirect:'/'
        }
    ]
}
export default new Router(routerMap);