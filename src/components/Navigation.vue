<template>   
<nav class="bg-primary border-gray-200 px-2 sm:px-4 py-2.5  text-white relative">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <RouterLink :to="{ name: 'notes'}" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap">Flowbite</span>
      </RouterLink>
      <button @click="showMobileMenu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <!-- Mobie menu -->
      <div v-if="mobileMenu" class="absolute left-[-9px] block w-full p-2 m-2 mt-2 top-[87%] bg-primary-light md:hidden">
        <ul class="flex flex-col ">
            <RouterLink @click="showMobileMenu" class="font-bold hover:bg-secondary" :to="{ name: 'notes'}">Notes</RouterLink>
            <RouterLink @click="showMobileMenu" class="font-bold hover:bg-secondary" :to="{ name: 'stats'}">Stats</RouterLink>
        </ul>
      </div>
      <!-- Desktop menu-->
      <div class="hidden w-full md:block md:w-auto">
        <ul class="flex p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:text-sm md:border-0">
            <RouterLink active-class="active" class="font-bold xl:text-5xl " :to="{ name: 'notes'}">Notes</RouterLink>
            <RouterLink active-class="active" class="font-bold xl:text-5xl " :to="{ name: 'stats'}">Stats</RouterLink>
        </ul>
        
      </div>
    </div>
  </nav>
  <div class="flex text-7xl" id="navbar-default">
    
  </div>
</template>

<script setup lang="ts">
/*
    IMPORT:
*/
    import { ref } from 'vue'
/*
    mobile
*/
    const mobileMenu = ref(false)

    const showMobileMenu = () => {
        mobileMenu.value = !mobileMenu.value
    } 
</script>

<style >
.active {
    color: #A18700;
}
</style>


