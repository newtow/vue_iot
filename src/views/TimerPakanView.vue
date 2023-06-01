<template>
    <navbar-component></navbar-component>
<div class="flex justify-center items-center">
        
<form class=" w-3/4 sm:w-2/4 mt-20">
    <h1 class="text-center text-xl sm:text-3xl mb-4 font-bold" >Set Timer Pakan</h1>
  
  <div class="mb-6">
    <label for="timer" class="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set Timer 1</label>
    <div class="flex justify-center">
    <input type="number" v-model="jam1" id="timer" class="mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    <input type="number" v-model="menit1" id="timer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
  </div>
  <div class="mb-6">
    <label for="timer" class="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set Timer 2</label>
    <div class="flex justify-center">
    <input type="number" v-model="jam2" id="timer" class="mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    <input type="number" v-model="menit2" id="timer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
  </div>
  <div class="mb-6">
    <label for="timer" class="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set Timer 3</label>
    <div class="flex justify-center">
    <input type="number" v-model="jam3" id="timer" class="mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    <input type="number" v-model="menit3" id="timer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
  </div>
  <div class="flex justify-center">
    <button @click="sendtimer()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-5/12 px-5  sm:text-xl py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </div>
  
</form>



    </div>
    <div class="flex justify-center mt-10 mb-10 mx-4">
    <div class="relative overflow-x-auto">
    <table class=" text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Jam
                </th>
                <th scope="col" class="px-6 py-3">
                   Menit
                </th>
                <th scope="col" class="px-6 py-3">
                    Jam ke 2
                </th>
                <th scope="col" class="px-6 py-3">
                    Menit ke 2
                </th>
                <th scope="col" class="px-6 py-3">
                    Jam ke 3
                </th>
                <th scope="col" class="px-6 py-3">
                    Menit ke 3
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">
                  {{ timer.jam1 }}
                </td>
                <td class="px-6 py-4">
                  {{ timer.menit1 }}
                </td>
                <td class="px-6 py-4">
                  {{ timer.jam2 }}
                </td>
                <td class="px-6 py-4">
                  {{ timer.menit2 }}
                </td>
                <td class="px-6 py-4">
                  {{ timer.jam1 }}
                </td>
                <td class="px-6 py-4">
                  {{ timer.menit3 }}
                </td>
            </tr>

        </tbody>
    </table>
</div>
</div>
</template>

<script>
import axios from 'axios'
import NavbarComponent from '@/components/NavbarComponent.vue';
    export default {
        name: 'TimerPakanbView',
        data() {
          return {
            jam1 : null,
            jam2 : null,
            jam3 : null,
            menit1 :null,
            menit2 :null,
            menit3 :null,
            timer :[]
          }
        },
        mounted() {
          this.autorender()
        },
        methods: {
          sendtimer(){
            axios.post('http://192.168.1.72:8000/timer', {jam1: this.jam1,menit1: this.menit1,jam2:this.jam2,menit2:this.menit2,jam3:this.jam3,menit3:this.menit3}).then((response) => {
            console.log(response);},
            (error) => {
            console.log(error);
            });
          },
          autorender(){
        setInterval(() => {
        axios.get('http://192.168.1.72:8000/timer').then(response => (this.timer = response.data.data));
      }, 1000);
    },
        },
        components:{
            NavbarComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>