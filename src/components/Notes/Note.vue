<template>
    <div
    class="container max-w-screen-lg p-5 mx-auto mt-3 rounded-md bg-secondary">
      <div class="p-6 mt-2 bg-white border border-gray-200 rounded-lg shadow-md max-w dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ note.content }}</p>
        <small class="flex justify-end">{{ noteCharacter }}</small>
        <div class="flex justify-between w-full">          
            <RouterLink :to="`/editNote/${note.id}`" class="inline-flex items-center justify-center w-full px-3 py-2 mr-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Edit
            </RouterLink>
            <button 
            @click.prevent="storeNotes.deleteNote(note.id)"
            type="button" 
            class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Delete
            </button>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
/*
    import 
*/
    import { computed, reactive } from "vue"
    import { useStoreNotes } from "@/stores/storeNotes";
    
/*
    Store
*/
    const storeNotes = useStoreNotes()
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
    const noteCharacter =  computed(() => {
        let contentlength = props.note.content.length,
            description = contentlength > 1 ? 'characters' : 'character'
             
        return `${contentlength} ${description}`
    })



</script>

