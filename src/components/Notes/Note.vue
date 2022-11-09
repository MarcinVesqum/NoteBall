<template>
    <div 
    class="container max-w-screen-lg p-5 mx-auto mt-3 rounded-md bg-secondary">
      <div class="container p-6 mt-2 bg-white border border-gray-200 rounded-lg shadow-md max-w dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ note.content }}</p>
        <div class="flex justify-between mb-2">
            
            <small class="text-gray-light">{{ dateFormatted }}</small>
            <small class="text-gray-light">{{ characterLength }}</small>
        </div>
        <div class="flex justify-between w-full">          
            <RouterLink :to="`/editNote/${note.id}`" class="inline-flex items-center justify-center w-full px-3 py-2 mr-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Edit
            </RouterLink>
            <button 
            @click.prevent="modals.deleteNotes = true"
            type="button" 
            class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Delete
            </button>
            
        </div>
      </div>
      
      <teleport to='body'>
        <ModalDeleteNoteVue
        v-if="modals.deleteNotes"
        v-model="modals.deleteNotes"
        :noteId="note.id"
      />
      </teleport>
     
    </div>

    
</template>

<script setup lang="ts">
    /*
    import 
*/
    import { computed, reactive } from "vue"
    import ModalDeleteNoteVue from "./ModalDeleteNote.vue";
    import { useDateFormat } from '@vueuse/core';
    /*
    porps
*/
    const props = defineProps({
        note: {
            type: Object,
            required: true
        },
    })
    
    /*
    count characters
*/
    const characterLength =  computed(() => {
        let contentlength = props.note.content.length,
            description = contentlength > 1 ? 'characters' : 'character'
             
        return `${contentlength} ${description}`
    })

    const modals  = reactive({
        deleteNotes: false,
    })

    /*
    Format current date
*/

    const dateFormatted = computed(() => {
        let date = new Date(parseInt(props.note.date)),
            formattedDate = useDateFormat(date, 'YYYY-MM-DD HH:mm:ss')
        return formattedDate.value
    })
        



</script>

