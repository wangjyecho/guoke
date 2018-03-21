import Vue from 'vue'
import Router from 'vue-router'
import Scientific from '../components/scientific.vue'
import Sidebar from '../components/common/sidebar.vue'
import Navbar from '../components/common/navbar.vue'
import Detail from '../components/detail.vue'
import SearchCon from '../components/searchCon.vue'
import Finish from '../components/finish.vue'
import Community from '../components/community.vue'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
    	path:'/scientific',
    	name:'scientific',
    	component:Scientific
    },
    {
        path:'/sidebar',
        name:'sidebar',
        component:Sidebar
    },
    {
    	path:'/detail/:id',
    	name:'detail',
    	component:Detail

    },
    {
    	path:'/searchCon',
    	name:'searchCon',
    	component:SearchCon
    },
    {
    	path:'/navbar',
    	name:'navbar',
    	component:Navbar
    },
    {
    	path:'/finish',
    	name:'finish',
    	component:Finish
    },
    {
    	path:'/community',
    	name:'community',
    	component:Community

    },
    {
    	path:'*',
    	redirect:'/scientific'
    }
  ]
})
