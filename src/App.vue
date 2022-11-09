<template>
  <Navigation/>
  <div class="">
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import  Navigation from './components/Navigation.vue';
import { useStoreNotes } from './stores/storeNotes';
import { onMounted } from 'vue';
  /*
  store
*/
  const storeNotes = useStoreNotes()

  /*
  mounted
*/
  onMounted(() => {
    storeNotes.getNotes()
  })
</script>

