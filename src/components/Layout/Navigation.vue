<template>   
<nav 
  class="bg-primary border-gray-200 px-2 sm:px-4 py-2.5  text-white relative"
  ref="navbarMenuRef"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <RouterLink :to="{ name: 'notes'}" class="flex items-center">
          <span class="self-center text-xl font-semibold ">NoteBalls</span>
      </RouterLink>
      
      <button 
      @click.prevent="showMobileMenu"
      aria-expanded="false"
      aria-label="menu"
      ref="navbarBurgerRef"
       type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <!-- Mobie menu -->
      <transition name="mobile">
        <div v-if="mobileMenu" class="absolute left-[-9px] block w-full p-2 m-2 mt-2 top-[87%] bg-primary-light md:hidden z-10">
          <ul class="flex flex-col ">
              <RouterLink @click="showMobileMenu" class="font-bold hover:bg-secondary" :to="{ name: 'notes'}">Notes</RouterLink>
              <RouterLink @click="showMobileMenu" class="font-bold hover:bg-secondary" :to="{ name: 'stats'}">Stats</RouterLink>
              <button
                v-if="storeAuth.user.id"
                @click.prevent="handleLogout" 
                type="button" 
                class="flex flex-col items-center justify-center font-bold hover:bg-secondary">
                <small>
                  Singout {{ storeAuth.user.email }}
                </small>  
              </button>
          </ul>
        </div>
      </transition>
      
      <!-- Desktop menu-->
      <div class="items-center hidden w-full md:flex md:w-auto">

          <button
            v-if="storeAuth.user.id"
            @click.prevent="handleLogout" 
            class="w-full px-2 py-2 ml-2 font-bold text-center border rounded-full hover:scale-105 hover:bg-white hover:text-secondary hover:border-transparent focus:text-secondary focus:outline-none focus:bg-white" 
            :class="useTailwindConfig">
            Singout {{ storeAuth.user.email}}
          </button>

        <ul class="flex p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:text-sm md:border-0">
            <RouterLink active-class="active" class="font-bold xl:text-xl " :to="{ name: 'notes'}">Notes</RouterLink>
            <RouterLink active-class="active" class="font-bold xl:text-xl " :to="{ name: 'stats'}">Stats</RouterLink>
        </ul>
        
      </div>
    </div>
  </nav>
  
</template>

<script setup lang="ts">
  /*
    imports
*/
    import { ref } from 'vue'
    import { onClickOutside } from '@vueuse/core'
    import useTailwindConfig from '@/composables/use/useTailwindConfig'
    import { useStoreAuth } from '@/stores/storeAuth'
  /*
  store auth
*/
  const storeAuth = useStoreAuth()
  /*
    mobile
*/
    const mobileMenu = ref(false)

    const showMobileMenu = () => {
        mobileMenu.value = !mobileMenu.value
    }
  /*
    click outside to close 
*/
    const navbarMenuRef = ref(null)
    const navbarBurgerRef = ref(null)

    onClickOutside(navbarMenuRef, () => {
      mobileMenu.value = false
    }, {
      ignore: [
        navbarBurgerRef
      ],
    })
/*
    handle logout
*/
    const handleLogout = () => {
      storeAuth.logout()
    }
    
</script>

<style >
.active {
    color: #A18700;
}

.mobile-enter-from,
.mobile-leave-to {
  opacity: 0;
}

.mobile-enter-active,
.mobile-leave-active {
  transition: all .8s ease;
}

.mobile-enter-to,
.mobile-leave-from {
  opacity: 1;
}
</style>


