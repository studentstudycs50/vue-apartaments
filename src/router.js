import VueRouter from 'vue-router';
import HomePage from './pages/HomePage';
import ApartmentPage from './pages/ApartmentPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home-page'
    },
    {
        path: '/apartments/:id',
        component: ApartmentPage,
        name: 'apartment'
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'login-page'
    },
    {
        path: '/registration',
        component: RegistrationPage,
        name: 'registration-page'
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