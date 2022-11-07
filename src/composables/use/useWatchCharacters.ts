import { watch } from 'vue'

export function useWatchCharacters(valueToWatch: strin, maxChars = 100) {
    watch(valueToWatch, (newValue) => {
        if (newValue.length === maxChars) {
          alert('Only 100 characters allowed gosh!!!')
        }
      })
}