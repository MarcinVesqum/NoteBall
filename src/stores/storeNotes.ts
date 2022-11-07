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
        updateNote(id, content) {
            
            let index = this.notes.findIndex(note => note.id === id);

            this.notes[index].content = content
        },
        deleteNote(idToDelete) {
            this.notes = this.notes.filter(note => note.id !== idToDelete)
        }
    },
    getters: {
        getNoteContent(state) {
            return (id) => {
                return state.notes.filter(note => note.id === id)[0].content
            }
        }   
    }
})