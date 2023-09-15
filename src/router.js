import VueRouter from 'vue-router';
import HomePage from './pages/HomePage';
import Apartment from './pages/Apartment';
import ErrorPage from './pages/ErrorPage';

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home-page'
    },
    {
        path: '/apartments/:id',
        component: Apartment,
        name: 'apartment'
    },
    {
        path: '*',
        component: ErrorPage,
        name: 'error-page'
    }
]

const router = new VueRouter({ 
    routes,
    mode: 'history'
});
export default router;