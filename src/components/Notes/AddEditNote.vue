import { default } from '../../composables/useTailwindConfig';
<template>
  <div :class="`bg-${bgColor}`"  class="container h-[250px] mx-auto max-w-screen-lg rounded-md  shadow-md mt-2 ">
    <div class="flex flex-col justify-center p-5">
      <label class="block mb-2 text-sm text-white font-medium text-gray-900">{{ label }}</label>
      <textarea 
      v-model="modelValue"
      @input="$emit('update:modelValue', modelValue)"
      :placeholder="placeholder"
      
      rows="4"
      class="block max-h-[120px] p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    
    </textarea>
    </div>
    <slot name="button"></slot>
  </div>
</template>

<script setup lang="ts">
/*
  props
*/
  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: 'secondary'
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  })
/*
  emits
*/
  const emit = defineEmits(['modelValue'])


  
</script>

