module.exports = [
    {
        path: '/index.html',
        name: 'index',
        meta: {
            title: '首页',
            author: '--',
            parentRouter: '--'
        },
        component: () => import('../views/index.vue')
    },
    {
        path: '/login_web',
        name: 'login_web',
        meta: {
            title: '登陆页面',
            author: '--',
            parentRouter: '--'
        },
        component: () => import('../views/web/login_web.vue'),
        children: []
    },{
        path: '/login_app',
        name: 'login_app',
        meta: {
            title: '登陆页面',
            author: '--',
            parentRouter: '--'
        },
        component: () => import('../views/app/login_app.vue'),
        children: []
    },
    {
        path: '/home.html',
        name: 'home',
        meta: {
            title: 'home页',
            author: '--',
            parentRouter: '--'
        },
        component: () => import('../views/home.vue'),
        children: []
    },
    {
        path: '/order.html',
        name: 'order',
        meta: {
            title: '订单页',
            author: '--',
            parentRouter: '--'
        },
        component: () => import('../views/order.vue'),
        children: []
    }
];
