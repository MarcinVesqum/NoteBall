<template>
    <div class="container max-w-screen-md mx-auto">
        <div class="mb-4 border-b border-gray-200">
            <ul class="flex flex-wrap justify-center -mb-px text-sm font-medium text-center">
                <li class="mr-2">
                    <RouterLink @click="register = false" :class="!register ? activeLinkAuth: ''"  to="/auth" class="inline-block p-4">
                        Login
                    </RouterLink>
                </li>
                <li class="mr-2" >
                    <RouterLink @click="register = true" :class="register ? activeLinkAuth : '' " to="/auth" 
                    class="inline-block p-4 text-gray-500 border-gray-100 rounded-t-lg border-b-1 hover:text-gray-600 hover:border-gray-300 ">
                        Register
                    </RouterLink>
                </li>

            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    /*
    imports
*/
    import { ref, computed } from 'vue';
    import useTailwindConfig from '../composables/use/useTailwindConfig'

/*
    register / login
*/

    const register = ref(false)
/*
    composables (acive link)
*/
    const { activeLinkAuth } = useTailwindConfig()


    
</script>

