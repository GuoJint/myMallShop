const routes = [
    {
        path:'/',
        name:'home',
        component: () => import('../pages/home.vue'),
        redirect:'/index',
        children:[
            {
                path:'/index',
                name:'index',
                component: () => import('../pages/index.vue')
            },
            {
                path:'/detail/:id',
                name:'detail',
                component: () => import('../pages/detail.vue')
            },
            {
                path:'/product/:id',
                name:'product',
                component: () => import('../pages/product.vue')
            },
        ]
    },
    {
        path:'/cart',
        name:'cart',
        component: () => import('../pages/cart.vue')
    },
    {
        path:'/order',
        name:'order',
        component: () => import('../pages/order.vue'),
        children:[
            {
                path:'list',
                name:'order-list',
                component: () => import('../pages/orderList.vue')
            },
            {
                path:'confirm',
                name:'order-confirm',
                component: () => import('../pages/orderConfirm.vue')
            },
            {
                path:'pay',
                name:'order-pay',
                component: () => import('../pages/orderPay.vue')
            },
            {
                path:'alipay',
                name:'alipay',
                component: () => import('../pages/aliPay.vue')
            }
        ]
    },
    {
        path : '/login',
        name : 'login',
        component: () => import('../pages/login.vue')
    },
    {
        path : '/register',
        name : 'register',
        component: () => import('../pages/register.vue')
    },
    {
        path : '*',
        name : '404-not-found',
        component: () => import('../pages/404NotFound.vue')
    }
]
export default routes