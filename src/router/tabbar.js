const Index = () => import('../views/Index/Index.vue')
const Cart = () => import('../views/Cart/Cart.vue')
const Category = () => import('../views/Category/Category.vue')
const Profile = () => import('../views/Profile/Profile.vue')
export default [
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]
