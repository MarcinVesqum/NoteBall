import { defineStore } from 'pinia'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebase.ts'
// Store
import { useStoreNotes } from '../stores/storeNotes'

// Router
import { useRouter } from "vue-router"



const router = useRouter()

export const useStoreAuth = defineStore('storeAuth', {
    state: () => {
        return {
            user: {}
        }
    },
    actions: {
        signup(credentials: object) {
            createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then(userCredentials => {
                    const user = userCredentials.user
                   
                }).catch((error)=>{
                   console.log(error.message)
                })
        },
        login(credentials: object) {
            signInWithEmailAndPassword(auth, credentials.email, credentials.password)
                .then((userCredentials) => {
                    const user = userCredentials.user
                }).catch((error) => {
                    console.log(error.message);
                })
                
        },
        logout() {
            signOut(auth).then(() => {

            }).catch((error) => {
                console.log(error.message);
            })
        },
        init() {
            onAuthStateChanged(auth, (user) => {
                const storeNotes = useStoreNotes()
                if (user) {
                  this.user.id = user.uid
                  this.user.email = user.email
                  this.router.push('/')
                  storeNotes.init()
                } else {
                  this.user = {}
                  this.router.replace('/auth')
                  storeNotes.clearNotes()
                }
            })
        }
    }
})