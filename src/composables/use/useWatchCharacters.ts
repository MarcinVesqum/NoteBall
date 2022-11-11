import { watch } from 'vue'

export function useWatchCharacters(valueToWatch: string, maxChars = 100) {
    watch(valueToWatch, (newValue) => {
        if (newValue.length === maxChars) {
          alert('Only 100 characters allowed gosh!!!')
        }
      })
}