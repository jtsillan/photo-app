import { createRouter, createWebHistory } from 'vue-router'
import PublicationViewAll from './components/publication/PublicationViewAll.vue'
import UsersView from './components/user/UsersView.vue'
import PublicationCreate from './components/publication/PublicationCreate.vue'
import PublicationViewDetails from './components/publication/PublicationViewDetails.vue'
import RegistrationView from './components/registration/RegistrationView.vue'

// dynamic route matching, vuen dokumentaatio
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Julkaisut',
            component: PublicationViewAll
        },
        {
            path: '/users',
            name: 'Käyttäjät',
            component: UsersView
        },
        {
            path: '/create',
            name: 'Julkaise',
            component: PublicationCreate
        },
        {
            path: '/publication/:publicationId',
            props: true,
            name: 'Yksittäinen postaus',
            component: PublicationViewDetails
        },
        {
            path: '/register',
            name: 'Kirjaudu',
            component: RegistrationView //UserCreate 
        }
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView()
    }
})