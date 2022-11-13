<template>
    <div class="container max-w-screen-md mx-auto">
        <div class="mb-4 border-b border-gray-200">
            <ul class="flex flex-wrap justify-center -mb-px text-sm font-medium text-center">
                <li class="mr-2">
                    <button @click="register = false" :class="!register ? activeLinkAuth: ''"   class="inline-block p-4">
                        Login
                    </button>
                </li>
                <li class="mr-2" >
                    <button @click="register = true" :class="register ? activeLinkAuth : ''" 
                    class="inline-block p-4 text-gray-500 border-gray-100 rounded-t-lg border-b-1 hover:text-gray-600 hover:border-gray-300 ">
                        Register
                    </button>
                </li>
            </ul>
        </div>
        
        <!-- Form -->
        <form @submit.prevent="submitForm" class="p-3 text-white rounded-lg shadow-md bg-primary">
        
            <h2 class="my-4 font-sans text-3xl font-extrabold text-center">{{ labelAuth }}</h2>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 '">Your email</label>
                <input v-model="credentials.email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-dark text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com">
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                <input v-model="credentials.password" type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-dark text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            </div>

            <button 
                type="submit" 
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                {{ labelAuth }} 
            </button>
        </form>
        
    </div>
</template>

<script setup lang="ts">
    /*
    imports
*/
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router'
import { useStoreAuth } from "@/stores/storeAuth"
import useTailwindConfig from '@/composables/use/useTailwindConfig'
import type  Users from '@/types/Users'

    /*
    register / login
*/
    const register = ref(false)
    /*
    composables (acive link)
*/
    const { activeLinkAuth } = useTailwindConfig()


    /*
    store
*/
const storeAuth = useStoreAuth()

    /*
    form  AutData 
*/  

    const credentials: Users = reactive({
        email: '',
        password: ''
    })
    /*
    label 
*/
  const labelAuth = computed(() => {
    return !register.value ? 'Login' : 'Register'
  })

    /*
    submit
*/

    const submitForm = () => {
        if (!credentials.email || !credentials.password) {
            alert('Please enter a valid email and password')
        } else {
            if (register.value) {
                storeAuth.signup(credentials)
            } else {
                storeAuth.login(credentials)

            }
        }
    }
    
</script>

