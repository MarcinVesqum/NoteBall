import { defineStore } from 'pinia'


export const useStoreNotes = defineStore('storeNotes', {
    state: () => ({
        notes: [
            {
                id: 'id1',
                content: 'asdasdsadsad'
            }
        ]
    }),
    actions: {
        addNote(noteContent) {
            console.log(this.notes, noteContent);
            let currentDate = new Date().getTime(),
                id = currentDate.toString()
            let note = {
                id,
                content: noteContent
            }
            this.notes.unshift(note)
        },
        deleteNote(idToDelete) {
            this.notes = this.notes.filter(note => note.id !== idToDelete)
        }
    }
})