import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import TutorialManagementComponent from "../learning/pages/tutorial-management.component.vue";
import SignInComponent from "../iam/pages/sign-in.component.vue";
import SignUpComponent from "../iam/pages/sign-up.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', name: 'home', component: HomeComponent, meta: { title: 'Home'}},
        { path: '/tutorials', component: TutorialManagementComponent, meta: { title: 'Tutorials' } },
        { path: '/about', component: AboutComponent, meta: { title: 'About us'}},
        { path: '/sign-in', component: SignInComponent, meta: { title: 'Sign In'}},
        { path: '/sign-up', component: SignUpComponent, meta: { title: 'Sign Up'}},
        { path: '/', redirect: '/home'}
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'ACME Learning Center';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;