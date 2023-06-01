<template>
    <navbar-component></navbar-component>
<div class="flex justify-center items-center">
        
<form class=" w-3/4 sm:w-2/4 mt-20">
    <h1 class="text-xl sm:text-3xl mb-4 font-bold" >Set Timer Ganti Air</h1>
  <div class="mb-6">
    <label for="timer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set Timer 1</label>
    <input type="datetime-local" id="timer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5  sm:text-xl py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
    export default {
        name: 'TimerPakanbView',
        components:{
            NavbarComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>