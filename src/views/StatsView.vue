<template>
  <div class="overflow-x-auto relative w-full mx-auto max-w-screen-md border mt-2">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-secondary">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Stat
                </th>
                <th scope="col" class="py-3 px-6">
                    Value
                </th>

            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b :bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                    Number of Notes
                </th>
                <td class="py-4 px-6">
                    {{ storeNotes.totalNotesCount}}
                </td>

            </tr>
            <tr class="bg-white border-b">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap :t">
                    Numbers of character (of all notes)
                </th>
                <td class="py-4 px-6">
                    {{ storeNotes.totalCharactesCount }}
                </td>

            </tr>
        </tbody>
    </table>
</div>
</template>

<script setup lang="ts">
/*
  import
*/
  import { useStoreNotes }  from '@/stores/storeNotes'

/*
  store
*/
  const storeNotes = useStoreNotes()

</script>
