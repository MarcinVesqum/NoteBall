<template>
  <Navigation/>
  <div>
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import  Navigation from './components/Layout/Navigation.vue'
import { useStoreAuth } from './stores/storeAuth'
import { onMounted } from 'vue'
  /*
  store
*/

  const storeAuth = useStoreAuth()

  /*
  mounted
*/
  onMounted(() => {
    storeAuth.init()
  })


  
</script>

