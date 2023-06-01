<template>
  <NavbarComponent/>

 <div class=" mt-20 mb-10">
  <div class="flex justify-center text-xs sm:text-xl">
  
    <div class="font-semibold animate-pulse px-1">Terakhir diberi pakan pada:</div>
    <div class="text-blue-400 font-semibold" >{{ dateTime(waktu_pakan) }}</div>
  </div>
 <div class="mt-10 flex justify-center">
  <button @click="sendmqtt()" class="hover:bg-blue-700 bg-blue-500 py-2 px-4 text-white font-semibold mx-4 rounded-md sm:w-40 sm:h-16 sm:font-semibold sm:text-xl">Beri Makan</button>
 </div>
<div class="mt-10 flex justify-center">
  <a href="/timer-pakan" class="bg-blue-500 py-2 px-4 font-semibold text-white rounded-md hover:bg-blue-700" >Set Timer Pakan</a>
</div>

  <!-- <div class="mt-5 flex justify-center">
  <a href="/timer-air" class="bg-blue-500 py-2 px-4 font-semibold text-white rounded-md hover:bg-blue-700" >Set Timer Ganti Air</a>
</div> -->
 <div class="flex justify-center mt-10">
 <div class="w-48 sm:w-96">
  
<div class="flex justify-between mb-1">
  <span class="text-base sm:font-bold sm:text-2xl font-medium text-blue-700 dark:text-white">Pakan: </span>
   
  <span v-if="pakan == 'Pakan Habis'"  class="text-sm font-medium sm:font-bold sm:text-2xl text-red-700 dark:text-white">{{ pakan }}</span>
  <span v-else  class="text-sm font-medium sm:font-bold sm:text-2xl text-blue-700 dark:text-white">{{ pakan }}</span>
</div>
</div>
 </div>
 <div class="flex justify-center mt-10">
  <div class="">
    <div class="flex justify-center mb-2">
      <div class="mr-1 sm:text-xl font-semibold">Pompa 1:</div>
      <div v-if="pompa == 'pompa1 on'" class="sm:text-xl font-semibold text-green-600">ON</div>
      <div v-else class="sm:text-xl font-semibold text-red-600">OFF</div>
    </div>
    <button @click="pompa2off()" v-if="pompa == 'pompa1 on'" class="hover:bg-blue-700 bg-blue-500 py-2 px-6 w-32  text-white font-semibold mx-4 rounded-md sm:w-40 sm:h-16 sm:font-semibold sm:text-xl">Pompa 1 OFF</button>
    <button @click="pompa1on()" v-else class="mb-2 hover:bg-blue-700 bg-blue-500 py-2 w-32 px-6 text-white font-semibold mx-4 rounded-md sm:w-40 sm:h-16 sm:font-semibold sm:text-xl">Pompa 1 ON</button>
   
  </div>
  <div class="">
    <div class="flex justify-center mb-2">
      <div class="mr-1 sm:text-xl font-semibold">Pompa 2:</div>
      <div  v-if="pompa2 == 'pompa2 on'" class="sm:text-xl font-semibold text-green-600">ON</div>
      <div v-else class="sm:text-xl font-semibold text-red-600">OFF</div>
    </div>
    <button @click="pompa2off()" v-if="pompa2 == 'pompa2 on'" class="hover:bg-blue-700 bg-blue-500 py-2 px-6  w-32 text-white font-semibold mx-4 rounded-md sm:w-40 sm:h-16 sm:font-semibold sm:text-xl">Pompa 2 OFF</button>
    <button @click="pompa2on()" v-else class="mb-2 hover:bg-blue-700 bg-blue-500 py-2 px-6 w-32  text-white font-semibold mx-4 rounded-md sm:w-40 sm:h-16 sm:font-semibold sm:text-xl">Pompa 2 ON</button>
    
  </div>
  
</div>
</div>

</template>

<script>
// @ is an alias to /src

import axios from 'axios'

// import moment from 'moment';
import moment from 'moment-timezone'
import NavbarComponent from '../components/NavbarComponent.vue'

export default {
  
  name: 'HomeView',
 
 

  data(){
    return {
      pakan : null,
      pompa : null,
      pompa2 : null,
      date: null,
      waktu_pakan : null,
    }
   
  },
  mounted() {
   this.autorender();
    
 },
 computed: {
            formattedDate() {
                return this.formatDate(this.date);
            }
        },
  methods:{
    dateTime(value) {
      return moment(value).tz('Asia/Jakarta').format('MMM DD YYYY HH:MM:DD');
    },
    autorender(){
      setInterval(() => {
        axios.get('https://iot-backend-expressjs.vercel.app/pakan').then(response => (this.pakan = response.data.data));
        axios.get('https://iot-backend-expressjs.vercel.app/pompa-1').then(response => (this.pompa = response.data.data));
        axios.get('https://iot-backend-expressjs.vercel.app/pompa-2').then(response => (this.pompa2 = response.data.data));
        axios.get('https://iot-backend-expressjs.vercel.app/waktu-pakan').then(response => (this.waktu_pakan = response.data.data));
      }, 1000);
    },
    sendmqtt(){
      
      axios.post('https://iot-backend-expressjs.vercel.app/pakan')
      .then(response => (this.test = response.data.status))
      
      
  },
  pompa1on(){
      
      axios.post('https://iot-backend-expressjs.vercel.app/pompa1-on')
      .then(response => (this.test = response.data.status))
      
      
  },pompa1off(){
      
      axios.post('https://iot-backend-expressjs.vercel.app/pompa1-off')
      .then(response => (this.test = response.data.status))
      
      
  },pompa2on(){
      
      axios.post('https://iot-backend-expressjs.vercel.app/pompa2-on')
      .then(response => (this.test = response.data.status))
      
      
  },
pompa2off(){
      
      axios.post('https://iot-backend-expressjs.vercel.app/pompa2-off')
      .then(response => (this.test = response.data.status))
      
      
  },
  },

  
 
  components: {
   NavbarComponent
  }
}
</script>
