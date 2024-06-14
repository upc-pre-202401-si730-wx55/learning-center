import {createRouter, createWebHistory, Router } from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import TutorialManagementComponent from "../learning/pages/tutorial-management.component.vue";
import SignInComponent from "../iam/pages/sign-in.component.vue";
import SignUpComponent from "../iam/pages/sign-up.component.vue";
import {titleBrandingGuard} from "../shared/services/title-branding.guard.js";
import {authenticationGuard} from "../iam/services/authentication.guard.js";

/**
 * Router
 * @summary
 * The router is responsible for managing the application's navigation.
 * @type {Router}
 */
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', name: 'home', component: HomeComponent, meta: { title: 'Home'}},
        { path: '/tutorials', component: TutorialManagementComponent, meta: { title: 'Tutorials' } },
        { path: '/about', component: AboutComponent, meta: { title: 'About us'}},
        { path: '/sign-in', name: 'sign-in', component: SignInComponent, meta: { title: 'Sign In'}},
        { path: '/sign-up', name: 'sign-up', component: SignUpComponent, meta: { title: 'Sign Up'}},
        { path: '/', redirect: '/home'}
    ]
});

router.beforeEach((to, from, next) => {
    // Call the title branding guard
    titleBrandingGuard(to, from, next);
    // Call the authentication guard
    authenticationGuard(to, from, next);
});

export default router;