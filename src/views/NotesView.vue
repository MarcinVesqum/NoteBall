<template>
  <div class="notes">

   <AddEditNote
    v-model="newNoteContent"
    label=""
    placeholder="add new note"
   >
    <template #button>
      <button
          @click="addNote" 
          class="inline-flex items-center float-right px-3 py-2 mr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Add Note
          </button>

    </template>
   </AddEditNote>
    
    <Note 
    v-for="note in storeNotes.notes" 
    :key="note.id" 
    :note="note"
    />
  </div>
</template>

<script setup lang="ts">
/*
  import 
*/
  import { ref } from "vue"
  import Note from "@/components/Notes/Note.vue"
  import  AddEditNote from "@/components/Notes/AddEditNote.vue"
  import { useStoreNotes } from '../stores/storeNotes'

/*
  Store
*/
  const storeNotes = useStoreNotes()
/*
  Note Data
*/

  const newNoteContent = ref('')

/*
    add Note
*/
  const addNote = () => {
    storeNotes.addNote(newNoteContent.value)
    newNoteContent.value = ''
  }



</script>
