import { defineStore } from 'pinia'
import { 
        collection, onSnapshot, 
        query, orderBy, 
        addDoc, doc, 
        deleteDoc, updateDoc
} from "firebase/firestore"
import { db } from "@/firebase/firebase.ts"
import { useStoreAuth } from "@/stores/storeAuth"

let noteCollectionRef: any,     
    noteCollectionQuery: any,
    getNotesSnapshot: any=null 

export const useStoreNotes = defineStore('storeNotes', {
    state: () => ({
        notes: [],
        notesLoaded: false
    }),
    actions: {
        init() {
            const storeAuth = useStoreAuth()
            noteCollectionRef = 
                collection(db, 'users', storeAuth.user.id, 'notes')
            noteCollectionQuery = 
                query(noteCollectionRef, orderBy('date', 'desc'))
            this.getNotes()
        },
        async getNotes() {
            this.notesLoaded = false

            if (getNotesSnapshot) getNotesSnapshot() // unsubscribe from any active listerne

            getNotesSnapshot = onSnapshot(noteCollectionQuery, (querySnapshot) => {
                let notes = []
                querySnapshot.forEach((doc) => {
                    let note = {
                        id: doc.id,
                        content: doc.data().content,
                        date: doc.data().date
                    }
                    notes.push(note);
                })
                this.notes = notes
                this.notesLoaded = true

            }, error => {
                console.log('error: ', error.message);
            });
                     
        },
        clearNotes() {
            this.notes = []
        },
        async addNote(noteContent) {
            let currentDate = new Date().getTime(),
                date = currentDate.toString()
            // let note = {
            //     id,
            //     content: noteContent
            // }
            await addDoc(noteCollectionRef, {
                content: noteContent,
                date
            })
            // 
            // this.notes.unshift(note)
        },
        async updateNote(id, content) {
            await updateDoc(doc(noteCollectionRef, id), {
                content: content
            });
        },
        async deleteNote(idToDelete) {
            // this.notes = this.notes.filter(note => note.id !== idToDelete)
            await deleteDoc(doc(noteCollectionRef, idToDelete))
        }
    },
    getters: {
        getNoteContent(state) {
            return (id) => {
                return state.notes.filter(note => note.id === id)[0].content
            }
        },
        totalNotesCount: (state) => {
            return state.notes.length
        },
        totalCharactesCount: (state) => {
            let count = 0
            state.notes.forEach(note => {
                count += note.content.length
            })
            return count
        }   
    }
})