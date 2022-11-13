<template>
  <div class="notes">

   <AddEditNote
    v-model="newNoteContent"
    label="Add New Note"
    placeholder="add new note"
    ref="addEditNoteRef"
   >
    <template #button>
      <button
          @click="addNote" 
          class="inline-flex items-center float-right px-3 py-2 mr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Add Note
      </button>

    </template>
   </AddEditNote>
    <div v-if="!storeNotes.notesLoaded" class="container relative w-full max-w-screen-lg mx-auto mt-5 mb-4 rounded continer bg-gray-light sm:w-1/2">
      <div style="width: 100%" class="absolute top-0 h-4 rounded shim-blue"></div>
    </div>
    
    <template v-else>
      <Note
      v-for="note in storeNotes.notes" 
      :key="note.id" 
      :note="note"
      />

      <div
      class="m-auto mt-20 text-6xl font-bold text-center text-white/80 font-italic " 
      v-if="!storeNotes.notes.length"
      
      >
       <h2 class="font-sans">No notes here yet...</h2> 
      </div>
    </template>
    
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
  import { useWatchCharacters } from '../composables/use/useWatchCharacters'
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
  /*
  watcher characters
*/
useWatchCharacters(newNoteContent, 50)

</script>


<style scoped>
.shim-blue {
  position: relative;
  overflow: hidden;
  background-color: rgba(18, 47, 239, 0.7);
}
.shim-blue::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(233, 233, 233, 1) 0,
    rgba(233, 233, 233, 0.9) 50%,
    rgba(233, 233, 233, 0.8) 100%
  );
  animation: shimmer 1.5s ease-out infinite;
  content: "";
}

@keyframes shimmer {
  100% {
    transform: translateX(0%);
    opacity: 0;
  }
}
</style>
