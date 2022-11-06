<template>
    <div>
      <div class="container h-[250px] mx-auto max-w-screen-lg rounded-md bg-secondary shadow-md">
        <div class="form">
          <div class="flex flex-col justify-center p-5">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea
            rows="4" 
            class="block max-h-[120px] p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="inline-flex items-center float-right px-3 py-2 mr-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Add Note</button>
        </div>
      </div>
      
    </div>
    
  </template>
  
  <script setup lang="ts">

  </script>
  