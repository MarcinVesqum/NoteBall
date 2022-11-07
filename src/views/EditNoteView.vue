<template>
  <div>
    <AddEditNote
      v-model="editContent"
      bgColor="primary"
      label="Edit Content Note"
      placeholder="Edit Content"
      
    >
      <template #button>
        <button
        @click="handleSaveNote"
        :disabled="!editContent"  
         class="inline-flex items-center float-right px-3 py-2 mr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Save Note</button>
        <button
          @click="router.push('/')"
         class="inline-flex items-center float-right px-3 py-2 mr-4 text-sm font-medium text-center text-primary bg-white rounded-lg hover:bg-gray-light focus:ring-4 focus:outline-none focus:ring-blue-300">
          Cencle
        </button>

      </template>
    </AddEditNote>
  </div>
    
</template>
  
<script setup lang="ts">
import  AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

/*
  route
*/
  const route = useRoute()
  const router = useRouter()
/*
  Store 
*/
  const storeNotes = useStoreNotes()

/*
  Edit note Date
*/

  const editContent = ref('')
  editContent.value = storeNotes.getNoteContent(route.params.id)
/*
  Save Note Handler
*/
  const handleSaveNote = () => {
    storeNotes.updateNote(route.params.id, editContent.value)
    router.push('/')
  }

</script>
  