import {AuthenticationService} from "./authentication.service.js";
import {defineStore} from "pinia";
import {SignInResponse} from "../model/sign-in.response.js";
import {SignUpResponse} from "../model/sign-up.response.js";

const authenticationService = new AuthenticationService();

export const useAuthenticationStore = defineStore({
    id: 'authentication',
    state: () => ({ signedIn: false, userId: 0, username: ''}),
    getters: {
        isSignedIn: (state) => state['signedIn'],
        currentUserId: (state) => state['userId'],
        currentUsername: (state) => state['username'],
        currentToken: () => localStorage.getItem('token')
    },
    actions: {
        async signIn(signInRequest, router) {
            authenticationService.signIn(signInRequest)
                .then(response => {
                    let signInResponse = new SignInResponse(response.data.id, response.data.username, response.data.token);
                    this.signedIn = true;
                    this.userId = signInResponse.id;
                    this.username = signInResponse.username;
                    localStorage.setItem('token', signInResponse.token);
                    console.log(signInResponse);
                    router.push({name: 'home'});
                })
                .catch(error => {
                    console.error(error);
                    router.push({name: 'sign-in'});
                });
        },
        async signUp(signUpRequest, router) {
            authenticationService.signUp(signUpRequest)
                .then(response => {
                    let signUpResponse = new SignUpResponse(response.data.message);
                    console.log(signUpResponse.message);
                    this.signedIn = false;
                    this.userId = 0;
                    this.username = '';
                    localStorage.removeItem('token');
                    router.push({name: 'sign-in'});
                })
                .catch(error => {
                    console.error(error);
                    router.push({name: 'sign-in'});
                });
        },
        async signOut(router) {
            this.signedIn = false;
            this.userId = 0;
            this.username = '';
            localStorage.removeItem('token');
            router.push({name: 'sign-in'});
        }
    },

});